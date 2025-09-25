import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">
        {/* About */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-bold mb-3">CS — Ticket System</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Company */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact Sales</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Products & Services</a></li>
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>

        {/* Information */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Join Us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-lg font-semibold mb-3">Social Links</h3>
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <a href="#" className="hover:text-white">🌐 @CS — Ticket System</a>
            <a href="#" className="hover:text-white">🐦 @CS — Ticket System</a>
            <a href="#" className="hover:text-white">📘 @CS — Ticket System</a>
            <a href="mailto:support@csst.com" className="hover:text-white">✉️ support@csst.com</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-xs text-gray-400">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer