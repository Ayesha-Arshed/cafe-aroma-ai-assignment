import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Coffee, ShoppingBag, Trash2, ArrowRight, Star } from 'lucide-react';

export default function Favorites() {
  const [favorites, setFavorites] = useState([
    {
      id: '1',
      name: 'Caramel Pecan Latte',
      category: 'Espresso',
      price: 5.80,
      rating: 4.9,
      description: 'Rich double espresso with caramel syrup, toasted pecan extract, and silky milk froth.',
      addedDate: 'Added yesterday'
    },
    {
      id: '4',
      name: 'Artisanal Butter Croissant',
      category: 'Pastries',
      price: 3.90,
      rating: 4.8,
      description: 'Flaky, multi-layered golden French croissant baked fresh every morning at 6 AM.',
      addedDate: 'Added 3 days ago'
    }
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Title & Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E8D9C5] pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#C85A32] fill-[#C85A32]" />
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1A14]">Your Saved Favorites</h1>
          </div>
          <p className="text-sm text-[#664134] mt-1">Keep track of your go-to coffee brews and favorite baked goods for fast re-ordering.</p>
        </div>

        {favorites.length > 0 && (
          <Link
            to="/cart"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#D96B43] hover:from-[#B84A27] text-white text-sm font-semibold shadow-md flex items-center justify-center gap-2 self-start md:self-auto"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add All to Cart (${favorites.reduce((sum, item) => sum + item.price, 0).toFixed(2)})</span>
          </Link>
        )}
      </div>

      {/* Favorites List Grid */}
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDF9] rounded-2xl border border-[#E8D9C5] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5 items-center sm:items-start justify-between group"
            >
              {/* Clickable Image Box */}
              <Link
                to={`/product/${item.id}`}
                className="w-full sm:w-32 h-32 rounded-xl bg-gradient-to-tr from-[#3D241C] to-[#5C3A35] flex-shrink-0 flex items-center justify-center text-[#FAF6F0] relative overflow-hidden group-hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <Coffee className="w-10 h-10 text-[#E69F52]" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] bg-[#1C100B]/80 text-[#D9C4AA]">
                  {item.category}
                </span>
              </Link>

              <div className="flex-1 space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-between">
                  {/* Clickable Title */}
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-serif text-xl font-bold text-[#2C1A14] group-hover:text-[#C85A32] transition-colors">{item.name}</h3>
                  </Link>
                  <div className="flex items-center text-xs font-bold text-[#D48B38]">
                    <Star className="w-3.5 h-3.5 fill-[#E69F52] text-[#E69F52] mr-1" />
                    {item.rating}
                  </div>
                </div>

                <p className="text-xs text-[#664134] leading-relaxed">{item.description}</p>
                <span className="inline-block text-[11px] text-[#946358] italic">{item.addedDate}</span>

                <div className="flex items-center justify-between sm:justify-start gap-4 pt-3">
                  <span className="font-serif text-xl font-bold text-[#2C1A14]">${item.price.toFixed(2)}</span>
                  
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/product/${item.id}`}
                      className="px-4 py-2 rounded-xl bg-[#2C1A14] hover:bg-[#C85A32] text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <Coffee className="w-3.5 h-3.5" />
                      <span>View Item</span>
                    </Link>

                    <button
                      onClick={() => removeFavorite(item.id)}
                      className="p-2 rounded-xl bg-[#F4ECE1] hover:bg-rose-100 text-[#784C44] hover:text-rose-700 transition-colors"
                      title="Remove from favorites"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-[#E8D9C5] space-y-4 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#F4ECE1] text-[#C85A32] flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#2C1A14]">No Saved Favorites Yet</h2>
          <p className="text-xs text-[#664134]">Tap the heart icon on any coffee or pastry item in the menu to quickly access it here.</p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C85A32] text-white text-sm font-semibold hover:bg-[#B84A27] transition-colors"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

    </div>
  );
}
