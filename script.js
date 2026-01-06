document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const searchBtn = document.getElementById('searchBtn');
    
    themeToggle.addEventListener('click', function() {
        const body = document.body;
        const isDark = body.classList.contains('light-theme');
        
        if (isDark) {
            body.classList.remove('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            body.classList.add('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
    
    searchBtn.addEventListener('click', function() {
        const searchTerm = prompt('검색어를 입력하세요:');
        if (searchTerm) {
            console.log('검색어:', searchTerm);
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (href.includes('#')) {
                const parts = href.split('#');
                const currentPage = window.location.pathname.split('/').pop() || 'index.html';
                if (parts[0] === currentPage || parts[0] === '') {
                    e.preventDefault();
                    const targetId = parts[1];
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });
    
    const cvButton = document.querySelector('.cv-button');
    if (cvButton) {
        cvButton.addEventListener('click', function() {
            alert('CV 다운로드 기능을 구현해주세요.');
        });
    }
});

