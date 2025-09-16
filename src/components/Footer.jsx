// export default function FooterCTA() {
//   return (
//     <footer className="bg-blue-600 text-white text-center py-10">
//       <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
//       <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
//         Join Now
//       </button>
//     </footer>
//   );
// }

// src/components/Footer.jsx
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
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/feedback" className="hover:underline">Feedback</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <p>Email: support@homeassist.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Pune, India</p>
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
