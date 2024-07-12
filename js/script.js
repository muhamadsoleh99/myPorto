document.addEventListener('DOMContentLoaded', function() {
    const pageScrollLinks = document.querySelectorAll('.page-scroll');
    
    pageScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get the target's position
                const targetPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = targetPosition + window.scrollY - 50;

                // Smooth scroll to the adjusted position
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Optionally, update URL hash
                history.pushState(null, null, targetId);
            }
        });
    });
});