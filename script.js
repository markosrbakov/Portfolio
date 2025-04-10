  function toggleTheme() {
                const body = document.body;
                if (body.classList.contains('dark-mode')) {
                    body.classList.remove('dark-mode');
                    body.classList.add('light-mode');
                } else {
                    body.classList.remove('light-mode');
                    body.classList.add('dark-mode');
                }
            }
         
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('mouseover', () => {
                    card.querySelector('.eye-icon').style.transition = 'opacity 0.3s ease-in-out';
                });
                card.addEventListener('mouseout', () => {
                    card.querySelector('.eye-icon').style.transition = 'opacity 0.3s ease-in-out';
                });
            });
           
            document.querySelectorAll('.skill').forEach(skill => {
                skill.addEventListener('mouseover', () => {
                    skill.querySelector('i').style.boxShadow = '0 0 20px #00ff00';
                });
                skill.addEventListener('mouseout', () => {
                    skill.querySelector('i').style.boxShadow = 'none';
                });
            });
          
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.querySelector('.eye-icon').style.opacity = '1';
                });
                card.addEventListener('mouseleave', () => {
                    card.querySelector('.eye-icon').style.opacity = '0';
                });
            });
            
            document.addEventListener('DOMContentLoaded', function() {
                AOS.init();
            });

            window.onscroll = function() {
                var button = document.getElementById("scrollToTopBtn");
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    button.style.display = "block";
                     } else {
                        button.style.display = "none";
                    }
            };

            function scrollToTop() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }