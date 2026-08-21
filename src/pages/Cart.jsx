import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight, Tag, Coffee, Check, ShieldCheck } from 'lucide-react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Caramel Pecan Latte',
      price: 5.80,
      quantity: 2,
      customization: 'Oat Milk, Extra Hot, Double Shot',
      category: 'Espresso'
    },
    {
      id: '2',
      name: 'Smokey Bourbon Cold Brew',
      price: 5.20,
      quantity: 1,
      customization: 'Less Ice, Sweet Cream Top',
      category: 'Cold Brew'
    },
    {
      id: '4',
      name: 'Artisanal Butter Croissant',
      price: 3.90,
      quantity: 1,
      customization: 'Warmed Up',
      category: 'Pastry'
    }
  ]);

  const [fulfillmentType, setFulfillmentType] = useState('pickup');
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyPromoCode = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'AROMA10') {
      setAppliedPromo({ code: 'AROMA10', discountPercent: 10 });
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "AROMA10" for 10% off.');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = appliedPromo ? (subtotal * appliedPromo.discountPercent) / 100 : 0;
  const tax = (subtotal - discountAmount) * 0.08;
  const deliveryFee = fulfillmentType === 'delivery' ? 2.99 : 0;
  const grandTotal = subtotal - discountAmount + tax + deliveryFee;

  if (orderPlaced) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-md">
          <Check className="w-10 h-10" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-[#2C1A14]">Order Placed Successfully!</h1>
        <p className="text-sm text-[#664134]">Your warm beverages and fresh pastries are being handcrafted by our barista. Order #AROMA-8492.</p>
        <div className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#E8D9C5] text-left text-xs space-y-2">
          <div className="flex justify-between font-semibold text-[#2C1A14]">
            <span>Estimated Pickup Time:</span>
            <span className="text-[#C85A32]">12 to 15 mins</span>
          </div>
          <div className="flex justify-between text-[#664134]">
            <span>Location:</span>
            <span>142 Espresso Boulevard, NY</span>
          </div>
        </div>
        <Link
          to="/"
          onClick={() => setOrderPlaced(false)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2C1A14] text-white text-xs font-semibold hover:bg-[#C85A32] transition-colors"
        >
          <span>Return to Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="border-b border-[#E8D9C5] pb-6">
        <div className="flex items-center gap-3">
          <ShoppingBag className="w-7 h-7 text-[#C85A32]" />
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1A14]">Your Shopping Bag</h1>
        </div>
        <p className="text-sm text-[#664134] mt-1">Review your order details and customize your brew preferences.</p>
      </div>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Item List (2 Columns on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Fulfillment Toggle */}
            <div className="bg-[#F4ECE1] p-1.5 rounded-2xl flex items-center gap-2 max-w-md">
              <button
                onClick={() => setFulfillmentType('pickup')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  fulfillmentType === 'pickup'
                    ? 'bg-[#2C1A14] text-white shadow-sm'
                    : 'text-[#5C3A35] hover:text-[#2C1A14]'
                }`}
              >
                In-Store Pickup (Free)
              </button>
              <button
                onClick={() => setFulfillmentType('delivery')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  fulfillmentType === 'delivery'
                    ? 'bg-[#2C1A14] text-white shadow-sm'
                    : 'text-[#5C3A35] hover:text-[#2C1A14]'
                }`}
              >
                Local Courier Delivery (+$2.99)
              </button>
            </div>

            {/* Cart Items Cards */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FFFDF9] rounded-2xl border border-[#E8D9C5] p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    {/* Clickable Image Box -> Product Detail */}
                    <Link
                      to={`/product/${item.id}`}
                      className="w-16 h-16 rounded-xl bg-gradient-to-tr from-[#3D241C] to-[#5C3A35] flex items-center justify-center text-[#E69F52] flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden cursor-pointer"
                    >
                      <Coffee className="w-8 h-8" />
                    </Link>
                    <div>
                      <span className="text-[10px] font-bold text-[#784C44] uppercase">{item.category}</span>
                      
                      {/* Clickable Title -> Product Detail */}
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-serif text-lg font-bold text-[#2C1A14] group-hover:text-[#C85A32] transition-colors">{item.name}</h3>
                      </Link>

                      <p className="text-xs text-[#946358] mt-0.5">{item.customization}</p>
                      <span className="font-serif text-base font-bold text-[#2C1A14] block mt-1">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Controls & Delete */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#F4ECE1]">
                    <div className="flex items-center border border-[#E8D9C5] bg-[#F4ECE1] rounded-xl overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-2 text-[#5C3A35] hover:bg-[#E8D9C5] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-[#2C1A14]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-2 text-[#5C3A35] hover:bg-[#E8D9C5] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="font-serif text-lg font-bold text-[#2C1A14]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-xl text-[#784C44] hover:bg-rose-100 hover:text-rose-700 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Instructions Input */}
            <div className="bg-[#FFFDF9] rounded-2xl border border-[#E8D9C5] p-5 space-y-2">
              <label className="block text-xs font-bold text-[#2C1A14] uppercase tracking-wider">
                Special Barista Notes
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Extra hot milk, double cup, napkin requests..."
                className="w-full p-3 rounded-xl bg-[#FAF6F0] border border-[#E8D9C5] text-xs text-[#2C1A14] placeholder-[#946358] focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
              />
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#FFFDF9] rounded-3xl border border-[#E8D9C5] p-6 shadow-sm space-y-6">
              <h2 className="font-serif text-xl font-bold text-[#2C1A14] border-b border-[#E8D9C5] pb-4">
                Order Summary
              </h2>

              {/* Promo Code Form */}
              <form onSubmit={applyPromoCode} className="space-y-2">
                <label className="block text-xs font-semibold text-[#5C3A35] flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5 text-[#C85A32]" /> Have a Promo Code?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter AROMA10"
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF6F0] border border-[#E8D9C5] text-xs uppercase tracking-wider text-[#2C1A14] focus:outline-none focus:border-[#C85A32]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#2C1A14] hover:bg-[#C85A32] text-white text-xs font-semibold transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {appliedPromo && (
                  <p className="text-[11px] font-semibold text-emerald-700">Promo AROMA10 applied (10% Off)!</p>
                )}
                {promoError && (
                  <p className="text-[11px] font-medium text-rose-600">{promoError}</p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-3 text-xs border-t border-b border-[#F4ECE1] py-4 text-[#5C3A35]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2C1A14]">${subtotal.toFixed(2)}</span>
                </div>
                
                {appliedPromo && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Discount (10%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span className="font-semibold text-[#2C1A14]">${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Fulfillment ({fulfillmentType})</span>
                  <span className="font-semibold text-[#2C1A14]">
                    {deliveryFee > 0 ? `$${deliveryFee.toFixed(2)}` : 'FREE'}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="font-serif text-lg font-bold text-[#2C1A14]">Total</span>
                <span className="font-serif text-2xl font-bold text-[#C85A32]">${grandTotal.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => setOrderPlaced(true)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#D96B43] hover:from-[#B84A27] text-white font-semibold text-sm shadow-md shadow-[#C85A32]/20 flex items-center justify-center gap-2 group transition-all"
              >
                <span>Complete Order</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#946358]">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Secure Contactless Payment</span>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-[#E8D9C5] space-y-4 max-w-lg mx-auto">
          <ShoppingBag className="w-12 h-12 text-[#D9C4AA] mx-auto" />
          <h2 className="font-serif text-2xl font-bold text-[#2C1A14]">Your Shopping Bag is Empty</h2>
          <p className="text-xs text-[#664134]">Add some fresh roast coffee or sweet baked pastries to get started!</p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C85A32] text-white text-sm font-semibold hover:bg-[#B84A27] transition-colors"
          >
            <span>Browse Menu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

    </div>
  );
}
