class Contact {
    render() {
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
}

export default Contact;