const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) { // lg breakpoint
            mobileMenu.classList.add('hidden');
        }
    });

document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('mukulsection').scrollIntoView({ behavior: 'smooth' });
});

tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          'heading': ['"Playfair Display"', 'serif'],
          'body': ['Poppins', 'sans-serif'],
        },
        colors: {
          'coffee': {
            light: '#E6D5B8',
            DEFAULT: '#A47551',
            dark: '#6F4E37',
          }
        }
      }
    }
  }

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any icons if needed
    try {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    } catch (e) {
        console.log('Using Font Awesome fallback icons');
    }

// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Why Srishti?",
        excerpt: "One of the best things we can do for our children is to...",
        category: "Wellness",
        author: "Priya Sharma",
        date: "2025-02-15",
        readTime: "5 min read",
        featured: true
    },
    {
        id: 2,
        title: "Agni 1 – Chew Every Morsel of Food At least 24 Times",
        excerpt: "In yoga we say, ‘If you take a morsel of food, you must chew it twenty-four times.’ There is...",
        category: "Education",
        author: "Rahul Verma",
        date: "2025-02-14",
        readTime: "8 min read",
        featured: true
    },
    {
        id: 3,
        title: "Doing what you truly care about!",
        excerpt: "Whenever you start something new, a million doubts could arise in your mind — will it work? Would this...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 4,
        title: "Why Teaching Kids?",
        excerpt: "My first attempt at teaching kids was back in 2010 — this was not a choice I had made!...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 5,
        title: "Adiyogi’s night out!",
        excerpt: "It still amazes me how one man could do so much? And that ever since humanity existed, ...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 6,
        title: "From 20 mins a day to 24 hours yoga!",
        excerpt: "In the last few years, one ritual that I have strived to keep is that of going into silence at the Isha center...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 7,
        title: "Yogi Re turns 2!",
        excerpt: "It’s been 2 years now since I set out on this path of becoming a medium to transmit yoga...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 8,
        title: "Year 2019 – what is your plan for ‘yourself’?",
        excerpt: "Another year gone by…just a few days and we will be at the end of 2018! You might be doing...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 9,
        title: "What motivates you to keep up with your yoga practices?",
        excerpt: "Many people cite lack of motivation as one of the reasons why they are unable to continue ...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 10,
        title: "Teaching kids – an acid test for yoga!",
        excerpt: "Many times I get requests from parents if I could do anything to change their kids ...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 11,
        title: "10 years of Isha Yoga!",
        excerpt: "Namaskaram, in another few weeks, will be completing 10 years of Isha Yoga 🙂 I did my...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 12,
        title: "What one thing would you like to change?",
        excerpt: "If there was only one thing that could be changed about yourself what would that be? ...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 13,
        title: "Irritation — A Boon or a Bane?",
        excerpt: "Does it happen to you that people can irritate you?If it any point of time you get irritated...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 14,
        title: "A Note to All My Friends Who Care for Their Well-being!",
        excerpt: "If you are the procrastinating kind, where you keep on postponing your well-being, your happiness...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 15,
        title: "Yoga Magic — It’s Real!",
        excerpt: "Yet again came across a child who didn’t want to have anything to do with yoga and her mom had to...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 16,
        title: "Gem of a Girl – Isha Hatha Yoga Kids",
        excerpt: "After taking so many kids programs ..first time came across this gem of a girl – have never come ...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 17,
        title: "TCS 10km Run – Isha Vidhya",
        excerpt: "I put myself to test today by running for the TCS 10kms run, we ran to create awareness for...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 18,
        title: "21 Days at the Isha Yoga Center!",
        excerpt: "Wanted to share my experience of being at the ashram! The last 21 days have been an enriching ...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 19,
        title: "Kailash Manasarovar – An Unforgettable Saga!",
        excerpt: "I had heard many things about Kailash that had piqued my interest and made me want to go...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 20,
        title: "Kids and Angamardana",
        excerpt: "I was initially apprehensive about whether kids would be able to do Angamardana but after this...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 21,
        title: "Yogi in the Making — Venu Kumar",
        excerpt: "It is heartening to come across stories like this – so felt like sharing. I had met Venu Kumar Venu...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    },
    {
        id: 22,
        title: "Kailash — Dissolving Yourself!",
        excerpt: "It is difficult to understand why would someone want to wear themselves out or...",
        category: "Meditation",
        author: "Anjali Desai",
        date: "2025-02-13",
        readTime: "6 min read",
        featured: false
    }

];

// Categories data
const categories = [
    { name: "All", count: blogPosts.length },
    { name: "Wellness", count: 12 },
    { name: "Education", count: 8 },
    { name: "Meditation", count: 10 },
    { name: "Yoga Poses", count: 15 },
    { name: "Spirituality", count: 7 }
];

// State
let searchQuery = '';
let selectedCategory = 'All';
let selectedAuthor = 'All';
let selectedDate = 'All';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const filterToggle = document.getElementById('filterToggle');
const filterPanel = document.getElementById('filterPanel');
const clearFilters = document.getElementById('clearFilters');
const categoryFilter = document.getElementById('categoryFilter');
const authorFilter = document.getElementById('authorFilter');
const dateFilter = document.getElementById('dateFilter');
const blogPostsContainer = document.getElementById('blogPosts');
const resultsCount = document.getElementById('resultsCount');
const categoriesList = document.getElementById('categoriesList');

// Initialize authors filter
const authors = ['All', ...new Set(blogPosts.map(post => post.author))];
authors.forEach(author => {
    const option = document.createElement('option');
    option.value = author;
    option.textContent = `Author: ${author}`;
    authorFilter.appendChild(option);
});

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Filter posts
function filterPosts() {
    const filtered = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesAuthor = selectedAuthor === 'All' || post.author === selectedAuthor;
        
        let matchesDate = true;
        if (selectedDate !== 'All') {
            const postDate = new Date(post.date);
            const now = new Date();
            const diff = now - postDate;
            
            switch (selectedDate) {
                case 'Last Week':
                    matchesDate = diff <= 7 * 24 * 60 * 60 * 1000;
                    break;
                case 'Last Month':
                    matchesDate = diff <= 30 * 24 * 60 * 60 * 1000;
                    break;
                case 'Last 3 Months':
                    matchesDate = diff <= 90 * 24 * 60 * 60 * 1000;
                    break;
                case 'Last Year':
                    matchesDate = diff <= 365 * 24 * 60 * 60 * 1000;
                    break;
            }
        }
        
        return matchesSearch && matchesCategory && matchesAuthor && matchesDate;
    });

    renderPosts(filtered);
    updateResultsCount(filtered);
    updateClearFiltersButton();
}

// Render posts
function renderPosts(posts) {
    blogPostsContainer.innerHTML = posts.map(post => `
        <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex items-center gap-2 mb-2">
                <span class="text-sm text-[#663702]">${post.category}</span>
                <span class="text-gray-400">•</span>
                <span class="text-sm text-gray-600">${post.readTime}</span>
            </div>
            <h3 class="text-xl font-bold mb-2">${post.title}</h3>
            <p class="text-gray-600 mb-4">${post.excerpt}</p>
            <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">By ${post.author}</span>
                <span class="text-sm text-gray-500">${formatDate(post.date)}</span>
            </div>
        </div>
    `).join('') || `
        <div class="text-center py-8">
            <p class="text-gray-500">No posts found matching your criteria.</p>
        </div>
    `;
}

// Render categories
function renderCategories() {
    categoriesList.innerHTML = categories.map(category => `
        <div class="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded ${
            selectedCategory === category.name ? 'text-indigo-600 font-medium' : 'text-gray-700'
        }" onclick="selectCategory('${category.name}')">
            <span>${category.name}</span>
            <span class="text-gray-500 text-sm">${category.count}</span>
        </div>
    `).join('');
}

// Update results count
function updateResultsCount(filtered) {
    resultsCount.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'result' : 'results'}`;
}

// Update clear filters button visibility
function updateClearFiltersButton() {
    clearFilters.classList.toggle('hidden', 
        selectedCategory === 'All' && 
        selectedAuthor === 'All' && 
        selectedDate === 'All' && 
        !searchQuery
    );
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterPosts();
});

filterToggle.addEventListener('click', () => {
    filterPanel.classList.toggle('hidden');
});

clearFilters.addEventListener('click', () => {
    searchQuery = '';
    selectedCategory = 'All';
    selectedAuthor = 'All';
    selectedDate = 'All';
    
    searchInput.value = '';
    categoryFilter.value = 'All';
    authorFilter.value = 'All';
    dateFilter.value = 'All';
    
    filterPosts();
    renderCategories();
});

categoryFilter.addEventListener('change', (e) => {
    selectedCategory = e.target.value;
    filterPosts();
    renderCategories();
});

authorFilter.addEventListener('change', (e) => {
    selectedAuthor = e.target.value;
    filterPosts();
});

dateFilter.addEventListener('change', (e) => {
    selectedDate = e.target.value;
    filterPosts();
});

// Global function for category selection
window.selectCategory = function(category) {
    selectedCategory = category;
    categoryFilter.value = category;
    filterPosts();
    renderCategories();
};

// Initial render
filterPosts();
renderCategories();

});
