import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Heart, Mail, Lock, Eye, EyeOff, Sparkles } from 'lucide-react';
import { authService } from '../services/authService';
import { toastService } from '../services/toastService';
import { LoadingSpinner } from './LoadingSpinner';

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await authService.login(email, password);
            toastService.success('Welcome back! 🎉');
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid email or password');
            toastService.error('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleDemoLogin = async () => {
        setEmail('demo@wekit.com');
        setPassword('demo123');
        setLoading(true);

        try {
            await authService.login('demo@wekit.com', 'demo123');
            toastService.success('Logged in as Demo User! 🎉');
            navigate('/dashboard');
        } catch (err) {
            toastService.error('Demo login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex items-center justify-center p-4">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neutral-200 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neutral-300 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo */}
                <Link to="/" className="flex items-center justify-center gap-2 mb-8 group">
                    <Heart className="w-8 h-8 text-black fill-black group-hover:scale-110 transition-transform" />
                    <span className="text-2xl font-bold tracking-tight">We-KIT</span>
                </Link>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Welcome back</h1>
                        <p className="text-neutral-500">Sign in to continue your journey</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    required
                                    className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all bg-neutral-50"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-neutral-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    required
                                    className="w-full pl-11 pr-12 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all bg-neutral-50"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-neutral-300 text-black focus:ring-black" />
                                <span className="text-sm text-neutral-600">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-black hover:underline font-medium">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? <LoadingSpinner size="sm" /> : 'Sign In'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-neutral-200" />
                        <span className="text-xs text-neutral-400 font-medium">OR</span>
                        <div className="flex-1 h-px bg-neutral-200" />
                    </div>

                    {/* Demo Login */}
                    <button
                        onClick={handleDemoLogin}
                        disabled={loading}
                        className="w-full bg-neutral-100 text-neutral-700 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition-all border border-neutral-200 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        <Sparkles className="w-4 h-4" />
                        Try Demo Account
                    </button>

                    {/* Signup Link */}
                    <p className="text-center text-sm text-neutral-500 mt-6">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-black font-semibold hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-neutral-400 mt-6">
                    By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
            </div>
        </div>
    );
};
