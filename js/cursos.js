        // Script específico para cursos
        document.addEventListener('DOMContentLoaded', () => {
            // Precargar imágenes
            const images = document.querySelectorAll('.course-image');
            images.forEach(img => {
                const tempImage = new Image();
                tempImage.src = img.src;
                tempImage.onload = () => {
                    img.classList.add('loaded');
                };
            });
            
            // Configurar animaciones escalonadas
            const courseCards = document.querySelectorAll('.course-card');
            courseCards.forEach((card, index) => {
                card.style.setProperty('--card-index', index + 1);
            });
            
            // GSAP animaciones
            if (typeof gsap !== 'undefined') {
                // Animación de entrada más suave
                gsap.fromTo('.course-card', 
                    { 
                        opacity: 0, 
                        y: 50,
                        scale: 0.9 
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: 'back.out(1.4)',
                        delay: 0.2
                    }
                );
                
                // Animación del título
                gsap.fromTo('.courses-title', 
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
                );
                
                gsap.fromTo('.courses-subtitle', 
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
                );
                
                // Animación de hover con efectos más elaborados
                courseCards.forEach(card => {
                    card.addEventListener('mouseenter', () => {
                        gsap.to(card, {
                            scale: 1.02,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                        
                        // Efecto de brillo
                        const glow = card.querySelector('.course-glow');
                        if (glow) {
                            gsap.to(glow, {
                                scale: 1.1,
                                duration: 0.4,
                                ease: 'power2.out'
                            });
                        }
                    });
                    
                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, {
                            scale: 1,
                            duration: 0.4,
                            ease: 'power2.out'
                        });
                        
                        const glow = card.querySelector('.course-glow');
                        if (glow) {
                            gsap.to(glow, {
                                scale: 1,
                                duration: 0.4,
                                ease: 'power2.out'
                            });
                        }
                    });
                });
            }
            
            // Botón de volver arriba
            const backToTop = document.getElementById('backToTop');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            });
            
            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            
            // Inicializar partículas (opcional, si quieres mantenerlas)
            if (typeof particlesJS !== 'undefined') {
                particlesJS("particles-js", {
                    particles: {
                        number: { value: 80, density: { enable: true, value_area: 800 } },
                        color: { value: "#6366f1" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5, random: true },
                        size: { value: 3, random: true },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: "#6366f1",
                            opacity: 0.2,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: { enable: true, mode: "grab" },
                            onclick: { enable: true, mode: "push" },
                            resize: true
                        }
                    },
                    retina_detect: true
                });
            }
        });