import React, { useState, useEffect, useRef } from 'react';
import { Heart, CheckCircle2, ArrowRight, Shield, Users, Gift, Zap, Sparkles, X, Rocket, HelpCircle, AlertCircle, RefreshCw, MousePointer2, Star, ChevronLeft, ChevronRight, Layout, Search, Target, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export const LandingPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState('');
  const [isHoveringForm, setIsHoveringForm] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Testimonials Scroll Logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const TESTIMONIALS = [
    {
      id: 1,
      text: "I always thought it was engineering or nothing. We-KIT showed me careers I didn't even know existed. It felt like someone finally understood me.",
      author: "Ananya Sharma",
      role: "Class 12 Student",
      img: "https://i.pravatar.cc/150?u=ananya"
    },
    {
      id: 2,
      text: "Finally something that explains WHY a career fits you. Not just generic advice. The clarity I got in 20 mins was worth years of confusion.",
      author: "Rahul Verma",
      role: "College Student",
      img: "https://i.pravatar.cc/150?u=rahul"
    },
    {
      id: 3,
      text: "My parents were pushing for medicine. We-KIT's report helped me have a real conversation with them backed by data. Now I'm pursuing Design.",
      author: "Vikram Singh",
      role: "Design Aspirant",
      img: "https://i.pravatar.cc/150?u=vikram"
    },
    {
      id: 4,
      text: "The psychology based approach is a game changer. It didn't just tell me what to do, it told me who I am. Highly recommended for every student.",
      author: "Priya Patel",
      role: "Parent",
      img: "https://i.pravatar.cc/150?u=priya"
    }
  ];

  // Mouse tracking for spotlight effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    // Target Date: Feb 14, 2025 00:00:00
    const targetDate = new Date('2025-02-14T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 selection:bg-black selection:text-white">

      {/* --- HERO SECTION UPGRADE START --- */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative bg-white text-neutral-900 overflow-hidden flex flex-col"
      >
        <style>{`
          @keyframes grid-move {
            0% { transform: translateY(0); }
            100% { transform: translateY(40px); }
          }
          .animate-grid {
            animation: grid-move 3s linear infinite;
          }
          @keyframes text-shimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-text-shimmer {
            background-size: 200% auto;
            animation: text-shimmer 4s linear infinite;
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
          /* Hide scrollbar for testimonials */
          .scrollbar-hide::-webkit-scrollbar {
              display: none;
          }
          .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
          }
        `}</style>

        {/* 1. Dynamic Background & Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Spotlight Follower (Dark shadow on light theme) */}
          <div
            className="absolute w-[800px] h-[800px] bg-neutral-200/50 rounded-full blur-[100px] transition-opacity duration-500 hidden md:block"
            style={{
              left: mousePosition.x - 400,
              top: mousePosition.y - 400,
              opacity: 0.6,
              mixBlendMode: 'multiply'
            }}
          />

          {/* Static Ambient Glows (Mobile/Base) */}
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-neutral-100 rounded-full blur-[120px]"></div>

          {/* Perspective Grid Floor (Black Lines) */}
          <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>

        {/* 2. Navbar Overlay */}
        <nav className="relative z-20 w-full border-b border-neutral-100 bg-white/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
            <div className="flex items-center gap-2 group cursor-pointer select-none">
              <div className="font-bold text-2xl tracking-tighter text-black flex items-center gap-2">
                We-KIT
                <div className="relative flex items-center justify-center">
                  <Heart className="w-5 h-5 text-black fill-black relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-red-200 blur-lg opacity-50 animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Login button hidden as per request */}
            </div>
          </div>
        </nav>

        {/* 3. Hero Content */}
        <section className="relative z-10 flex flex-col items-center px-4 text-center max-w-5xl mx-auto w-full pt-16 pb-12 font-inter">

          {/* Animated Badge */}
          <div className="group relative inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200 backdrop-blur-sm text-neutral-600 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-8 hover:bg-white hover:border-neutral-300 hover:shadow-md transition-all cursor-default animate-float-slow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            <span className="relative z-10 group-hover:text-black transition-colors">Launch: Feb 14</span>
          </div>

          {/* Valentine's Slogan with Marker Effect */}
          <div className="mb-4 relative inline-block">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.5, ease: "circOut" }}
              className="absolute inset-0 bg-black -rotate-1 rounded-sm h-[100%] top-0"
              style={{ originX: 0 }}
            ></motion.div>
            <span className="relative z-10 text-lg md:text-xl font-medium text-white tracking-wide font-poppins px-3 py-1">
              Find Your Purpose This Valentine's Day
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter mb-8 leading-[0.9] drop-shadow-sm">
            <span className="block text-black">Fall in love</span>
            <span className="block text-neutral-400 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-normal my-2 sm:my-4 font-serif italic">with your</span>
            <span className="relative inline-block px-4 pb-2 group cursor-default">
              {/* Shimmering Text */}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-b from-black via-neutral-600 to-neutral-400 animate-text-shimmer">
                future.
              </span>
              {/* Decorative Glow */}
              <span className="absolute inset-0 bg-neutral-200 blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity duration-700"></span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Discover careers that match your <span className="text-black font-medium border-b border-black/30 hover:border-black transition-colors cursor-crosshair">personality</span>, not just your marks. <br className="hidden md:block" /> An AI-powered platform for the next generation.
          </p>

          {/* 4. High-Dopamine Input Section */}
          <div
            className="flex flex-col items-center gap-6 max-w-lg mx-auto w-full relative z-20 px-2 group/form"
            onMouseEnter={() => setIsHoveringForm(true)}
            onMouseLeave={() => setIsHoveringForm(false)}
          >
            <form className="w-full relative" onSubmit={(e) => e.preventDefault()}>
              {/* Glow Behind Input */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 rounded-full blur opacity-20 group-hover/form:opacity-60 transition duration-1000 group-hover/form:duration-200`}></div>

              <div className="relative flex flex-col sm:flex-row items-center bg-white border border-neutral-200 rounded-2xl sm:rounded-full p-1.5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-[1.01]">
                <div className="w-full relative flex items-center">
                  <div className="absolute left-5 text-neutral-400 group-focus-within/form:text-black transition-colors">
                    <Gift size={20} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full bg-transparent text-black placeholder:text-neutral-400 pl-14 pr-4 py-4 outline-none border-none text-base font-medium rounded-full transition-all"
                  />
                </div>
                <button type="button" className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl sm:rounded-full font-bold hover:bg-neutral-800 transition-all duration-200 shrink-0 shadow-lg hover:shadow-xl whitespace-nowrap flex items-center justify-center gap-2 group/btn active:scale-95">
                  Get Notified <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform text-white" />
                </button>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-neutral-500 font-medium"><CheckCircle2 className="w-3.5 h-3.5 text-black" /> No payment now</span>
              <span className="flex items-center gap-1.5 text-[10px] md:text-xs text-neutral-500 font-medium"><CheckCircle2 className="w-3.5 h-3.5 text-black" /> Priority Access</span>
            </div>
          </div>

          {/* 5. Countdown Dock (Moved Inside Hero Section) */}
          <div className="relative z-10 w-full px-4 mt-12 flex justify-center">
            {/* Glass Container */}
            <div className="bg-white/80 backdrop-blur-md border border-neutral-200 rounded-2xl md:rounded-full p-2 pr-4 md:pr-8 flex flex-col md:flex-row items-center gap-4 md:gap-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:bg-white transition-colors duration-300">

              {/* Status Indicator */}
              <div className="flex items-center gap-3 bg-neutral-100 rounded-full px-4 py-2 border border-neutral-200">
                <div className="relative flex items-center justify-center w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-600"></span>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-neutral-600 uppercase">System Online</span>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px h-6 bg-neutral-200"></div>

              {/* Timer Digits */}
              <div className="flex items-center gap-2 md:gap-4">
                {[
                  { val: timeLeft.days, label: 'D' },
                  { val: timeLeft.hours, label: 'H' },
                  { val: timeLeft.minutes, label: 'M' },
                  { val: timeLeft.seconds, label: 'S' }
                ].map((item, i) => (
                  <div key={i} className="flex items-baseline gap-1 group/timer">
                    <span className="text-lg md:text-xl font-mono font-bold text-black tabular-nums group-hover/timer:text-neutral-600 transition-colors">
                      {String(item.val).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-bold text-neutral-400">{item.label}</span>
                    {i < 3 && <span className="text-neutral-300 mx-1">:</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>
      </div>
      {/* --- HERO SECTION UPGRADE END --- */}

      {/* --- PROBLEM SECTION (PRESERVED) --- */}
      <section className="relative pt-12 pb-24 px-6 bg-white overflow-hidden font-['Poppins']">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-white rounded-full blur-3xl opacity-60 mix-blend-overlay"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-white rounded-full blur-3xl opacity-60 mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <AlertCircle size={14} className="text-black animate-pulse" />
              The Reality Check
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">Why most students feel <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-black">confused</span></h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">The old way of choosing careers is broken. It focuses on external validation instead of internal alignment.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 h-[340px] md:h-[320px] max-w-4xl mx-auto">

            {/* Card 1: The Trap (Flip Effect) */}
            <div className="group relative w-full h-full [perspective:1000px]">
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl hover:shadow-2xl rounded-3xl">

                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full bg-white rounded-3xl border border-neutral-200 p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                  <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4 shadow-inner">
                    <X size={32} className="text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">You're told to...</h3>
                  <p className="text-neutral-400 font-bold uppercase tracking-widest text-[10px] mb-6">The Trap</p>
                  <div className="flex items-center gap-2 text-neutral-400 text-xs animate-pulse">
                    <RefreshCw size={12} /> Hover to reveal reality
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-neutral-100 rounded-3xl border border-neutral-300 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2"><AlertCircle size={18} /> The Old Way</h3>
                  <ul className="space-y-3">
                    {[
                      { text: '"Follow your passion"', sub: "(Changes every week)" },
                      { text: '"Choose a safe career"', sub: "(Engineering / Medicine)" },
                      { text: '"Do what Sharma ji\'s son is doing"', sub: "(Comparison trap)" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-800 text-left">
                        <X size={14} className="text-neutral-400 mt-0.5 shrink-0" />
                        <span className="text-sm font-medium leading-snug">
                          {item.text} <span className="block text-neutral-500 font-normal text-[10px]">{item.sub}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: The Truth (Flip Effect + Dopamine) */}
            <div className="group relative w-full h-full [perspective:1000px]">
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl hover:shadow-2xl rounded-3xl">

                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full bg-black rounded-3xl border border-neutral-800 p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-2xl">
                  <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-neutral-800">
                    <HelpCircle size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">But no one explains...</h3>
                  <p className="text-neutral-500 font-bold uppercase tracking-widest text-[10px] mb-6">The Missing Piece</p>
                  <div className="flex items-center gap-2 text-neutral-500 text-xs animate-pulse">
                    <Sparkles size={12} /> Hover for the solution
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 w-full h-full bg-black rounded-3xl border border-neutral-800 p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> The We-KIT Way</h3>
                  <ul className="space-y-3">
                    {[
                      { text: 'Personality First', sub: "(Who you naturally are)" },
                      { text: 'Data-Backed Matches', sub: "(No more guessing)" },
                      { text: 'Actionable Roadmap', sub: "(Step-by-step clarity)" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-200 text-left">
                        <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm font-medium leading-snug">
                          {item.text} <span className="block text-neutral-600 font-normal text-[10px]">{item.sub}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-16 text-center">
            <p className="text-neutral-400 font-medium italic text-sm">
              Confusion isn't your fault. <span className="text-black font-semibold not-italic">Clarity was never given.</span>
            </p>
          </div>
        </div >
      </section >
      {/* --- PROBLEM SECTION END --- */}

      {/* --- MEET WE-KIT SECTION UPGRADE START --- */}
      <section className="relative py-32 px-4 bg-neutral-100 overflow-hidden font-['Poppins'] flex flex-col items-center">

        {/* Top Curve Separator to match screenshot's white top area */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-neutral-50 rounded-b-[100%] scale-x-150 -translate-y-24 z-0 pointer-events-none"></div>

        <div className="relative z-10 text-center mb-16 md:mb-24 mt-8">
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-tighter">
            Three pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-black">discovery.</span>
          </h2>
          <p className="text-neutral-500 max-w-xl mx-auto text-lg">
            No magic. Just deep psychology, data, and design.
          </p>
        </div>

        {/* Cards Container - Desktop: Horizontal Overlap, Mobile: Vertical Stack */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[600px] md:min-h-[500px] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 perspective-1000">

          {/* Style for the Smoke Effect (Modified for Light Mode) */}
          <style>{`
                .card-mist {
                    background-image: 
                        radial-gradient(at 0% 0%, rgba(0,0,0,0.03) 0px, transparent 50%),
                        radial-gradient(at 100% 0%, rgba(0,0,0,0.02) 0px, transparent 50%),
                        radial-gradient(at 100% 100%, rgba(0,0,0,0.01) 0px, transparent 50%),
                        radial-gradient(at 0% 100%, rgba(0,0,0,0.02) 0px, transparent 50%);
                    background-size: 150% 150%;
                    animation: mist-shift 10s ease-in-out infinite alternate;
                }
                @keyframes mist-shift {
                    0% { background-position: 0% 0%; }
                    100% { background-position: 100% 100%; }
                }
            `}</style>

          {/* Card 1: Left Tilted */}
          <div className="group relative w-72 h-80 md:w-80 md:h-96 shrink-0 md:transform md:-rotate-12 md:translate-x-12 md:translate-y-4 z-10 transition-all duration-500 hover:z-40 hover:scale-105 hover:rotate-0">
            <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden border border-neutral-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              {/* Mist Layer */}
              <div className="absolute inset-0 card-mist opacity-100"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <Zap className="text-black w-10 h-10" strokeWidth={1.5} />
                <div>
                  <div className="text-neutral-400 text-sm font-medium mb-1 uppercase tracking-wider">Foundation</div>
                  <h3 className="text-3xl font-bold text-black leading-none">Psychometrics</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Center Prominent */}
          <div className="group relative w-80 h-96 md:w-96 md:h-[28rem] shrink-0 z-30 md:-translate-y-6 transition-all duration-500 hover:scale-105 shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
            <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden border border-neutral-100">
              {/* Mist Layer - More Intense */}
              <div className="absolute inset-0 card-mist opacity-100 mix-blend-multiply"></div>
              {/* Cosmic/Cloud Accent */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neutral-100 rounded-full blur-[80px]"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between items-center text-center">
                <Sparkles className="text-black w-16 h-16 drop-shadow-lg" strokeWidth={1} />
                <div className="mb-4">
                  <div className="text-neutral-500 text-sm font-bold mb-2 uppercase tracking-[0.2em] border border-neutral-200 rounded-full py-1 px-3 inline-block backdrop-blur-md">The Engine</div>
                  <h3 className="text-5xl font-bold text-black mb-2">AI Match</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">50+ Career Paths Analyzed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Right Tilted */}
          <div className="group relative w-72 h-80 md:w-80 md:h-96 shrink-0 md:transform md:rotate-12 md:-translate-x-12 md:translate-y-4 z-20 transition-all duration-500 hover:z-40 hover:scale-105 hover:rotate-0">
            <div className="absolute inset-0 bg-white rounded-[2rem] overflow-hidden border border-neutral-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              {/* Mist Layer */}
              <div className="absolute inset-0 card-mist opacity-100" style={{ animationDirection: 'reverse' }}></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-right items-end">
                <CheckCircle2 className="text-black w-10 h-10" strokeWidth={1.5} />
                <div>
                  <div className="text-neutral-400 text-sm font-medium mb-1 uppercase tracking-wider">Result</div>
                  <h3 className="text-3xl font-bold text-black leading-none">Total Clarity</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* --- MEET WE-KIT SECTION UPGRADE END --- */}

      {/* --- HOW IT WORKS SECTION UPGRADE START --- */}
      <section className="py-24 px-4 bg-white relative overflow-hidden font-['Poppins']">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-neutral-100/50 rounded-full blur-[100px] -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-200/50 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 text-xs font-bold uppercase tracking-wider mb-6">
              <RefreshCw size={14} className="animate-spin-slow" /> Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">
              Your path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-black">clarity.</span>
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Three simple steps to unlock your future. No guesswork, just results.
            </p>
          </motion.div>

          {/* Steps Container */}
          <div className="relative">
            {/* Desktop Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-100 -translate-x-1/2">
              {/* Start Icon */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full flex items-center justify-center z-10 border-2 border-white shadow-sm">
                <Flag size={12} className="text-white fill-white" />
              </div>
              <motion.div
                className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-neutral-400 via-neutral-600 to-black"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              ></motion.div>
              {/* End Icon */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full flex items-center justify-center z-10 border-2 border-white shadow-sm">
                <CheckCircle2 size={12} className="text-white" />
              </div>
            </div>

            {/* Mobile Left Line */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-100">
              {/* Start Icon */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full flex items-center justify-center z-10 border-2 border-white shadow-sm">
                <Flag size={12} className="text-white fill-white" />
              </div>
              <motion.div
                className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-neutral-400 via-neutral-600 to-black"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              ></motion.div>
              {/* End Icon */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full flex items-center justify-center z-10 border-2 border-white shadow-sm">
                <CheckCircle2 size={12} className="text-white" />
              </div>
            </div>

            <div className="space-y-24">
              {[
                {
                  step: "01",
                  title: "Assess",
                  desc: "Take our scientifically backed assessment. It's not a test, it's a conversation with yourself.",
                  icon: Layout,
                },
                {
                  step: "02",
                  title: "Discover",
                  desc: "Unlock your unique personality profile. See careers that actually fit who you are.",
                  icon: Search,
                },
                {
                  step: "03",
                  title: "Act",
                  desc: "Get a personalized roadmap. Colleges, degrees, and skills you need to succeed.",
                  icon: Target,
                }
              ].map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                  {/* Timeline Spacer (Desktop) */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Node (Center) */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 z-20 top-0 md:top-1/2 md:-translate-y-1/2 w-full md:w-auto flex justify-center md:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 + (i * 0.1) }}
                      className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl rotate-45 flex items-center justify-center bg-white border-[6px] border-white shadow-2xl shadow-neutral-200/50 group overflow-hidden z-20`}
                    >
                      {/* Animated Border */}
                      <div className="absolute inset-0 bg-neutral-100 group-hover:bg-black transition-colors duration-500"></div>

                      {/* Icon Container */}
                      <div className={`relative z-10 w-full h-full flex items-center justify-center -rotate-45 text-black group-hover:text-white transition-colors duration-500`}>
                        <item.icon size={32} strokeWidth={1.5} className="md:w-9 md:h-9 group-hover:scale-110 transition-transform duration-500" />
                      </div>

                      {/* Ripple Effect */}
                      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 ease-out origin-center"></div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pt-12 md:pt-0 ${i % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group bg-white p-8 md:p-10 rounded-[2.5rem] border border-neutral-100 shadow-[0_15px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] hover:border-neutral-200 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Hover Gradient */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white"></div>

                      {/* Background Number */}
                      <div className={`text-[120px] font-bold text-neutral-50 absolute -bottom-10 -right-4 select-none leading-none group-hover:text-neutral-100 transition-colors duration-500 ${i % 2 !== 0 ? 'left-auto md:left-4 md:right-auto' : ''}`}>
                        {item.step}
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4 text-black group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                        <p className="text-neutral-500 leading-relaxed font-medium text-lg">
                          {item.desc}
                        </p>

                        <div className={`mt-8 flex items-center gap-3 text-sm font-bold uppercase tracking-wider ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className="w-8 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Learn More</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- HOW IT WORKS SECTION UPGRADE END --- */}

      {/* Keeping Benefits & Form Split Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-neutral-50/50">

        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          {/* Animated Blob */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px] mix-blend-multiply"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-pink-100/50 rounded-full blur-[120px] mix-blend-multiply"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">

          {/* Left Side: Copy & Benefits Grid */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold mb-10 shadow-xl shadow-black/10 border border-neutral-800">
                <Sparkles size={12} className="text-yellow-400" />
                <span className="tracking-wide uppercase">Limited Founder's Offer</span>
              </div>

              <h2 className="text-6xl md:text-7xl font-bold mb-8 text-black tracking-tighter leading-[0.9]">
                Why join the <br />
                <span className="font-serif italic font-light text-neutral-400 relative inline-block">
                  waitlist?
                  {/* Underline specific to hero style */}
                  <span className="absolute bottom-2 left-0 w-full h-1 bg-black rounded-full opacity-10"></span>
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-neutral-500 mb-16 max-w-lg leading-relaxed font-light">
                Secure your future for less than the price of a movie ticket. <br /><span className="text-black font-medium border-b border-black/20">Lifetime value</span> and priority access.
              </p>
            </motion.div>

            {/* Interactive Benefits Grid */}
            <div className="grid sm:grid-cols-1 gap-5">
              {[
                { text: "Early Bird Price — ₹999", sub: "Regular Price ₹1,500", icon: Gift, highlight: true },
                { text: "Priority Access", sub: "Get in before the public launch", icon: Rocket, highlight: false },
                { text: "Career Starter Kit", sub: "Worth ₹2,500 (Free for you)", icon: Shield, highlight: false },
                { text: "Scholarship Eligible", sub: "Chance to win 100% scholarship", icon: Star, highlight: false }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-default flex items-center gap-6 overflow-hidden ${item.highlight ? 'bg-neutral-950 border-neutral-950 shadow-2xl shadow-neutral-900/30' : 'bg-white/60 backdrop-blur-md border-neutral-200/60 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-200/40 hover:-translate-y-1'}`}
                >
                  {/* Hover Gradient for non-highlight items */}
                  {!item.highlight && <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>}

                  <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 shadow-sm ${item.highlight ? 'bg-neutral-800 text-white' : 'bg-white text-neutral-900 shadow-[0_2px_10px_rgba(0,0,0,0.05)]'}`}>
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>

                  <div className="relative z-10">
                    <h4 className={`text-lg font-bold leading-tight mb-1 ${item.highlight ? 'text-white' : 'text-neutral-900'}`}>{item.text}</h4>
                    <p className={`text-sm ${item.highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>{item.sub}</p>
                  </div>

                  {/* Checkmark */}
                  <div className={`ml-auto relative z-10 ${item.highlight ? 'text-green-400' : 'text-neutral-300 group-hover:text-black transition-colors'}`}>
                    <CheckCircle2 size={24} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Floating Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000"
          >
            {/* 3D Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-8 z-20 bg-white p-4 rounded-2xl shadow-2xl shadow-black/10 border border-neutral-100 hidden md:block"
            >
              <div className="bg-green-100 p-3 rounded-xl">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-12 z-20 bg-white p-4 rounded-2xl shadow-2xl shadow-black/10 border border-neutral-100 hidden md:block"
            >
              <div className="bg-blue-100 p-3 rounded-xl">
                <Users size={32} className="text-blue-600" />
              </div>
              <div className="text-xs font-bold text-center mt-2">1000+<br />Joined</div>
            </motion.div>


            {/* Ambient Glow Behind Form */}
            <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-3xl opacity-50"></div>

            <div className="relative bg-white/80 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.15)] border border-white/60 ring-1 ring-black/5 overflow-hidden group/card">

              {/* Border Beam Effect */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-black/20 to-transparent -translate-x-full group-hover/card:animate-shimmer-fast"></div>

              {/* Card Header */}
              <div className="text-center mb-10 relative z-10">
                <div className="inline-flex items-center gap-2 mb-4 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest border border-green-200/50 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  Waitlist Active
                </div>
                <h3 className="text-4xl font-bold text-black tracking-tight mb-3">Secure Your Spot</h3>
                <p className="text-neutral-500 text-base">Join <span className="font-bold text-black border-b border-black">1,024+ students</span> upgrading their career.</p>
              </div>

              {/* Form Fields */}
              <form className="space-y-5 relative z-10">
                <div className="space-y-4">
                  {[
                    { label: "Full Name", placeholder: "Nihal Sharma", type: "text", icon: Users },
                    { label: "Email Address", placeholder: "nihal@example.com", type: "email", icon: Gift }
                  ].map((field, i) => (
                    <div key={i} className="group relative">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-black transition-colors z-10">
                        <field.icon size={20} />
                      </div>
                      <input
                        type={field.type}
                        className="w-full pl-14 pr-5 py-5 rounded-2xl bg-neutral-50 border-2 border-transparent focus:border-black/5 hover:bg-neutral-100 focus:bg-white outline-none transition-all duration-300 shadow-sm text-base font-medium placeholder:text-neutral-400 ring-1 ring-transparent focus:ring-black/5"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="group relative">
                      <input
                        type="tel"
                        className="w-full px-5 py-5 rounded-2xl bg-neutral-50 border-2 border-transparent focus:border-black/5 hover:bg-neutral-100 focus:bg-white outline-none transition-all duration-300 shadow-sm text-base font-medium placeholder:text-neutral-400 ring-1 ring-transparent focus:ring-black/5"
                        placeholder="+91 Phone"
                      />
                    </div>
                    <div className="relative group">
                      <select className="w-full px-5 py-5 rounded-2xl bg-neutral-50 border-2 border-transparent focus:border-black/5 hover:bg-neutral-100 focus:bg-white outline-none transition-all duration-300 shadow-sm text-base font-medium text-neutral-600 appearance-none ring-1 ring-transparent focus:ring-black/5 cursor-pointer">
                        <option>13-16 Years</option>
                        <option>17-22 Years</option>
                        <option>23+ Years</option>
                      </select>
                      <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 rotate-90 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-black text-white font-bold py-6 rounded-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-2xl shadow-black/20 mt-4 flex items-center justify-center gap-3 overflow-hidden group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-black opacity-100 group-hover:opacity-90 transition-opacity"></div>
                  {/* Shine Effect */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

                  <span className="relative z-10 flex items-center gap-2 text-lg tracking-wide">
                    Join Waitlist — ₹999 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <div className="flex items-center justify-center gap-2 mt-8 opacity-60 hover:opacity-100 transition-opacity cursor-help">
                  <Shield size={14} />
                  <span className="text-[11px] font-bold uppercase tracking-widest">100% Spam-Free Guarantee</span>
                </div>
              </form>
            </div>

          </motion.div>

        </div>
      </section>

      {/* Keeping Timeline Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-black">What happens after you join?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 shadow-sm relative overflow-hidden group hover:border-neutral-300 transition-colors">
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap size={40} className="text-black" />
              </div>
              <div className="text-black font-bold mb-2 text-sm uppercase tracking-wider">Instantly</div>
              <h4 className="font-bold text-lg mb-2 text-black">Confirmation</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">You receive your Early Bird status and free starter kit PDF via email.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 shadow-sm relative overflow-hidden group hover:border-neutral-300 transition-colors">
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users size={40} className="text-black" />
              </div>
              <div className="text-black font-bold mb-2 text-sm uppercase tracking-wider">Feb 13, 6 PM</div>
              <h4 className="font-bold text-lg mb-2 text-black">Masterclass</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">Exclusive invite to "From Confusion to Clarity" live session.</p>
            </div>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 shadow-sm relative overflow-hidden group border-b-4 border-b-black hover:border-neutral-300 hover:border-b-black transition-colors">
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                <Rocket size={40} className="text-black" />
              </div>
              <div className="text-neutral-500 font-bold mb-2 text-sm uppercase tracking-wider">Feb 14 (Launch)</div>
              <h4 className="font-bold text-lg mb-2 text-black">Access</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">Get your access link. Start assessment before public users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Keeping Scholarship Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-black text-white p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Can't afford ₹999? We've got you.</h2>
            <p className="text-neutral-300 mb-10 max-w-xl mx-auto text-lg">We believe money shouldn't decide your future. We offer 25-100% scholarships for students in need.</p>
            <button className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded-full text-sm font-bold transition-all backdrop-blur-md flex items-center gap-2 mx-auto">
              <Sparkles size={16} /> Apply for Scholarship
            </button>
          </div>
          {/* Background pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute right-0 top-0 w-96 h-96 bg-neutral-800 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-neutral-800 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL SECTION --- */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Heart size={14} className="text-red-500 fill-red-500" />
              Community Love
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black tracking-tight">Don't just take our word for it.</h2>
            <p className="text-lg text-neutral-500">Join thousands of students who found clarity.</p>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="min-w-[320px] md:min-w-[400px] bg-neutral-50 p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-neutral-100 snap-center flex flex-col items-center text-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 transform hover:-translate-y-2">

                <p className="text-neutral-600 leading-relaxed mb-8 text-lg font-light">
                  "{t.text}"
                </p>

                <div className="flex gap-1.5 mb-8">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} size={18} fill="black" className="text-black" />
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={t.img}
                    alt={t.author}
                    className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white shadow-md"
                  />
                  <div className="text-left">
                    <div className="font-bold text-black text-lg">{t.author}</div>
                    <div className="text-xs text-neutral-400 font-bold uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-neutral-600 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-neutral-100 hover:bg-black hover:text-white text-neutral-600 flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
      {/* --- TESTIMONIAL SECTION END --- */}

      {/* Keeping Footer CTA Section */}
      <section className="py-24 px-6 bg-white text-black text-center border-t border-neutral-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-100 via-white to-white"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Your future won't wait. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-black">Neither should you.</span></h2>
          <p className="text-neutral-500 mb-10 max-w-xl mx-auto text-lg">Lock the ₹999 price · Get early access · Discover your direction</p>
          <button className="bg-black text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-neutral-800 hover:scale-105 transition-all shadow-xl">
            🎯 Join the Waitlist Now
          </button>
          <div className="mt-16 text-neutral-500 text-sm flex items-center justify-center gap-6">
            <span>Launching Feb 14</span>
            <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
            <span>Built in India 🇮🇳</span>
            <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
            <span>For Indian Students</span>
          </div>
        </div>
      </section>

    </div >
  );
};