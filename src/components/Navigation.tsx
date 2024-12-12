import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary-600">IDRP</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/quran" className="nav-link">Quran</Link>
            <Link to="/hadith" className="nav-link">Hadith</Link>
            <Link to="/fiqh" className="nav-link">Fiqh</Link>
            <Link to="/research" className="nav-link">Research</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </nav>
  );
};