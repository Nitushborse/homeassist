import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        //   <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between md:justify-between items-center">
        //     {/* Logo */}
        //     <h1 className="text-2xl font-bold text-blue-600">HomeAssist</h1>

        //     {/* Desktop Menu */}
        //     <div className="hidden md:flex space-x-6">
        //       <a href="#services" className="hover:text-blue-600">Services</a>
        //       <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
        //       <a href="#about" className="hover:text-blue-600">About</a>
        //       <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        //         Sign In
        //       </button>
        //     </div>

        //     {/* Mobile Menu Button */}
        //     <button
        //       className="md:hidden text-gray-700 focus:outline-none"
        //       onClick={() => setIsOpen(!isOpen)}
        //     >
        //       ☰
        //     </button>
        //   </div>

        //   {/* Mobile Menu */}
        //   {isOpen && (
        //     <div className="md:hidden bg-white border-t">
        //       <a href="#services" className="block px-6 py-2 hover:bg-blue-50">Services</a>
        //       <a href="#how-it-works" className="block px-6 py-2 hover:bg-blue-50">How It Works</a>
        //       <a href="#about" className="block px-6 py-2 hover:bg-blue-50">About</a>
        //       <button className="w-full text-left px-6 py-2 bg-blue-600 text-white hover:bg-blue-700">
        //         Sign In
        //       </button>
        //     </div>
        //   )}
        // </nav>
        <nav className="sticky top-0 flex items-center justify-between px-8 py-2 bg-white shadow-md">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">HomeAssist</div>

            {/* Centered Links */}
            <div className="flex-1 flex justify-center space-x-8">
                <a href="#services" className="hover:text-blue-600">Services</a>
                <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
                <a href="#about" className="hover:text-blue-600">About</a>
            </div>

            {/* Sign In Button */}
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Sign In
            </button>
        </nav>
    );
}
