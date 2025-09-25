import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 p-1">
        <div className="container mx-auto">
      <div >
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-lg text-black">
            CS — <span className="font-semibold">Ticket System</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">FAQ</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Changelogs</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Blog</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Download</a>
            <a href="#" className="text-gray-700 hover:text-purple-600">Contact</a>
            <button className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              + New Ticket
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white  py-3 space-y-3 border-t border-gray-200">
          <a href="#" className="block text-gray-700 hover:text-purple-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-purple-600">FAQ</a>
          <a href="#" className="block text-gray-700 hover:text-purple-600">Changelogs</a>
          <a href="#" className="block text-gray-700 hover:text-purple-600">Blog</a>
          <a href="#" className="block text-gray-700 hover:text-purple-600">Download</a>
          <a href="#" className="block text-gray-700 hover:text-purple-600">Contact</a>
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            + New Ticket
          </button>
        </div>
      )}
    </div>
    </nav>
  );
}
