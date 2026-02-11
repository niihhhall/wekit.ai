import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Heart, Mail, Lock, User, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { authService } from '../services/authService';
import { toastService } from '../services/toastService';
import { LoadingSpinner } from './LoadingSpinner';

export const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateStep1 = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.agreeToTerms) {
            newErrors.terms = 'You must agree to the terms';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep1()) {
            setStep(2);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep2()) return;

        setLoading(true);
        try {
            await authService.signup(formData.email, formData.password, formData.name);
            toastService.success('Account created successfully! 🎉');
            navigate('/dashboard');
        } catch (err) {
            toastService.error('Signup failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 flex items-center justify-center p-4">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo */}
                <Link to="/" className="flex items-center justify-center gap-2 mb-8 group">
                    <Heart className="w-8 h-8 text-black fill-black group-hover:scale-110 transition-transform" />
                    <span className="text-2xl font-bold tracking-tight">We-KIT</span>
                </Link>

                {/* Signup Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Create your account</h1>
                        <p className="text-neutral-500">Start your career discovery journey</p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className={`flex items-center gap-2 ${step >= 1 ? 'text-black' : 'text-neutral-300'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-black text-white' : 'bg-neutral-200'}`}>
                                {step > 1 ? <CheckCircle className="w-5 h-5" /> : '1'}
                            </div>
                            <span className="text-xs font-medium hidden sm:block">Info</span>
                        </div>
                        <div className={`w-12 h-px ${step >= 2 ? 'bg-black' : 'bg-neutral-200'}`} />
                        <div className={`flex items-center gap-2 ${step >= 2 ? 'text-black' : 'text-neutral-300'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-black text-white' : 'bg-neutral-200'}`}>
                                2
                            </div>
                            <span className="text-xs font-medium hidden sm:block">Security</span>
                        </div>
                    </div>

                    {/* Step 1: Basic Info */}
                    {step === 1 && (
                        <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all bg-neutral-50"
                                    />
                                </div>
                                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="you@example.com"
                                        className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all bg-neutral-50"
                                    />
                                </div>
                                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-all shadow-lg"
                            >
                                Continue
                            </button>
                        </form>
                    )}

                    {/* Step 2: Password */}
                    {step === 2 && (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="password" className="block text-sm font-semibold text-neutral-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        placeholder="••••••••"
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
                                {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-neutral-700 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                    <input
                                        id="confirmPassword"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                        placeholder="••••••••"
                                        className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all bg-neutral-50"
                                    />
                                </div>
                                {errors.confirmPassword && <p className="text-xs text-red-600 mt-1">{errors.confirmPassword}</p>}
                            </div>

                            <div>
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={formData.agreeToTerms}
                                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                                        className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-black focus:ring-black"
                                    />
                                    <span className="text-sm text-neutral-600">
                                        I agree to the{' '}
                                        <a href="#" className="text-black font-medium hover:underline">
                                            Terms of Service
                                        </a>{' '}
                                        and{' '}
                                        <a href="#" className="text-black font-medium hover:underline">
                                            Privacy Policy
                                        </a>
                                    </span>
                                </label>
                                {errors.terms && <p className="text-xs text-red-600 mt-1">{errors.terms}</p>}
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="flex-1 bg-neutral-100 text-neutral-700 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition-all"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-all shadow-lg disabled:opacity-50"
                                >
                                    {loading ? <LoadingSpinner size="sm" /> : 'Create Account'}
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Login Link */}
                    <p className="text-center text-sm text-neutral-500 mt-6">
                        Already have an account?{' '}
                        <Link to="/login" className="text-black font-semibold hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
