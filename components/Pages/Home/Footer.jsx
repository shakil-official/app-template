import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                {/* Footer Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Company</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Support</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                            <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Connect</h3>
                        <ul>
                            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-400">Newsletter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-400">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="text-center mt-8 border-t border-gray-700 pt-4">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
