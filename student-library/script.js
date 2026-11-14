// Global search function from home page
function performSearch() {
    const searchTerm = document.getElementById('homeSearch').value.trim();
    if (searchTerm) {
        window.location.href = `library.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

// Handle enter key in search box
document.addEventListener('DOMContentLoaded', function() {
    const homeSearch = document.getElementById('homeSearch');
    if (homeSearch) {
        homeSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

// Utility function to format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Utility function to calculate grade
function calculateGrade(percentage) {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
}

// Utility function to get grade class
function getGradeClass(grade) {
    return `grade-${grade}`;
}

// LocalStorage utility functions
const Storage = {
    saveQuizResult: function(result) {
        const results = this.getQuizResults();
        results.push(result);
        localStorage.setItem('quizResults', JSON.stringify(results));
    },
    
    getQuizResults: function() {
        const results = localStorage.getItem('quizResults');
        return results ? JSON.parse(results) : [];
    },
    
    clearQuizResults: function() {
        localStorage.removeItem('quizResults');
    }
};
