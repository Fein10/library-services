// Initialize results page
document.addEventListener('DOMContentLoaded', function() {
    loadResults();
});

function loadResults() {
    const results = Storage.getQuizResults();
    
    if (results.length === 0) {
        document.getElementById('noResults').style.display = 'block';
        document.getElementById('resultsTable').style.display = 'none';
        return;
    }
    
    // Calculate statistics
    const totalQuizzes = results.length;
    const averageScore = Math.round(
        results.reduce((sum, r) => sum + r.score, 0) / totalQuizzes
    );
    const bestScore = Math.max(...results.map(r => r.score));
    const totalTime = Math.floor(
        results.reduce((sum, r) => sum + r.timeTaken, 0) / 60
    );
    
    document.getElementById('totalQuizzes').textContent = totalQuizzes;
    document.getElementById('averageScore').textContent = `${averageScore}%`;
    document.getElementById('bestScore').textContent = `${bestScore}%`;
    document.getElementById('totalTime').textContent = `${totalTime} min`;
    
    // Display results table
    const tableBody = document.getElementById('resultsTableBody');
    tableBody.innerHTML = results
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((result, index) => `
            <tr>
                <td>${new Date(result.date).toLocaleDateString()} ${new Date(result.date).toLocaleTimeString()}</td>
                <td>${result.quizTitle}<br><small style="color: #6b7280;">${result.subject}</small></td>
                <td><strong>${result.score}%</strong></td>
                <td>${result.correct}/${result.total}</td>
                <td><span class="grade-badge ${getGradeClass(result.grade)}">${result.grade}</span></td>
                <td>${formatTime(result.timeTaken)}</td>
                <td>
                    <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.875rem;" 
                            onclick="viewResultDetail(${index})">View</button>
                </td>
            </tr>
        `).join('');
}

function viewResultDetail(index) {
    const results = Storage.getQuizResults();
    const result = results.sort((a, b) => new Date(b.date) - new Date(a.date))[index];
    
    // Create modal for detailed view
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    const reviewHtml = result.reviewData.map((item, idx) => `
        <div class="question-review ${item.isCorrect ? 'correct' : 'incorrect'}">
            <h4>Question ${idx + 1}: ${item.question}</h4>
            <div class="answer-info">
                <p class="your-answer">Your answer: ${item.userAnswer}</p>
                ${!item.isCorrect ? `<p class="correct-answer">Correct answer: ${item.correctAnswer}</p>` : ''}
            </div>
        </div>
    `).join('');
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <h2>${result.quizTitle}</h2>
            <p style="color: #6b7280; margin-bottom: 1.5rem;">
                ${new Date(result.date).toLocaleDateString()} at ${new Date(result.date).toLocaleTimeString()}
            </p>
            
            <div class="results-details" style="margin-bottom: 2rem;">
                <div class="result-stat">
                    <span class="stat-label">Score:</span>
                    <span class="stat-value">${result.score}%</span>
                </div>
                <div class="result-stat">
                    <span class="stat-label">Correct Answers:</span>
                    <span class="stat-value">${result.correct}/${result.total}</span>
                </div>
                <div class="result-stat">
                    <span class="stat-label">Grade:</span>
                    <span class="stat-value"><span class="grade-badge ${getGradeClass(result.grade)}">${result.grade}</span></span>
                </div>
                <div class="result-stat">
                    <span class="stat-label">Time Taken:</span>
                    <span class="stat-value">${formatTime(result.timeTaken)}</span>
                </div>
            </div>
            
            <h3>Answer Review</h3>
            <div class="review-section">
                ${reviewHtml}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal on outside click
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    };
}

function clearAllResults() {
    if (confirm('Are you sure you want to delete all quiz results? This action cannot be undone.')) {
        Storage.clearQuizResults();
        loadResults();
    }
}
