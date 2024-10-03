import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <div>
                    <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
                </div>
                <div className="space-x-4">
                    <Link to="/" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                    <Link to="/" className="text-gray-400 hover:text-white">Terms of Service</Link>
                    <Link to="/" className="text-gray-400 hover:text-white">Contact Us</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
