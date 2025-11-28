import React from 'react';
import socials from '../data/socials.json';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Rahul Maurya</h3>
                    <p className="footer-tagline">
                        Building intelligent solutions with Machine Learning & Data Science
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="footer-socials">
                        {socials.map(social => (
                            <a
                                key={social.id}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="footer-social-link"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>
                        <a href="mailto:your.email@example.com" className="footer-email">
                            your.email@example.com
                        </a>
                    </p>
                    <p className="footer-note">
                        Open to opportunities and collaborations
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {currentYear} Rahul Maurya. All rights reserved.</p>
                <p className="footer-built">
                    Built with React + Vite
                </p>
            </div>
        </footer>
    );
}
