import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Lock, Eye, EyeOff, AlertCircle, ArrowLeft } from 'lucide-react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/admin', { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top bar */}
      <div className="border-b-4 border-black px-6 sm:px-8 lg:px-12 py-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group cursor-pointer"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Back to site</span>
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary mb-8">
              <Lock size={32} className="text-black" />
            </div>
            <h1 className="text-[4rem] md:text-[5rem] font-display font-black text-black tracking-tighter uppercase leading-[0.85] mb-4">
              ADMIN <span className="text-primary">PANEL.</span>
            </h1>
            <p className="text-lg font-medium tracking-tight text-gray-400 border-l-4 border-primary pl-4 inline-block text-left">
              Fancy Corner Control Center
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="flex items-center gap-3 bg-red-50 border-2 border-red-500 text-red-600 px-5 py-4 mb-8 animate-[fadeIn_0.3s_ease-out]">
              <AlertCircle size={18} className="shrink-0" />
              <p className="text-sm font-bold uppercase tracking-wider">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label
                htmlFor="admin-email"
                className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4"
              >
                Email Address
              </label>
              <input
                type="email"
                id="admin-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="admin@fancycorner.in"
                className="w-full bg-transparent border-b-4 border-black px-0 py-4 text-2xl font-bold text-black focus:outline-none focus:border-primary placeholder:text-gray-300 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="admin-password"
                className="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="admin-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full bg-transparent border-b-4 border-black px-0 py-4 pr-12 text-2xl font-bold text-black focus:outline-none focus:border-primary placeholder:text-gray-300 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors cursor-pointer p-2"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white hover:bg-primary hover:text-black font-black uppercase tracking-widest text-lg px-8 py-6 transition-colors border-4 border-black disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-4"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Authenticating...
                </span>
              ) : (
                'Access Dashboard'
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-300 text-xs mt-12 font-bold uppercase tracking-[0.3em]">
            Authorized Personnel Only
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
