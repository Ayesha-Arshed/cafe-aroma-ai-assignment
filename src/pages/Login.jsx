import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Coffee, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Welcome back to Cafe Aroma! Redirecting to menu...');
      setTimeout(() => {
        navigate('/menu');
      }, 1800);
    }, 800);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-[#FFFDF9] rounded-3xl border border-[#E8D9C5] p-8 shadow-xl space-y-6 relative overflow-hidden">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C85A32] via-[#E69F52] to-[#C85A32]"></div>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2C1A14] to-[#3D241C] text-[#E69F52] flex items-center justify-center mx-auto shadow-md">
            <Coffee className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#2C1A14]">Welcome Back</h1>
          <p className="text-xs text-[#664134]">Sign in to your Cafe Aroma account to access saved rewards & fast checkout.</p>
        </div>

        {/* Success Alert */}
        {successMessage ? (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>{successMessage}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            
            {/* Email Field */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-[#2C1A14] uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#946358] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF6F0] border text-xs text-[#2C1A14] placeholder-[#946358] focus:outline-none focus:ring-2 ${
                    errors.email ? 'border-rose-400 focus:ring-rose-400' : 'border-[#E8D9C5] focus:ring-[#C85A32]'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[11px] font-medium text-rose-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-[#2C1A14] uppercase tracking-wider">
                  Password
                </label>
                <a href="#" onClick={(e) => { e.preventDefault(); alert('Reset password link sent to your email.'); }} className="text-[11px] font-medium text-[#C85A32] hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#946358] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Enter at least 6 characters"
                  className={`w-full pl-10 pr-10 py-3 rounded-xl bg-[#FAF6F0] border text-xs text-[#2C1A14] placeholder-[#946358] focus:outline-none focus:ring-2 ${
                    errors.password ? 'border-rose-400 focus:ring-rose-400' : 'border-[#E8D9C5] focus:ring-[#C85A32]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#946358] hover:text-[#2C1A14]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-[11px] font-medium text-rose-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" /> {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                className="w-4 h-4 rounded text-[#C85A32] focus:ring-[#C85A32] border-[#E8D9C5]"
              />
              <label htmlFor="rememberMe" className="text-xs text-[#664134] cursor-pointer">
                Remember me on this browser
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C85A32] to-[#D96B43] hover:from-[#B84A27] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#C85A32]/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Footer Toggle to Signup */}
        <div className="border-t border-[#E8D9C5] pt-4 text-center text-xs text-[#664134]">
          Don't have an account yet?{' '}
          <Link to="/signup" className="font-bold text-[#C85A32] hover:underline">
            Create Account
          </Link>
        </div>

      </div>
    </div>
  );
}
