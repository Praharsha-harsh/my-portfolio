class App {
    constructor() {
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
        this.initAnimations();
    }

    render() {
        const root = document.getElementById('root');
        root.innerHTML = `
            ${this.renderHeader()}
            ${this.renderMain()}
            ${this.renderFooter()}
        `;
    }

    renderHeader() {
        return `
            <header>
                <div class="container">
                    <nav>
                        <div class="logo">Portfolio</div>
                        <ul class="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }

    renderMain() {
        return `
            <main>
                ${this.renderAbout()}
                ${this.renderProjects()}
                ${this.renderContact()}
            </main>
        `;
    }

    renderAbout() {
        return `
            <section id="about">
                <div class="container">
                    <h1 class="section-title">About Me</h1>
                    <div class="about-content">
                        <div class="profile-img">JD</div>
                        <div class="about-text">
                            <h2>John Doe</h2>
                            <p>I'm a passionate web developer with 3+ years of experience creating modern, responsive websites and applications. I love turning ideas into reality through clean, efficient code.</p>
                            <p>When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or enjoying a good cup of coffee while reading tech blogs.</p>
                            <div class="skills">
                                <span class="skill-tag">JavaScript</span>
                                <span class="skill-tag">React</span>
                                <span class="skill-tag">Node.js</span>
                                <span class="skill-tag">HTML/CSS</span>
                                <span class="skill-tag">Python</span>
                                <span class="skill-tag">MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderProjects() {
        return `
            <section id="projects" class="projects">
                <div class="container">
                    <h2 class="section-title">My Projects</h2>
                    <div class="projects-grid">
                        <div class="project-card">
                            <h3>E-Commerce Platform</h3>
                            <p>A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.</p>
                            <div class="project-tech">
                                <span class="tech-tag">React</span>
                                <span class="tech-tag">Node.js</span>
                                <span class="tech-tag">MongoDB</span>
                                <span class="tech-tag">Stripe</span>
                            </div>
                            <div class="project-links">
                                <a href="#" onclick="app.showDemo('E-Commerce Platform')">Live Demo</a>
                                <a href="#" onclick="app.showCode('E-Commerce Platform')">View Code</a>
                            </div>
                        </div>

                        <div class="project-card">
                            <h3>Task Management App</h3>
                            <p>A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
                            <div class="project-tech">
                                <span class="tech-tag">Vue.js</span>
                                <span class="tech-tag">Express</span>
                                <span class="tech-tag">Socket.io</span>
                                <span class="tech-tag">PostgreSQL</span>
                            </div>
                            <div class="project-links">
                                <a href="#" onclick="app.showDemo('Task Management App')">Live Demo</a>
                                <a href="#" onclick="app.showCode('Task Management App')">View Code</a>
                            </div>
                        </div>

                        <div class="project-card">
                            <h3>Weather Dashboard</h3>
                            <p>A responsive weather application that provides current conditions and forecasts with beautiful data visualizations.</p>
                            <div class="project-tech">
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">Chart.js</span>
                                <span class="tech-tag">REST API</span>
                                <span class="tech-tag">CSS Grid</span>
                            </div>
                            <div class="project-links">
                                <a href="#" onclick="app.showDemo('Weather Dashboard')">Live Demo</a>
                                <a href="#" onclick="app.showCode('Weather Dashboard')">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderContact() {
        return `
            <section id="contact">
                <div class="container">
                    <h2 class="section-title">Get In Touch</h2>
                    <div class="contact-content">
                        <p>I'm always interested in new opportunities and interesting projects. Let's connect!</p>
                        <div class="contact-info">
                            <div class="contact-item">
                                <h3>Email</h3>
                                <a href="mailto:john.doe@example.com">john.doe@example.com</a>
                            </div>
                            <div class="contact-item">
                                <h3>LinkedIn</h3>
                                <a href="https://linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a>
                            </div>
                            <div class="contact-item">
                                <h3>GitHub</h3>
                                <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderFooter() {
        return `
            <footer>
                <div class="container">
                    <p>&copy; 2024 John Doe. All rights reserved.</p>
                </div>
            </footer>
        `;
    }

    bindEvents() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll effect to header
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = '#fff';
                header.style.backdropFilter = 'none';
            }
        });
    }

    initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe project cards for animation
        document.querySelectorAll('.project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    showDemo(projectName) {
        alert(`Opening live demo for: ${projectName}`);
        // Replace with actual demo URL
    }

    showCode(projectName) {
        alert(`Opening GitHub repository for: ${projectName}`);
        // Replace with actual GitHub URL
    }
}

// Initialize the app
const app = new App();