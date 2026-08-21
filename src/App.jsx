import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Favorites from './pages/Favorites.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { Coffee, Heart, Globe, Share2, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#2C1A14]">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-[#1C100B] text-[#E8D9C5] border-t border-[#3D241C] pt-12 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              {/* Brand Info */}
              <div className="space-y-4 md:col-span-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C85A32] flex items-center justify-center text-white">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <span className="font-serif text-2xl font-bold text-white">Cafe Aroma</span>
                </div>
                <p className="text-xs text-[#D9C4AA] leading-relaxed">
                  Crafting memorable moments over artisanal coffees, single-origin brews, and fresh French baked goods since 2018.
                </p>
                <div className="flex items-center gap-3 text-[#D9C4AA]">
                  <a href="#" className="p-2 rounded-lg bg-[#2C1A14] hover:bg-[#C85A32] hover:text-white transition-colors" aria-label="Social Link">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-[#2C1A14] hover:bg-[#C85A32] hover:text-white transition-colors" aria-label="Social Link">
                    <Share2 className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-lg bg-[#2C1A14] hover:bg-[#C85A32] hover:text-white transition-colors" aria-label="Social Link">
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-3">
                <h3 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h3>
                <ul className="space-y-2 text-xs text-[#D9C4AA]">
                  <li><Link to="/" className="hover:text-[#E69F52] transition-colors">Home Page</Link></li>
                  <li><Link to="/menu" className="hover:text-[#E69F52] transition-colors">Coffee & Bakery Menu</Link></li>
                  <li><Link to="/favorites" className="hover:text-[#E69F52] transition-colors">Saved Favorites</Link></li>
                  <li><Link to="/cart" className="hover:text-[#E69F52] transition-colors">Shopping Bag & Checkout</Link></li>
                  <li><Link to="/login" className="hover:text-[#E69F52] transition-colors">Sign In / Register</Link></li>
                </ul>
              </div>

              {/* Cafe Hours */}
              <div className="space-y-3">
                <h3 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Opening Hours</h3>
                <ul className="space-y-1.5 text-xs text-[#D9C4AA]">
                  <li className="flex justify-between">
                    <span>Monday – Friday:</span>
                    <span className="text-white font-medium">6:30 AM – 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-white font-medium">7:30 AM – 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-white font-medium">8:00 AM – 7:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Contact & Location */}
              <div className="space-y-3">
                <h3 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Contact Us</h3>
                <ul className="space-y-2 text-xs text-[#D9C4AA]">
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C85A32]" />
                    <span>142 Espresso Blvd, NY 10001</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C85A32]" />
                    <span>(555) 234-5678</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#C85A32]" />
                    <span>hello@cafearoma.com</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="border-t border-[#3D241C] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#784C44] gap-2">
              <p>© {new Date().getFullYear()} Cafe Aroma Inc. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Made with <Heart className="w-3.5 h-3.5 text-[#C85A32] fill-[#C85A32]" /> for coffee lovers everywhere.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}
