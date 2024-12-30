document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const darkModeToggle = document.createElement('img');
    darkModeToggle.src = 'moon.svg';
    darkModeToggle.alt = 'Toggle dark mode';
    darkModeToggle.classList.add('dark-mode-toggle');
    document.querySelector('.nav-links').appendChild(darkModeToggle);

    // Set initial theme
    const currentMode = localStorage.getItem('theme') || 'light';
    if (currentMode === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.src = 'sun.svg';
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        darkModeToggle.src = isDarkMode ? 'sun.svg' : 'moon.svg';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Check if content exceeds viewport
    const container = document.querySelector('.container');
    const checkContentHeight = () => {
        if (document.body.scrollHeight > window.innerHeight) {
            container.classList.add('content-exceeds-viewport');
        } else {
            container.classList.remove('content-exceeds-viewport');
        }
    };

    // Initial check and listen for window resize
    checkContentHeight();
    window.addEventListener('resize', checkContentHeight);

    // Add active state to current nav link
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Project toggles
    const projectToggles = document.querySelectorAll('.project-toggle');
    projectToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
           
            toggle.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('active');
        });
    });

    // Add animation delay to sections
    const footer = document.querySelector('.footer');
    footer.classList.add('slide-in');
    
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.15}s`;
    });

    // Add footer with same timing as last element
    const lastIndex = elements.length - 1;
});
