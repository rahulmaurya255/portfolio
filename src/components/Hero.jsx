import React from 'react';

export default function Hero() {
    return (
        <section className="hero" id="about">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Rahul Maurya</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        Machine Learning Engineer & Data Scientist
                    </h2>
                    <p className="hero-description">
                        I build intelligent solutions using machine learning and data science.
                        Passionate about transforming data into actionable insights and creating
                        impactful AI-powered applications.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                        </a>
                        <a href="/resume.pdf" className="btn btn-secondary" download>
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="hero-animation">
                    <div className="floating-card card-1">
                        <div className="card-icon">🤖</div>
                        <p>Machine Learning</p>
                    </div>
                    <div className="floating-card card-2">
                        <div className="card-icon">📊</div>
                        <p>Data Science</p>
                    </div>
                    <div className="floating-card card-3">
                        <div className="card-icon">🧠</div>
                        <p>Deep Learning</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
