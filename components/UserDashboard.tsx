import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Target, Clock, ArrowRight, Sparkles, CheckCircle, BookOpen, Award } from 'lucide-react';
import { authService } from '../services/authService';

export const UserDashboard: React.FC = () => {
    const user = authService.getCurrentUser();

    // Mock data for demonstration
    const careerMatches = [
        { name: 'UX Designer', match: 92, category: 'Creative', trending: true },
        { name: 'Data Analyst', match: 88, category: 'Analytical', trending: false },
        { name: 'Content Strategist', match: 85, category: 'Creative', trending: true },
        { name: 'Product Manager', match: 82, category: 'Management', trending: false },
    ];

    const stats = [
        { label: 'Assessment Progress', value: '75%', icon: Target, color: 'text-blue-600', bgColor: 'bg-blue-50' },
        { label: 'Career Paths Matched', value: '24', icon: TrendingUp, color: 'text-green-600', bgColor: 'bg-green-50' },
        { label: 'Skills Identified', value: '12', icon: Award, color: 'text-purple-600', bgColor: 'bg-purple-50' },
        { label: 'Time Saved', value: '10h', icon: Clock, color: 'text-orange-600', bgColor: 'bg-orange-50' },
    ];

    const recentActivity = [
        { action: 'Completed personality assessment', time: '2 hours ago', icon: CheckCircle },
        { action: 'Viewed UX Designer roadmap', time: '1 day ago', icon: BookOpen },
        { action: 'Started career exploration', time: '3 days ago', icon: Sparkles },
    ];

    return (
        <div className="min-h-screen bg-neutral-50 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-neutral-900">
                                Welcome back, {user?.name || 'User'}! 👋
                            </h1>
                            <p className="text-neutral-500 mt-1">Here's your career discovery progress</p>
                        </div>
                        <Link
                            to="/profile"
                            className="hidden md:flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-neutral-800 transition-all"
                        >
                            <Sparkles className="w-4 h-4" />
                            Take Assessment
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-neutral-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Career Matches */}
                    <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-neutral-900">Your Top Career Matches</h2>
                            <Link to="#" className="text-sm text-black font-semibold hover:underline flex items-center gap-1">
                                View All <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {careerMatches.map((career, i) => (
                                <div key={i} className="group relative">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center text-xl">
                                                {i === 0 ? '🎨' : i === 1 ? '📊' : i === 2 ? '✍️' : '🚀'}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-neutral-900">{career.name}</h3>
                                                <p className="text-sm text-neutral-500">{career.category}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {career.trending && (
                                                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                                                    Trending
                                                </span>
                                            )}
                                            <span className="text-lg font-bold text-neutral-900">{career.match}%</span>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-black to-neutral-600 transition-all duration-1000"
                                            style={{ width: `${career.match}%` }}
                                        />
                                    </div>

                                    {/* Hover Action */}
                                    <button className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold">
                                        Explore Path
                                    </button>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="#"
                            className="mt-6 w-full flex items-center justify-center gap-2 bg-neutral-100 text-neutral-700 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition-all"
                        >
                            <BarChart3 className="w-4 h-4" />
                            See Detailed Analysis
                        </Link>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                        <h2 className="text-xl font-bold text-neutral-900 mb-6">Recent Activity</h2>

                        <div className="space-y-4">
                            {recentActivity.map((activity, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <activity.icon className="w-4 h-4 text-neutral-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-neutral-700 font-medium">{activity.action}</p>
                                        <p className="text-xs text-neutral-400 mt-0.5">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-gradient-to-br from-black to-neutral-800 rounded-xl text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-5 h-5" />
                                <h3 className="font-bold">Quick Tip</h3>
                            </div>
                            <p className="text-sm text-neutral-200">
                                Complete your personality assessment to unlock personalized career roadmaps!
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">Ready to discover your perfect career?</h2>
                    <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                        Take our comprehensive assessment and get personalized recommendations tailored to your unique strengths.
                    </p>
                    <button className="bg-white text-neutral-900 px-8 py-3 rounded-xl font-bold hover:bg-neutral-100 transition-all shadow-lg">
                        Start Full Assessment
                    </button>
                </div>
            </div>
        </div>
    );
};
