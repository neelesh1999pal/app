import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0071CE] text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-3">Walmart</h3>
            <p className="text-xs opacity-90">
              Save money. Live better. Your trusted destination for quality products at unbeatable prices.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Customer Service</h4>
            <ul className="space-y-1 text-xs opacity-90">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Track Order</a></li>
              <li><a href="#" className="hover:underline">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:underline">Shipping Info</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Shop</h4>
            <ul className="space-y-1 text-xs opacity-90">
              <li><a href="#" className="hover:underline">Electronics</a></li>
              <li><a href="#" className="hover:underline">Groceries</a></li>
              <li><a href="#" className="hover:underline">Dry Food</a></li>
              <li><a href="#" className="hover:underline">Medicines</a></li>
              <li><a href="#" className="hover:underline">All Categories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="space-y-1 text-xs opacity-90">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs opacity-75">
            <p>© 2026 Walmart Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <span>🔒 Secure Payment</span>
              <span>✓ Money Back Guarantee</span>
              <span>🚚 Fast Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
