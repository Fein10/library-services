// Sample quiz data
const quizzes = [
    {
        id: 1,
        title: 'Introduction to Programming',
        subject: 'Computer Science',
        questions: 10,
        duration: 15,
        difficulty: 'Beginner',
        questions: [
            {
                question: 'What does CPU stand for?',
                options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Utility', 'Central Processor Universal'],
                correct: 0
            },
            {
                question: 'Which of the following is a programming language?',
                options: ['HTML', 'Python', 'CSS', 'All of the above'],
                correct: 3
            },
            {
                question: 'What is a variable in programming?',
                options: ['A container for storing data', 'A type of loop', 'A function', 'A comment'],
                correct: 0
            },
            {
                question: 'Which symbol is used for comments in Python?',
                options: ['//', '/*', '#', '<!--'],
                correct: 2
            },
            {
                question: 'What does "if" statement do?',
                options: ['Loops through code', 'Makes decisions in code', 'Defines a function', 'Imports a library'],
                correct: 1
            },
            {
                question: 'What is the output of: print(2 + 2)?',
                options: ['22', '4', 'Error', '2+2'],
                correct: 1
            },
            {
                question: 'Which of these is NOT a data type?',
                options: ['Integer', 'String', 'Boolean', 'Loop'],
                correct: 3
            },
            {
                question: 'What does IDE stand for?',
                options: ['Integrated Development Environment', 'Internet Data Explorer', 'Interactive Design Editor', 'Internal Debug Engine'],
                correct: 0
            },
            {
                question: 'What is a function?',
                options: ['A variable', 'A reusable block of code', 'A type of error', 'A comment'],
                correct: 1
            },
            {
                question: 'Which operator is used for equality comparison?',
                options: ['=', '==', '===', 'equals'],
                correct: 1
            }
        ]
    },
    {
        id: 2,
        title: 'Basic Mathematics',
        subject: 'Mathematics',
        questions: 8,
        duration: 12,
        difficulty: 'Beginner',
        questions: [
            {
                question: 'What is 15 + 27?',
                options: ['41', '42', '43', '44'],
                correct: 1
            },
            {
                question: 'What is the square root of 144?',
                options: ['10', '11', '12', '13'],
                correct: 2
            },
            {
                question: 'What is 8 × 7?',
                options: ['54', '55', '56', '57'],
                correct: 2
            },
            {
                question: 'What is 100 ÷ 4?',
                options: ['20', '25', '30', '35'],
                correct: 1
            },
            {
                question: 'What is 2³ (2 to the power of 3)?',
                options: ['6', '8', '9', '12'],
                correct: 1
            },
            {
                question: 'What is 50% of 80?',
                options: ['30', '35', '40', '45'],
                correct: 2
            },
            {
                question: 'What is the value of π (pi) approximately?',
                options: ['2.14', '3.14', '4.14', '5.14'],
                correct: 1
            },
            {
                question: 'If a triangle has angles 60°, 60°, and x°, what is x?',
                options: ['30°', '45°', '60°', '90°'],
                correct: 2
            }
        ]
    },
    {
        id: 3,
        title: 'Physics Fundamentals',
        subject: 'Physics',
        questions: 10,
        duration: 15,
        difficulty: 'Intermediate',
        questions: [
            {
                question: 'What is the SI unit of force?',
                options: ['Joule', 'Newton', 'Watt', 'Pascal'],
                correct: 1
            },
            {
                question: 'What is the speed of light in vacuum?',
                options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10⁹ m/s', '3 × 10⁷ m/s'],
                correct: 0
            },
            {
                question: 'What is the formula for kinetic energy?',
                options: ['mgh', '½mv²', 'mv', 'F × d'],
                correct: 1
            },
            {
                question: 'What does Newton\'s First Law state?',
                options: ['F = ma', 'Every action has an equal and opposite reaction', 'An object in motion stays in motion unless acted upon', 'Energy cannot be created or destroyed'],
                correct: 2
            },
            {
                question: 'What is the acceleration due to gravity on Earth?',
                options: ['8.8 m/s²', '9.8 m/s²', '10.8 m/s²', '11.8 m/s²'],
                correct: 1
            },
            {
                question: 'What type of energy does a stretched spring possess?',
                options: ['Kinetic', 'Potential', 'Thermal', 'Chemical'],
                correct: 1
            },
            {
                question: 'What is the SI unit of power?',
                options: ['Joule', 'Newton', 'Watt', 'Ampere'],
                correct: 2
            },
            {
                question: 'Which law explains how a rocket works?',
                options: ['First Law', 'Second Law', 'Third Law', 'Law of Gravitation'],
                correct: 2
            },
            {
                question: 'What is the principle behind a lever?',
                options: ['Conservation of energy', 'Conservation of momentum', 'Mechanical advantage', 'Electromagnetic induction'],
                correct: 2
            },
            {
                question: 'What happens to resistance when temperature increases in a conductor?',
                options: ['Decreases', 'Increases', 'Stays same', 'Becomes zero'],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        title: 'World History',
        subject: 'History',
        questions: 8,
        duration: 10,
        difficulty: 'Intermediate',
        questions: [
            {
                question: 'In which year did World War II end?',
                options: ['1943', '1944', '1945', '1946'],
                correct: 2
            },
            {
                question: 'Who was the first president of the United States?',
                options: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin Franklin'],
                correct: 1
            },
            {
                question: 'Which ancient civilization built the pyramids?',
                options: ['Romans', 'Greeks', 'Egyptians', 'Mayans'],
                correct: 2
            },
            {
                question: 'What year did the Berlin Wall fall?',
                options: ['1987', '1988', '1989', '1990'],
                correct: 2
            },
            {
                question: 'Who wrote the Declaration of Independence?',
                options: ['George Washington', 'Benjamin Franklin', 'Thomas Jefferson', 'John Adams'],
                correct: 2
            },
            {
                question: 'Which empire was ruled by Julius Caesar?',
                options: ['Greek Empire', 'Roman Empire', 'Persian Empire', 'Ottoman Empire'],
                correct: 1
            },
            {
                question: 'What was the name of the ship that brought Pilgrims to America?',
                options: ['Santa Maria', 'Mayflower', 'Victoria', 'Endeavour'],
                correct: 1
            },
            {
                question: 'Who discovered America in 1492?',
                options: ['Vasco da Gama', 'Christopher Columbus', 'Ferdinand Magellan', 'Marco Polo'],
                correct: 1
            }
        ]
    },
    {
        id: 5,
        title: 'General Science',
        subject: 'Science',
        questions: 12,
        duration: 18,
        difficulty: 'Beginner',
        questions: [
            {
                question: 'What is the chemical symbol for water?',
                options: ['H2O', 'CO2', 'O2', 'H2O2'],
                correct: 0
            },
            {
                question: 'How many planets are in our solar system?',
                options: ['7', '8', '9', '10'],
                correct: 1
            },
            {
                question: 'What gas do plants absorb from the atmosphere?',
                options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
                correct: 2
            },
            {
                question: 'What is the largest organ in the human body?',
                options: ['Heart', 'Brain', 'Liver', 'Skin'],
                correct: 3
            },
            {
                question: 'What is the center of an atom called?',
                options: ['Electron', 'Proton', 'Nucleus', 'Neutron'],
                correct: 2
            },
            {
                question: 'What is the boiling point of water at sea level?',
                options: ['90°C', '100°C', '110°C', '120°C'],
                correct: 1
            },
            {
                question: 'Which planet is known as the Red Planet?',
                options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                correct: 1
            },
            {
                question: 'What is the process by which plants make food?',
                options: ['Respiration', 'Digestion', 'Photosynthesis', 'Fermentation'],
                correct: 2
            },
            {
                question: 'How many bones are in the adult human body?',
                options: ['186', '196', '206', '216'],
                correct: 2
            },
            {
                question: 'What is the chemical symbol for gold?',
                options: ['Go', 'Gd', 'Au', 'Ag'],
                correct: 2
            },
            {
                question: 'What type of animal is a dolphin?',
                options: ['Fish', 'Mammal', 'Reptile', 'Amphibian'],
                correct: 1
            },
            {
                question: 'What is the hardest natural substance on Earth?',
                options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
                correct: 2
            }
        ]
    }
];

let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timerInterval = null;

// Initialize quiz page
document.addEventListener('DOMContentLoaded', function() {
    displayQuizList();
});

function displayQuizList() {
    const quizList = document.getElementById('quizList');
    
    quizList.innerHTML = quizzes.map(quiz => `
        <div class="quiz-card">
            <h3>${quiz.title}</h3>
            <p>${quiz.subject} - ${quiz.difficulty} Level</p>
            <div class="quiz-meta">
                <span>📝 ${quiz.questions.length} Questions</span>
                <span>⏱️ ${quiz.duration} Minutes</span>
            </div>
            <button class="btn btn-primary" onclick="startQuiz(${quiz.id})">Start Quiz</button>
        </div>
    `).join('');
}

function startQuiz(quizId) {
    currentQuiz = quizzes.find(q => q.id === quizId);
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuiz.questions.length).fill(null);
    startTime = Date.now();
    
    document.getElementById('quizSelection').style.display = 'none';
    document.getElementById('quizTaking').style.display = 'block';
    document.getElementById('quizTitle').textContent = currentQuiz.title;
    
    startTimer();
    displayQuestion();
}

function startTimer() {
    const duration = currentQuiz.duration * 60; // Convert to seconds
    let elapsed = 0;
    
    timerInterval = setInterval(() => {
        elapsed++;
        const remaining = duration - elapsed;
        
        if (remaining <= 0) {
            clearInterval(timerInterval);
            alert('Time is up! Your quiz will be submitted automatically.');
            submitQuiz();
            return;
        }
        
        document.getElementById('timeDisplay').textContent = formatTime(remaining);
        
        // Warning at 1 minute remaining
        if (remaining === 60) {
            alert('One minute remaining!');
        }
    }, 1000);
}

function displayQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    
    document.getElementById('questionCounter').textContent = 
        `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
    
    document.getElementById('questionContent').innerHTML = 
        `<h3>Q${currentQuestionIndex + 1}. ${question.question}</h3>`;
    
    const optionsHtml = question.options.map((option, index) => `
        <div class="option ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}" 
             onclick="selectOption(${index})">
            ${String.fromCharCode(65 + index)}. ${option}
        </div>
    `).join('');
    
    document.getElementById('optionsContainer').innerHTML = optionsHtml;
    
    // Update navigation buttons
    document.getElementById('prevBtn').style.display = 
        currentQuestionIndex === 0 ? 'none' : 'block';
    
    const isLastQuestion = currentQuestionIndex === currentQuiz.questions.length - 1;
    document.getElementById('nextBtn').style.display = isLastQuestion ? 'none' : 'block';
    document.getElementById('submitBtn').style.display = isLastQuestion ? 'block' : 'none';
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    displayQuestion();
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function submitQuiz() {
    // Check if all questions are answered
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`You have ${unanswered} unanswered question(s). Do you want to submit anyway?`)) {
            return;
        }
    }
    
    clearInterval(timerInterval);
    
    // Calculate results
    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    
    let correctCount = 0;
    const reviewData = currentQuiz.questions.map((q, index) => {
        const isCorrect = userAnswers[index] === q.correct;
        if (isCorrect) correctCount++;
        
        return {
            question: q.question,
            userAnswer: userAnswers[index] !== null ? q.options[userAnswers[index]] : 'Not answered',
            correctAnswer: q.options[q.correct],
            isCorrect: isCorrect
        };
    });
    
    const totalQuestions = currentQuiz.questions.length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);
    const grade = calculateGrade(percentage);
    
    // Save result
    const result = {
        date: new Date().toISOString(),
        quizId: currentQuiz.id,
        quizTitle: currentQuiz.title,
        subject: currentQuiz.subject,
        score: percentage,
        correct: correctCount,
        total: totalQuestions,
        grade: grade,
        timeTaken: timeTaken,
        reviewData: reviewData
    };
    
    Storage.saveQuizResult(result);
    
    // Display results
    displayResults(result);
}

function displayResults(result) {
    document.getElementById('quizTaking').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    document.getElementById('scorePercentage').textContent = `${result.score}%`;
    document.getElementById('scoreText').textContent = 
        `You scored ${result.correct} out of ${result.total} questions correctly`;
    
    document.getElementById('correctCount').textContent = result.correct;
    document.getElementById('incorrectCount').textContent = result.total - result.correct;
    document.getElementById('timeTaken').textContent = formatTime(result.timeTaken);
    document.getElementById('gradeDisplay').innerHTML = 
        `<span class="grade-badge ${getGradeClass(result.grade)}">${result.grade}</span>`;
    
    // Display review
    const reviewHtml = result.reviewData.map((item, index) => `
        <div class="question-review ${item.isCorrect ? 'correct' : 'incorrect'}">
            <h4>Question ${index + 1}: ${item.question}</h4>
            <div class="answer-info">
                <p class="your-answer">Your answer: ${item.userAnswer}</p>
                ${!item.isCorrect ? `<p class="correct-answer">Correct answer: ${item.correctAnswer}</p>` : ''}
            </div>
        </div>
    `).join('');
    
    document.getElementById('reviewSection').innerHTML = `
        <h3>Review Your Answers</h3>
        ${reviewHtml}
    `;
}

function retakeQuiz() {
    startQuiz(currentQuiz.id);
    document.getElementById('quizResults').style.display = 'none';
}

function backToQuizzes() {
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizSelection').style.display = 'block';
    currentQuiz = null;
}

function viewAllResults() {
    window.location.href = 'results.html';
}
