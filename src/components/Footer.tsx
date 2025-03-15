
import { Copyright, Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">NeuraTech</h3>
            <div className="flex items-center space-x-2 text-gray-300">
              <Copyright className="h-4 w-4" />
              <p className="text-sm">2025 NeuraTech. All rights reserved.</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <a href="mailto:contact@neuratech.com" className="text-sm hover:text-primary transition-colors">
                neuratech.pk@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <a href="tel:+1234567890" className="text-sm hover:text-primary transition-colors">
                  +92 (345) 343-2496
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 text-sm hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/offer" className="block text-gray-300 text-sm hover:text-primary transition-colors">
                Courses
              </Link>
              <Link to="/contact" className="block text-gray-300 text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/neuratech.pk?utm_source=qr&igsh=a2V3M3RyMGd0c2Ey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/neuratech-pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1BFJThmP3C/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
