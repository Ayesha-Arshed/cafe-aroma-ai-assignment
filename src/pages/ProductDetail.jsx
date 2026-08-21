import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { menuItems } from '../data/menuData.js';
import { Coffee, ArrowLeft, Star, Heart, ShoppingBag, Check, Flame, Sparkles, Plus, Minus, ShieldCheck } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find item by ID or default to first item
  const product = menuItems.find((item) => item.id === String(id)) || menuItems[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedTemp, setSelectedTemp] = useState(product.temperatureOptions[0] || 'Hot');
  const [selectedMilk, setSelectedMilk] = useState(product.milkOptions[0] || 'Whole Milk');
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const relatedItems = menuItems.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Back Link */}
      <button
        onClick={() => navigate('/menu')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#784C44] hover:text-[#C85A32] transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Coffee Menu</span>
      </button>

      {/* Main Product Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Visual Card */}
        <div className="space-y-6">
          <div className="relative w-full aspect-4/3 sm:aspect-square rounded-3xl bg-gradient-to-tr from-[#2C1A14] via-[#3D241C] to-[#5C3A35] flex flex-col items-center justify-center p-8 shadow-xl border border-[#4F3026] overflow-hidden group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#C85A32]/20 flex items-center justify-center text-[#E69F52] shadow-inner group-hover:scale-105 transition-transform duration-300">
              <Coffee className="w-20 h-20 sm:w-24 sm:h-24" />
            </div>

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C85A32] text-white shadow-md flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> {product.badge || 'Artisanal'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1C100B]/80 text-[#D9C4AA] backdrop-blur-sm border border-[#3D241C]">
                {product.category}
              </span>
            </div>

            {/* Favorite Button */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 p-3 rounded-full bg-[#1C100B]/80 hover:bg-[#1C100B] text-white backdrop-blur-sm transition-colors border border-[#3D241C]"
              aria-label="Toggle Favorite"
            >
              <Heart className={`w-5 h-5 transition-colors ${isFavorite ? 'fill-[#C85A32] text-[#C85A32]' : 'text-white'}`} />
            </button>

            <span className="mt-6 text-xs text-[#D9C4AA] tracking-widest uppercase font-medium flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#E69F52]" /> Handcrafted Fresh To Order
            </span>
          </div>

          {/* Key Ingredients */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="bg-[#FFFDF9] rounded-2xl border border-[#E8D9C5] p-5 space-y-3">
              <h4 className="font-serif text-sm font-bold text-[#2C1A14]">Key Craft Ingredients</h4>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-[#F4ECE1] text-[#5C3A35] text-xs font-medium">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Product Details & Controls */}
        <div className="space-y-6">
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C85A32]">{product.category}</span>
              <div className="flex items-center text-xs font-bold text-[#D48B38]">
                <Star className="w-4 h-4 fill-[#E69F52] text-[#E69F52] mr-1" />
                <span>{product.rating} ({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1A14]">{product.name}</h1>
            
            <div className="flex items-baseline gap-3 pt-1">
              <span className="font-serif text-3xl font-bold text-[#C85A32]">${product.price.toFixed(2)}</span>
              <span className="text-xs text-[#946358]">{product.calories}</span>
            </div>
          </div>

          <p className="text-sm text-[#664134] leading-relaxed border-t border-b border-[#E8D9C5] py-4">
            {product.fullDescription || product.shortDescription}
          </p>

          {/* Customization Options */}
          <div className="space-y-5">
            
            {/* Temperature Option */}
            {product.temperatureOptions && product.temperatureOptions.length > 0 && (
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase text-[#2C1A14] tracking-wider">
                  Temperature Preference
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.temperatureOptions.map((temp) => (
                    <button
                      key={temp}
                      onClick={() => setSelectedTemp(temp)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                        selectedTemp === temp
                          ? 'bg-[#2C1A14] text-white shadow-sm'
                          : 'bg-[#F4ECE1] text-[#5C3A35] hover:bg-[#E8D9C5]'
                      }`}
                    >
                      {temp}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Milk Option */}
            {product.milkOptions && product.milkOptions.length > 0 && (
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase text-[#2C1A14] tracking-wider">
                  Milk / Dairy Choice
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.milkOptions.map((milk) => (
                    <button
                      key={milk}
                      onClick={() => setSelectedMilk(milk)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                        selectedMilk === milk
                          ? 'bg-[#C85A32] text-white shadow-sm'
                          : 'bg-[#F4ECE1] text-[#5C3A35] hover:bg-[#E8D9C5]'
                      }`}
                    >
                      {milk}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Add to Cart */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#E8D9C5] bg-[#FFFDF9] rounded-xl p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 rounded-lg hover:bg-[#F4ECE1] text-[#5C3A35] transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-serif text-lg font-bold text-[#2C1A14]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 rounded-lg hover:bg-[#F4ECE1] text-[#5C3A35] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-md ${
                    addedToCart
                      ? 'bg-emerald-700 text-white'
                      : 'bg-gradient-to-r from-[#C85A32] to-[#D96B43] hover:from-[#B84A27] text-white shadow-[#C85A32]/20'
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-5 h-5" /> Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" /> Add to Order (${(product.price * quantity).toFixed(2)})
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[#946358] pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" /> Freshness Guaranteed
                </span>
                <span>In Stock • Ready in 10 mins</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Related Brews Section */}
      <div className="border-t border-[#E8D9C5] pt-10 space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#2C1A14]">You Might Also Enjoy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedItems.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="bg-[#FFFDF9] rounded-2xl border border-[#E8D9C5] p-5 hover:shadow-md transition-all group flex items-center gap-4"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#3D241C] to-[#5C3A35] flex items-center justify-center text-[#E69F52] flex-shrink-0">
                <Coffee className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#784C44] uppercase">{item.category}</span>
                <h4 className="font-serif text-base font-bold text-[#2C1A14] group-hover:text-[#C85A32] transition-colors">{item.name}</h4>
                <span className="font-serif text-sm font-bold text-[#C85A32] block">${item.price.toFixed(2)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
