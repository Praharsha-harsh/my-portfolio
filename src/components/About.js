class About {
    render() {
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
}

export default About;