class Projects {
    render() {
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
                                <a href="#" onclick="projects.showDemo('E-Commerce Platform')">Live Demo</a>
                                <a href="#" onclick="projects.showCode('E-Commerce Platform')">View Code</a>
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
                                <a href="#" onclick="projects.showDemo('Task Management App')">Live Demo</a>
                                <a href="#" onclick="projects.showCode('Task Management App')">View Code</a>
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
                                <a href="#" onclick="projects.showDemo('Weather Dashboard')">Live Demo</a>
                                <a href="#" onclick="projects.showCode('Weather Dashboard')">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    showDemo(projectName) {
        alert(`Opening live demo for: ${projectName}`);
        // Replace with actual demo URL
    }

    showCode(projectName) {
        alert(`Opening GitHub repository for: ${projectName}`);
        // Replace with actual GitHub URL
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
}

export default Projects;