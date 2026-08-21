import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Flame, Award, Clock, ArrowRight, Heart, Star, Sparkles, MapPin } from 'lucide-react';

export default function Home() {
  const featuredBrews = [
    {
      id: '1',
      name: 'Caramel Pecan Latte',
      tagline: 'Rich espresso blended with toasted pecan syrup & velvety milk foam.',
      price: '$5.80',
      rating: 4.9,
      category: 'Signature',
      badge: 'Bestseller'
    },
    {
      id: '2',
      name: 'Smokey Bourbon Cold Brew',
      tagline: 'Steeped for 20 hours with bourbon vanilla bean and dark caramel.',
      price: '$5.20',
      rating: 4.8,
      category: 'Cold Brew',
      badge: 'Chef Choice'
    },
    {
      id: '3',
      name: 'Honey Oat Flat White',
      tagline: 'Double shot ristretto with creamy oat milk & organic wildflower honey.',
      price: '$5.50',
      rating: 4.9,
      category: 'Espresso',
      badge: 'Popular'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#2C1A14] via-[#3D241C] to-[#2C1A14] text-[#FAF6F0] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#3D241C]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E69F52_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/20 border border-[#C85A32]/40 text-[#E58B68] text-xs font-semibold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-[#E69F52]" /> Freshly Roasted Small Batch Beans
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Savor the Warmth of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E69F52] via-[#D96B43] to-[#E58B68]">Every Sip</span>
            </h1>
            
            <p className="text-[#E8D9C5] text-lg sm:text-xl font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Step into Cafe Aroma, where passion meets perfection in every cup. Handcrafted espresso, single-origin brews, and fresh French pastries baked daily.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/menu"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#D96B43] hover:from-[#B84A27] hover:to-[#C85A32] text-white font-semibold text-base shadow-lg shadow-[#C85A32]/30 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/favorites"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#1C100B]/60 hover:bg-[#3D241C] text-[#E8D9C5] hover:text-white border border-[#4F3026] font-medium text-base transition-colors flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5 text-[#C85A32]" />
                <span>Popular Favorites</span>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#3D241C]">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#E69F52]">100%</span>
                <span className="text-xs text-[#D9C4AA]">Arabica Beans</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#E69F52]">15+</span>
                <span className="text-xs text-[#D9C4AA]">Signature Drinks</span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#E69F52]">4.9 ★</span>
                <span className="text-xs text-[#D9C4AA]">Customer Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Decorative Card (Today's Special -> /product/9) */}
          <div className="relative">
            <div className="relative mx-auto max-w-md rounded-3xl bg-gradient-to-b from-[#3D241C] to-[#1C100B] p-6 sm:p-8 shadow-2xl border border-[#4F3026]">
              <div className="relative aspect-4/3 rounded-2xl bg-gradient-to-tr from-[#2C1A14] to-[#4A2E2B] flex flex-col items-center justify-center p-6 text-center border border-[#5C3A35] overflow-hidden group">
                <Link to="/product/9" className="w-20 h-20 rounded-full bg-[#C85A32]/20 flex items-center justify-center mb-4 text-[#E69F52] shadow-inner group-hover:scale-105 transition-transform">
                  <Coffee className="w-10 h-10" />
                </Link>
                <span className="text-xs font-semibold text-[#E69F52] tracking-widest uppercase mb-1">Today's Special</span>
                
                <Link to="/product/9" className="hover:text-[#E69F52] transition-colors">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">Hazelnut Praline Macchiato</h3>
                </Link>

                <p className="text-xs text-[#D9C4AA] mb-4 max-w-xs">Velvety steamed milk poured over dark espresso drizzled with caramelized hazelnut praline syrup.</p>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-xl font-bold text-[#E69F52]">$5.90</span>
                  <Link
                    to="/product/9"
                    className="px-4 py-1.5 rounded-full bg-[#C85A32] text-white text-xs font-semibold hover:bg-[#B84A27] transition-colors"
                  >
                    Order Special
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Badges Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#E8D9C5] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#F4ECE1] text-[#C85A32]">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2C1A14]">Artisanal Quality</h3>
              <p className="text-sm text-[#664134] mt-1">Ethically sourced single-origin coffee beans roasted locally every week.</p>
            </div>
          </div>

          <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#E8D9C5] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#F4ECE1] text-[#C85A32]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2C1A14]">Express Pickup</h3>
              <p className="text-sm text-[#664134] mt-1">Order ahead on our site and have your warm cup ready when you arrive.</p>
            </div>
          </div>

          <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#E8D9C5] shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#F4ECE1] text-[#C85A32]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#2C1A14]">Cozy Ambiance</h3>
              <p className="text-sm text-[#664134] mt-1">Warm fireside seating, complimentary high-speed Wi-Fi & soft acoustic tunes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brews Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-[#E8D9C5] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32]">Handcrafted Selection</span>
            <h2 className="font-serif text-3xl font-bold text-[#2C1A14] mt-1">Featured Coffee & Brews</h2>
          </div>
          <Link
            to="/menu"
            className="text-sm font-semibold text-[#C85A32] hover:text-[#9E3B1B] flex items-center gap-1 group"
          >
            <span>View All Menu Items</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBrews.map((brew) => (
            <div
              key={brew.id}
              className="bg-[#FFFDF9] rounded-2xl border border-[#E8D9C5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F4ECE1] text-[#784C44]">
                    {brew.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#C85A32]/10 text-[#C85A32]">
                    {brew.badge}
                  </span>
                </div>

                {/* Clickable Image -> Product Detail */}
                <Link
                  to={`/product/${brew.id}`}
                  className="block w-full h-40 rounded-xl bg-gradient-to-tr from-[#3D241C] to-[#5C3A35] flex items-center justify-center text-[#FAF6F0] p-4 text-center group-hover:scale-[1.02] transition-transform overflow-hidden cursor-pointer"
                >
                  <Coffee className="w-12 h-12 text-[#E69F52] opacity-80" />
                </Link>

                <div>
                  <div className="flex items-center justify-between">
                    {/* Clickable Title -> Product Detail */}
                    <Link to={`/product/${brew.id}`}>
                      <h3 className="font-serif text-xl font-bold text-[#2C1A14] group-hover:text-[#C85A32] transition-colors">{brew.name}</h3>
                    </Link>
                    <div className="flex items-center text-xs text-[#D48B38] font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#E69F52] text-[#E69F52] mr-0.5" />
                      {brew.rating}
                    </div>
                  </div>
                  <p className="text-xs text-[#664134] mt-2 leading-relaxed">{brew.tagline}</p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#F4ECE1] mt-4">
                <span className="font-serif text-2xl font-bold text-[#2C1A14]">{brew.price}</span>
                <Link
                  to={`/product/${brew.id}`}
                  className="px-4 py-2 rounded-xl bg-[#2C1A14] hover:bg-[#C85A32] text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  <Coffee className="w-3.5 h-3.5" />
                  <span>View & Order</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cafe Location & Hours Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2C1A14] rounded-3xl p-8 sm:p-12 text-[#FAF6F0] grid grid-cols-1 md:grid-cols-2 gap-8 items-center border border-[#3D241C]">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E69F52]">Visit Our Sanctuary</span>
            <h2 className="font-serif text-3xl font-bold text-white">Find Your Cozy Corner at Cafe Aroma</h2>
            <p className="text-sm text-[#E8D9C5] leading-relaxed">
              Whether you need an early morning caffeine boost or a peaceful space to unwind with a book in the afternoon, our doors are open.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-[#D9C4AA]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C85A32]" />
                <span>142 Espresso Boulevard, Coffee District, NY 10001</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C85A32]" />
                <span>Mon–Fri: 6:30 AM – 8:00 PM | Sat–Sun: 7:30 AM – 9:00 PM</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1C100B] p-6 rounded-2xl border border-[#3D241C] text-center space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#FAF6F0]">Join Our Aroma Club</h3>
            <p className="text-xs text-[#D9C4AA]">Receive a free croissant with your first mobile order + exclusive seasonal drink previews.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2.5 rounded-xl bg-[#2C1A14] border border-[#4F3026] text-xs text-white placeholder-[#784C44] focus:outline-none focus:border-[#C85A32]"
              />
              <button className="px-5 py-2.5 rounded-xl bg-[#C85A32] hover:bg-[#B84A27] text-white text-xs font-bold whitespace-nowrap transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
