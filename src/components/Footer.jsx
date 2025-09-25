import { NavLink } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="container-centered rounded-sm mb-2 bg-primary text-white mt-10">
      <div className="container-centered py-8 text-center md:text-left">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">HomeAssist</h2>
            <p className="text-sm mt-2">
              Connecting you with trusted service providers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <NavLink to="/" className="hover:underline">Home</NavLink>
            <NavLink to="/about" className="hover:underline">About</NavLink>
            {/* <NavLink to="/" className="hover:underline">Services</NavLink>
            <NavLink to="/" className="hover:underline">Feedback</NavLink> */}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <p>Email: pkpatil.366@gmail.com</p>
            <p>Phone: +91 9021574896</p>
            <p>Address: Shirpur, Maharashtra, India</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-6 pt-4 text-sm text-center">
          © {new Date().getFullYear()} HomeAssist. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
