import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Heart, Menu, X, User, LogOut, Settings, LayoutDashboard, CreditCard, Bell } from 'lucide-react';
import { authService } from '../services/authService';
import { toastService } from '../services/toastService';

export const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = authService.isAuthenticated();
    const user = authService.getCurrentUser();

    const handleLogout = () => {
        authService.logout();
        toastService.success('Logged out successfully');
        navigate('/');
        setUserMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/#about' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <Heart className="w-6 h-6 text-black fill-black group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-xl tracking-tight">We-KIT</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-medium transition-colors ${location.pathname === link.path
                                        ? 'text-black'
                                        : 'text-neutral-600 hover:text-black'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        {isAuthenticated ? (
                            <>
                                {/* Notifications */}
                                <button className="relative p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                                    <Bell className="w-5 h-5 text-neutral-600" />
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                                </button>

                                {/* User Menu */}
                                <div className="relative">
                                    <button
                                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                                        className="flex items-center gap-2 hover:bg-neutral-100 rounded-lg px-3 py-2 transition-colors"
                                    >
                                        <img
                                            src={user?.avatar || `https://i.pravatar.cc/150?u=${user?.email}`}
                                            alt={user?.name}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span className="hidden md:block text-sm font-medium text-neutral-700">
                                            {user?.name}
                                        </span>
                                    </button>

                                    {/* Dropdown Menu */}
                                    {userMenuOpen && (
                                        <>
                                            <div
                                                className="fixed inset-0 z-10"
                                                onClick={() => setUserMenuOpen(false)}
                                            />
                                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-neutral-200 py-2 z-20">
                                                <div className="px-4 py-3 border-b border-neutral-100">
                                                    <p className="text-sm font-semibold text-neutral-900">{user?.name}</p>
                                                    <p className="text-xs text-neutral-500 truncate">{user?.email}</p>
                                                </div>
                                                <Link
                                                    to="/dashboard"
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                                                    onClick={() => setUserMenuOpen(false)}
                                                >
                                                    <LayoutDashboard className="w-4 h-4" />
                                                    Dashboard
                                                </Link>
                                                <Link
                                                    to="/profile"
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                                                    onClick={() => setUserMenuOpen(false)}
                                                >
                                                    <User className="w-4 h-4" />
                                                    Profile
                                                </Link>
                                                <Link
                                                    to="/settings"
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                                                    onClick={() => setUserMenuOpen(false)}
                                                >
                                                    <Settings className="w-4 h-4" />
                                                    Settings
                                                </Link>
                                                <Link
                                                    to="/pricing"
                                                    className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
                                                    onClick={() => setUserMenuOpen(false)}
                                                >
                                                    <CreditCard className="w-4 h-4" />
                                                    Billing
                                                </Link>
                                                <div className="border-t border-neutral-100 mt-2 pt-2">
                                                    <button
                                                        onClick={handleLogout}
                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors w-full"
                                                    >
                                                        <LogOut className="w-4 h-4" />
                                                        Logout
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="hidden md:block text-sm font-medium text-neutral-700 hover:text-black transition-colors"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-neutral-200 bg-white">
                    <div className="px-4 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.path}
                                href={link.path}
                                className="block text-sm font-medium text-neutral-700 hover:text-black transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        {!isAuthenticated && (
                            <Link
                                to="/login"
                                className="block text-sm font-medium text-neutral-700 hover:text-black transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};
