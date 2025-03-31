
import { Link } from "react-router-dom";
import { PenLine, Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userAuth = localStorage.getItem("user_authenticated");
    const adminAuth = localStorage.getItem("admin_authenticated");
    setIsLoggedIn(userAuth === "true" || adminAuth === "true");
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_authenticated");
    localStorage.removeItem("admin_authenticated");
    setIsLoggedIn(false);
    window.location.href = "/admin";
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <PenLine className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">HandwritingGenius</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="block md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/upload" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Upload
          </Link>
          <Link to="/colab" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Train
          </Link>
          <Link to="/generate" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Generate
          </Link>
          <Link to="/gallery" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Gallery
          </Link>
          <Link to="/guide" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Guide
          </Link>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button asChild>
              <Link to="/admin">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col py-4">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/upload" 
              className="px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Upload
            </Link>
            <Link 
              to="/colab" 
              className="px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Train
            </Link>
            <Link 
              to="/generate" 
              className="px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Generate
            </Link>
            <Link 
              to="/gallery" 
              className="px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/guide" 
              className="px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Guide
            </Link>
            <div className="px-4 py-2">
              {isLoggedIn ? (
                <Button 
                  onClick={handleLogout} 
                  className="w-full"
                  variant="outline"
                >
                  Logout
                </Button>
              ) : (
                <Button asChild className="w-full">
                  <Link 
                    to="/admin" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Link>
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
