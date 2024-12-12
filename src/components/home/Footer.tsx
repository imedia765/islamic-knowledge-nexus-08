import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">About IDRP</h3>
            <p className="text-gray-600 text-sm">
              The Islamic Digital Research Platform is dedicated to providing authentic
              Islamic knowledge through modern technology.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/quran" className="text-gray-600 hover:text-primary-600 text-sm">Quran</Link></li>
              <li><Link to="/hadith" className="text-gray-600 hover:text-primary-600 text-sm">Hadith</Link></li>
              <li><Link to="/fiqh" className="text-gray-600 hover:text-primary-600 text-sm">Fiqh</Link></li>
              <li><Link to="/research" className="text-gray-600 hover:text-primary-600 text-sm">Research</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">API Access</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Feedback</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Partnerships</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary-600 text-sm">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} Islamic Digital Research Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};