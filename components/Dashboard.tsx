import React, { useState } from 'react';
import { Platform, LaunchPhase } from '../types';
import { INITIAL_POSTS, LAUNCH_DATE, CORE_NARRATIVE } from '../constants';
import PostCard from './PostCard';
import { Rocket, Calendar, Heart, Terminal, Linkedin, Instagram, MessageSquare } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<Platform>(Platform.LINKEDIN);
  const [activePhase, setActivePhase] = useState<LaunchPhase>(LaunchPhase.PRE_LAUNCH);

  const filteredPosts = INITIAL_POSTS.filter(
    post => post.platform === activePlatform && post.phase === activePhase
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Heart className="text-white w-5 h-5" fill="currentColor" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">We-KIT <span className="text-indigo-600 font-light">Launch</span></span>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Launch: {LAUNCH_DATE}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <div className="bg-white border-b border-slate-200 pt-10 pb-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Fall in love with your future.</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{CORE_NARRATIVE}</p>
          <div className="mt-6 flex justify-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Strategy: Trust &gt; Virality
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Audience: Students 13-25
            </span>
          </div>
        </div>
      </div>

      {/* Main Interface */}
      <div className="max-w-5xl mx-auto px-4 mt-8 flex flex-col md:flex-row gap-8">

        {/* Left Sidebar: Navigation */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-8">

          {/* Platform Selector */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Platform</h3>
            <div className="space-y-1">
              <button
                onClick={() => setActivePlatform(Platform.LINKEDIN)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activePlatform === Platform.LINKEDIN ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <Linkedin size={18} /> LinkedIn
              </button>
              <button
                onClick={() => setActivePlatform(Platform.INSTAGRAM)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activePlatform === Platform.INSTAGRAM ? 'bg-pink-50 text-pink-700' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <Instagram size={18} /> Instagram
              </button>
              <button
                onClick={() => setActivePlatform(Platform.TWITTER)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activePlatform === Platform.TWITTER ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <Terminal size={18} /> Twitter/X
              </button>
              <button
                onClick={() => setActivePlatform(Platform.REDDIT)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activePlatform === Platform.REDDIT ? 'bg-orange-50 text-orange-700' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                <MessageSquare size={18} /> Reddit
              </button>
            </div>
          </div>

          {/* Phase Selector */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Timeline</h3>
            <div className="relative border-l-2 border-slate-200 ml-3 space-y-6 py-2">
              <div
                className={`relative pl-6 cursor-pointer group`}
                onClick={() => setActivePhase(LaunchPhase.PRE_LAUNCH)}
              >
                <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 transition-colors ${activePhase === LaunchPhase.PRE_LAUNCH ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-slate-300 group-hover:border-indigo-400'}`}></div>
                <h4 className={`text-sm font-medium ${activePhase === LaunchPhase.PRE_LAUNCH ? 'text-indigo-700' : 'text-slate-600'}`}>Pre-Launch</h4>
                <p className="text-xs text-slate-400 mt-1">Building authority & hype</p>
              </div>

              <div
                className={`relative pl-6 cursor-pointer group`}
                onClick={() => setActivePhase(LaunchPhase.LAUNCH_DAY)}
              >
                <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 transition-colors ${activePhase === LaunchPhase.LAUNCH_DAY ? 'bg-red-500 border-red-500' : 'bg-white border-slate-300 group-hover:border-red-400'}`}></div>
                <h4 className={`text-sm font-medium ${activePhase === LaunchPhase.LAUNCH_DAY ? 'text-red-600' : 'text-slate-600'}`}>Launch Day (Feb 14)</h4>
                <p className="text-xs text-slate-400 mt-1">Conversion & emotion</p>
              </div>

              <div
                className={`relative pl-6 cursor-pointer group`}
                onClick={() => setActivePhase(LaunchPhase.POST_LAUNCH)}
              >
                <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 transition-colors ${activePhase === LaunchPhase.POST_LAUNCH ? 'bg-green-600 border-green-600' : 'bg-white border-slate-300 group-hover:border-green-400'}`}></div>
                <h4 className={`text-sm font-medium ${activePhase === LaunchPhase.POST_LAUNCH ? 'text-green-700' : 'text-slate-600'}`}>Post-Launch</h4>
                <p className="text-xs text-slate-400 mt-1">Social proof & momentum</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Content Area: Feed */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              {activePlatform} Content <span className="text-slate-400 text-sm font-normal">/ {activePhase}</span>
            </h2>
            <div className="text-xs text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
              Showing {filteredPosts.length} posts
            </div>
          </div>

          <div className="space-y-6">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
            {filteredPosts.length === 0 && (
              <div className="text-center py-20 bg-white rounded-lg border border-dashed border-slate-300">
                <Rocket className="mx-auto text-slate-300 w-12 h-12 mb-4" />
                <p className="text-slate-500">No content scheduled for this phase yet.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
