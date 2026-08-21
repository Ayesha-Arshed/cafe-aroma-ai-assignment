import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Coffee, Heart, ShoppingBag, Menu as MenuIcon, X, Sparkles, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Favorites', path: '/favorites', count: 2 },
    { name: 'Cart', path: '/cart', count: 3, isCart: true }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#2C1A14]/95 backdrop-blur-md shadow-lg shadow-[#1C100B]/20 py-3 border-b border-[#3D241C]' 
        : 'bg-[#2C1A14] py-4 border-b border-[#3D241C]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <NavLink 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C85A32] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C85A32] to-[#9E3B1B] flex items-center justify-center shadow-md shadow-[#1C100B]/40 group-hover:scale-105 transition-transform duration-300">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF6F0] group-hover:text-[#E58B68] transition-colors">
                Cafe Aroma
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-[#D9C4AA] flex items-center gap-1">
                Artisanal Brews <Sparkles className="w-2.5 h-2.5 text-[#E69F52]" />
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#1C100B]/60 p-1.5 rounded-full border border-[#3D241C]">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#C85A32] text-white shadow-md shadow-[#C85A32]/30 font-semibold'
                      : 'text-[#E8D9C5] hover:text-white hover:bg-[#3D241C]/80'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.path === '/favorites' && (
                      <Heart className={`w-4 h-4 ${isActive ? 'fill-white text-white' : 'text-[#D9C4AA]'}`} />
                    )}
                    {link.path === '/cart' && (
                      <ShoppingBag className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#D9C4AA]'}`} />
                    )}
                    <span>{link.name}</span>

                    {/* Badge counters */}
                    {link.count !== undefined && (
                      <span className={`inline-flex items-center justify-center text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive 
                          ? 'bg-[#1C100B] text-[#FAF6F0]' 
                          : link.isCart 
                            ? 'bg-[#E69F52] text-[#1C100B]' 
                            : 'bg-[#3D241C] text-[#E8D9C5]'
                      }`}>
                        {link.count}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Action & Login Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all border ${
                  isActive
                    ? 'bg-[#3D241C] text-[#E69F52] border-[#E69F52]'
                    : 'text-[#E8D9C5] border-[#4F3026] hover:bg-[#3D241C] hover:text-white'
                }`
              }
            >
              <User className="w-4 h-4 text-[#C85A32]" />
              <span>Sign In</span>
            </NavLink>

            <NavLink
              to="/menu"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C85A32] to-[#D96B43] hover:from-[#B84A27] hover:to-[#C85A32] text-white font-medium text-xs shadow-md shadow-[#C85A32]/20 transition-all active:scale-95 flex items-center gap-1.5"
            >
              <Coffee className="w-4 h-4" />
              <span>Order Now</span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <NavLink
              to="/login"
              className="p-2 rounded-lg bg-[#3D241C] text-[#FAF6F0] hover:bg-[#C85A32] transition-colors"
              aria-label="Sign In"
            >
              <User className="w-5 h-5 text-[#E58B68]" />
            </NavLink>

            <NavLink
              to="/cart"
              className="relative p-2 rounded-lg bg-[#3D241C] text-[#FAF6F0] hover:bg-[#C85A32] transition-colors"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C85A32] text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-[#2C1A14]">
                3
              </span>
            </NavLink>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#3D241C] text-[#FAF6F0] hover:bg-[#4F3026] focus:outline-none focus:ring-2 focus:ring-[#C85A32] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-[#E58B68]" /> : <MenuIcon className="w-6 h-6 text-[#FAF6F0]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 pb-3 border-t border-[#3D241C] bg-[#1C100B]/95 rounded-2xl p-4 shadow-xl border border-[#3D241C]/80 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#C85A32] text-white font-semibold shadow-md'
                        : 'text-[#E8D9C5] hover:bg-[#3D241C] hover:text-white'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    {link.path === '/' && <Coffee className="w-5 h-5" />}
                    {link.path === '/menu' && <Sparkles className="w-5 h-5" />}
                    {link.path === '/favorites' && <Heart className="w-5 h-5" />}
                    {link.path === '/cart' && <ShoppingBag className="w-5 h-5" />}
                    <span>{link.name}</span>
                  </div>

                  {link.count !== undefined && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#2C1A14] text-[#E8D9C5]">
                      {link.count} items
                    </span>
                  )}
                </NavLink>
              ))}

              <div className="pt-3 mt-2 border-t border-[#3D241C] flex flex-col gap-2">
                <NavLink
                  to="/login"
                  className="w-full py-2.5 rounded-xl bg-[#3D241C] text-[#E8D9C5] hover:text-white text-xs font-semibold text-center flex items-center justify-center gap-2"
                >
                  <User className="w-4 h-4 text-[#C85A32]" />
                  <span>Account Sign In / Register</span>
                </NavLink>

                <NavLink
                  to="/menu"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#D96B43] text-white font-medium text-center shadow-md flex items-center justify-center gap-2 text-xs"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Order Hot Brew Now</span>
                </NavLink>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
