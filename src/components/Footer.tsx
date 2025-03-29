
import { Link } from "react-router-dom";
import { Pen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <Pen className="h-5 w-5 text-blue-600" />
          <span className="text-lg font-semibold">HandwritingGenius</span>
        </div>
        <div className="mt-4 md:mt-0">
          <nav className="flex flex-wrap justify-center space-x-4 text-sm">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/upload" className="hover:text-blue-600">
              Upload
            </Link>
            <Link to="/generate" className="hover:text-blue-600">
              Generate
            </Link>
            <Link to="/guide" className="hover:text-blue-600">
              Guide
            </Link>
            <Link to="/gallery" className="hover:text-blue-600">
              Gallery
            </Link>
          </nav>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-gray-500">
          © {new Date().getFullYear()} HandwritingGenius. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
