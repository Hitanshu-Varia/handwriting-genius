
import { Link } from "react-router-dom";
import { Pen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Pen className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">HandwritingGenius</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-sm font-medium hover:text-blue-600">
            Home
          </Link>
          <Link to="/upload" className="text-sm font-medium hover:text-blue-600">
            Upload
          </Link>
          <Link to="/generate" className="text-sm font-medium hover:text-blue-600">
            Generate
          </Link>
          <Link to="/guide" className="text-sm font-medium hover:text-blue-600">
            Guide
          </Link>
          <Link to="/gallery" className="text-sm font-medium hover:text-blue-600">
            Gallery
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
