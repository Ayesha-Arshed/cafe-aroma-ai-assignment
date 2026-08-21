import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../data/menuData.js';
import { Coffee, Heart, ShoppingBag, Search, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [favoritesList, setFavoritesList] = useState(['1', '4']);
  const [cartAdded, setCartAdded] = useState({});

  const categories = ['All', 'Espresso', 'Cold Brews', 'Teas & Chai', 'Pastries'];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (favoritesList.includes(id)) {
      setFavoritesList(favoritesList.filter(favId => favId !== id));
    } else {
      setFavoritesList([...favoritesList, id]);
    }
  };

  const handleAddToCart = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setCartAdded(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCartAdded(prev => ({ ...prev, [id]: false }));
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C85A32]">Crafted With Care</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2C1A14]">Our Coffee & Bakery Menu</h1>
        <p className="text-sm text-[#664134]">Explore our curated selection of espresso beverages, slow cold brews, organic teas, and freshly baked French pastries.</p>
      </div>

      {/* Controls: Search & Category Filter */}
      <div className="space-y-6">
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-5 h-5 text-[#946358] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search drinks, ingredients, or pastries..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-[#FFFDF9] border border-[#E8D9C5] text-sm text-[#2C1A14] placeholder-[#946358] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#C85A32] text-white shadow-md shadow-[#C85A32]/20'
                  : 'bg-[#F4ECE1] text-[#5C3A35] hover:bg-[#E8D9C5] hover:text-[#2C1A14]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => {
          const isFav = favoritesList.includes(item.id);
          const isAdded = cartAdded[item.id];

          return (
            <div
              key={item.id}
              className="bg-[#FFFDF9] rounded-2xl border border-[#E8D9C5] overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="p-5 space-y-3">
                
                {/* Item Thumbnail (Navigates to detail) */}
                <Link to={`/product/${item.id}`} className="block relative w-full h-44 rounded-xl bg-gradient-to-tr from-[#3D241C] to-[#5C3A35] flex items-center justify-center p-4 cursor-pointer overflow-hidden">
                  <Coffee className="w-12 h-12 text-[#E69F52] opacity-80 group-hover:scale-110 transition-transform duration-300" />
                  
                  {item.isPopular && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#C85A32] text-white shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Popular
                    </span>
                  )}

                  {/* Favorite Heart Button */}
                  <button
                    onClick={(e) => toggleFavorite(e, item.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-[#1C100B]/60 hover:bg-[#1C100B] text-white backdrop-blur-sm transition-colors focus:outline-none"
                    aria-label="Toggle Favorite"
                  >
                    <Heart className={`w-4 h-4 transition-colors ${isFav ? 'fill-[#C85A32] text-[#C85A32]' : 'text-white'}`} />
                  </button>
                </Link>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[11px] font-semibold text-[#784C44] uppercase tracking-wider">{item.category}</span>
                    <span className="text-[11px] text-[#946358]">{item.calories}</span>
                  </div>

                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-serif text-lg font-bold text-[#2C1A14] mt-0.5 group-hover:text-[#C85A32] transition-colors">{item.name}</h3>
                  </Link>

                  <p className="text-xs text-[#664134] mt-1 line-clamp-2 leading-relaxed">{item.shortDescription}</p>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="p-5 pt-0 flex items-center justify-between border-t border-[#F4ECE1] mt-2">
                <span className="font-serif text-xl font-bold text-[#2C1A14]">${item.price.toFixed(2)}</span>
                
                <div className="flex items-center gap-2">
                  <Link
                    to={`/product/${item.id}`}
                    className="px-3 py-2 rounded-xl text-xs font-semibold text-[#784C44] hover:text-[#C85A32] hover:bg-[#F4ECE1] transition-colors"
                  >
                    Details
                  </Link>

                  <button
                    onClick={(e) => handleAddToCart(e, item.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isAdded
                        ? 'bg-emerald-700 text-white'
                        : 'bg-[#2C1A14] hover:bg-[#C85A32] text-white'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Added
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" /> Add
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-[#E8D9C5] space-y-4">
          <Coffee className="w-12 h-12 text-[#D9C4AA] mx-auto" />
          <h3 className="font-serif text-xl font-bold text-[#2C1A14]">No items found</h3>
          <p className="text-xs text-[#664134]">Try searching for something else or switch categories.</p>
          <button
            onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
            className="px-4 py-2 rounded-xl bg-[#C85A32] text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
