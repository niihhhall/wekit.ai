import React, { useState } from 'react';
import { User, Mail, Calendar, Award, Camera, Save } from 'lucide-react';
import { authService } from '../services/authService';
import { toastService } from '../services/toastService';
import { LoadingSpinner } from './LoadingSpinner';

export const ProfilePage: React.FC = () => {
    const currentUser = authService.getCurrentUser();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: currentUser?.name || '',
        email: currentUser?.email || '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await authService.updateProfile({
                name: formData.name,
                email: formData.email,
            });
            toastService.success('Profile updated successfully!');
        } catch (err) {
            toastService.error('Failed to update profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-neutral-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="text-3xl font-bold text-neutral-900">Profile Settings</h1>
                    <p className="text-neutral-500 mt-1">Manage your account information</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm text-center">
                            <div className="relative inline-block mb-4">
                                <img
                                    src={currentUser?.avatar || `https://i.pravatar.cc/150?u=${currentUser?.email}`}
                                    alt={currentUser?.name}
                                    className="w-24 h-24 rounded-full mx-auto"
                                />
                                <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full hover:bg-neutral-800 transition-colors">
                                    <Camera className="w-4 h-4" />
                                </button>
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-1">{currentUser?.name}</h3>
                            <p className="text-sm text-neutral-500 mb-4">{currentUser?.email}</p>

                            <div className="flex items-center justify-center gap-2 text-sm text-neutral-600 bg-neutral-50 rounded-lg px-3 py-2">
                                <Award className="w-4 h-4" />
                                Free Plan
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                            <h2 className="text-xl font-bold text-neutral-900 mb-6">Personal Information</h2>

                            <div className="space-y-6">
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
                                            className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all bg-neutral-50"
                                        />
                                    </div>
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
                                            className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black outline-none transition-all bg-neutral-50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                        Member Since
                                    </label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                                        <input
                                            type="text"
                                            value={new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long' })}
                                            disabled
                                            className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-xl bg-neutral-100 text-neutral-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex-1 bg-black text-white py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                                    >
                                        {loading ? <LoadingSpinner size="sm" /> : (
                                            <>
                                                <Save className="w-4 h-4" />
                                                Save Changes
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Additional Sections */}
                        <div className="mt-6 bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                            <h2 className="text-xl font-bold text-neutral-900 mb-4">Account Actions</h2>
                            <div className="space-y-3">
                                <button className="w-full text-left px-4 py-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors text-sm font-medium text-neutral-700">
                                    Change Password
                                </button>
                                <button className="w-full text-left px-4 py-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors text-sm font-medium text-neutral-700">
                                    Notification Preferences
                                </button>
                                <button className="w-full text-left px-4 py-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium text-red-600">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
