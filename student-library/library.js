// Sample library data
const libraryData = [
    // Books
    {
        id: 1,
        type: 'books',
        title: 'Introduction to Programming',
        description: 'A comprehensive guide to programming fundamentals covering algorithms, data structures, and problem-solving.',
        author: 'Dr. Jane Smith',
        year: 2024,
        pages: 450,
        content: 'This book covers essential programming concepts including variables, control structures, functions, object-oriented programming, and more. Perfect for beginners and intermediate learners.'
    },
    {
        id: 2,
        type: 'books',
        title: 'Advanced Mathematics',
        description: 'Explore calculus, linear algebra, and differential equations with detailed examples and practice problems.',
        author: 'Prof. Michael Johnson',
        year: 2023,
        pages: 680,
        content: 'An in-depth exploration of advanced mathematical concepts with real-world applications in engineering, physics, and computer science.'
    },
    {
        id: 3,
        type: 'books',
        title: 'Physics: Principles and Applications',
        description: 'Understanding the fundamental principles of physics through theory and practical applications.',
        author: 'Dr. Sarah Williams',
        year: 2024,
        pages: 520,
        content: 'Covers mechanics, thermodynamics, electromagnetism, optics, and modern physics with numerous examples and exercises.'
    },
    {
        id: 4,
        type: 'books',
        title: 'Chemistry Essentials',
        description: 'Core chemistry concepts from atomic structure to organic chemistry.',
        author: 'Prof. Robert Brown',
        year: 2023,
        pages: 590,
        content: 'A complete guide to general, organic, and inorganic chemistry with laboratory experiments and practical applications.'
    },
    
    // Articles
    {
        id: 5,
        type: 'articles',
        title: 'The Future of Artificial Intelligence',
        description: 'An analysis of current AI trends and future predictions in machine learning and neural networks.',
        author: 'Dr. Emily Chen',
        year: 2026,
        pages: 12,
        content: 'This article explores the latest developments in AI, including deep learning, natural language processing, and ethical considerations in AI development.'
    },
    {
        id: 6,
        type: 'articles',
        title: 'Climate Change and Sustainability',
        description: 'Research findings on global climate patterns and sustainable development strategies.',
        author: 'Dr. David Martinez',
        year: 2026,
        pages: 18,
        content: 'A comprehensive review of climate science, environmental impact, and practical solutions for sustainable living.'
    },
    {
        id: 7,
        type: 'articles',
        title: 'Modern Web Development Practices',
        description: 'Best practices and frameworks for building scalable web applications.',
        author: 'Alex Thompson',
        year: 2026,
        pages: 10,
        content: 'Covers HTML5, CSS3, JavaScript frameworks, responsive design, and modern development workflows.'
    },
    {
        id: 8,
        type: 'articles',
        title: 'Quantum Computing Basics',
        description: 'Introduction to quantum mechanics principles and their application in computing.',
        author: 'Dr. Lisa Anderson',
        year: 2025,
        pages: 15,
        content: 'An accessible introduction to quantum computing, qubits, superposition, and quantum algorithms.'
    },
    
    // Topics
    {
        id: 9,
        type: 'topics',
        title: 'Data Structures and Algorithms',
        description: 'Complete course material on fundamental data structures and algorithmic techniques.',
        author: 'Computer Science Dept.',
        year: 2024,
        pages: 200,
        content: 'Comprehensive coverage of arrays, linked lists, trees, graphs, sorting, searching, and complexity analysis.'
    },
    {
        id: 10,
        type: 'topics',
        title: 'Organic Chemistry Reactions',
        description: 'Detailed study of organic reactions, mechanisms, and synthesis.',
        author: 'Chemistry Dept.',
        year: 2024,
        pages: 150,
        content: 'Study guide covering reaction mechanisms, stereochemistry, and organic synthesis strategies.'
    },
    {
        id: 11,
        type: 'topics',
        title: 'Electromagnetic Theory',
        description: 'Study materials on Maxwell\'s equations and electromagnetic wave propagation.',
        author: 'Physics Dept.',
        year: 2024,
        pages: 120,
        content: 'Complete notes on electrostatics, magnetostatics, electromagnetic induction, and wave theory.'
    },
    {
        id: 12,
        type: 'topics',
        title: 'Microeconomics Principles',
        description: 'Core concepts in microeconomic theory including supply, demand, and market equilibrium.',
        author: 'Economics Dept.',
        year: 2024,
        pages: 180,
        content: 'Study guide covering consumer behavior, production theory, market structures, and game theory.'
    },
    
    // Past Papers
    {
        id: 13,
        type: 'papers',
        title: 'Computer Science Final Exam 2025',
        description: 'Final examination paper covering algorithms, databases, and software engineering.',
        author: 'CS Department',
        year: 2025,
        pages: 8,
        content: 'Previous year exam paper with questions on programming, data structures, databases, and system design.'
    },
    {
        id: 14,
        type: 'papers',
        title: 'Mathematics Midterm 2025',
        description: 'Midterm exam covering calculus and linear algebra.',
        author: 'Math Department',
        year: 2025,
        pages: 6,
        content: 'Past exam with problems on derivatives, integrals, matrices, and vector spaces.'
    },
    {
        id: 15,
        type: 'papers',
        title: 'Physics Year End Exam 2024',
        description: 'Comprehensive physics examination covering all topics from the academic year.',
        author: 'Physics Department',
        year: 2024,
        pages: 10,
        content: 'Complete exam paper with theoretical and numerical problems in mechanics, thermodynamics, and electromagnetism.'
    },
    {
        id: 16,
        type: 'papers',
        title: 'Chemistry Practical Exam 2025',
        description: 'Practical examination questions and lab experiments.',
        author: 'Chemistry Department',
        year: 2025,
        pages: 7,
        content: 'Past practical exam with laboratory procedures, observations, and analysis questions.'
    }
];

let currentFilter = 'all';
let searchQuery = '';

// Initialize library page
document.addEventListener('DOMContentLoaded', function() {
    // Check for search parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    
    if (searchParam) {
        document.getElementById('librarySearch').value = searchParam;
        searchQuery = searchParam.toLowerCase();
    }
    
    // Setup filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            displayResources();
        });
    });
    
    // Setup search
    document.getElementById('librarySearch').addEventListener('input', function(e) {
        searchQuery = e.target.value.toLowerCase();
        displayResources();
    });
    
    // Setup modal
    const modal = document.getElementById('resourceModal');
    const closeBtn = document.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    // Initial display
    displayResources();
});

function searchLibrary() {
    searchQuery = document.getElementById('librarySearch').value.toLowerCase();
    displayResources();
}

function displayResources() {
    const resultsContainer = document.getElementById('libraryResults');
    const resultsCount = document.getElementById('resultsCount');
    
    // Filter resources
    let filteredResources = libraryData.filter(resource => {
        const matchesFilter = currentFilter === 'all' || resource.type === currentFilter;
        const matchesSearch = !searchQuery || 
            resource.title.toLowerCase().includes(searchQuery) ||
            resource.description.toLowerCase().includes(searchQuery) ||
            resource.author.toLowerCase().includes(searchQuery);
        
        return matchesFilter && matchesSearch;
    });
    
    // Update count
    resultsCount.textContent = `${filteredResources.length} resource${filteredResources.length !== 1 ? 's' : ''} found`;
    
    // Display resources
    if (filteredResources.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align: center; padding: 2rem; color: #6b7280;">No resources found. Try a different search or filter.</p>';
        return;
    }
    
    resultsContainer.innerHTML = filteredResources.map(resource => `
        <div class="resource-card" onclick="viewResource(${resource.id})">
            <span class="resource-type type-${resource.type}">${resource.type.toUpperCase()}</span>
            <h3>${resource.title}</h3>
            <p>${resource.description}</p>
            <div class="resource-meta">
                <span>👤 ${resource.author}</span>
                <span>📅 ${resource.year}</span>
                <span>📄 ${resource.pages} pages</span>
            </div>
        </div>
    `).join('');
}

function viewResource(id) {
    const resource = libraryData.find(r => r.id === id);
    if (!resource) return;
    
    const modal = document.getElementById('resourceModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${resource.title}</h2>
        <div style="margin: 1rem 0;">
            <span class="resource-type type-${resource.type}">${resource.type.toUpperCase()}</span>
        </div>
        <div class="resource-meta" style="margin-bottom: 1.5rem;">
            <span>👤 ${resource.author}</span>
            <span>📅 ${resource.year}</span>
            <span>📄 ${resource.pages} pages</span>
        </div>
        <h3>Description</h3>
        <p style="margin-bottom: 1rem;">${resource.description}</p>
        <h3>Content</h3>
        <p style="margin-bottom: 1.5rem;">${resource.content}</p>
        <div style="text-align: center;">
            <button class="btn btn-primary" onclick="downloadResource(${resource.id})">📥 Download</button>
            <button class="btn btn-secondary" onclick="closeModal()">Close</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('resourceModal').style.display = 'none';
}

function downloadResource(id) {
    const resource = libraryData.find(r => r.id === id);
    alert(`Downloading: ${resource.title}\n\nIn a real application, this would download the actual file.`);
}
