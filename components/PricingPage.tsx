import React, { useState } from 'react';
import { CheckCircle, X, Sparkles, Heart, Zap, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingPage: React.FC = () => {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

    const tiers = [
        {
            name: 'Free',
            price: { monthly: 0, yearly: 0 },
            description: 'Perfect to get started',
            badge: null,
            features: [
                { text: 'Basic career assessment', included: true },
                { text: '5 career matches', included: true },
                { text: 'Community access', included: true },
                { text: 'Email support', included: true },
                { text: 'Detailed reports', included: false },
                { text: 'Personalized roadmaps', included: false },
                { text: 'Priority support', included: false },
            ],
            cta: 'Get Started',
            ctaStyle: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200',
            link: '/signup',
        },
        {
            name: 'Early Bird',
            price: { monthly: 999, yearly: 9990 },
            description: 'Launch special - Limited time',
            badge: 'Best Value',
            features: [
                { text: 'Complete psychometric assessment', included: true },
                { text: '50+ career paths matched', included: true },
                { text: 'Detailed personality reports', included: true },
                { text: 'Personalized career roadmaps', included: true },
                { text: 'Skills gap analysis', included: true },
                { text: 'Career Starter Kit PDF', included: true },
                { text: 'Priority email support', included: true },
                { text: 'Pre-launch masterclass access', included: true },
            ],
            cta: 'Join Waitlist - ₹999',
            ctaStyle: 'bg-black text-white hover:bg-neutral-800 shadow-lg',
            link: '#',
            popular: true,
        },
        {
            name: 'Premium',
            price: { monthly: 1500, yearly: 15000 },
            description: 'For serious career builders',
            badge: null,
            features: [
                { text: 'Everything in Early Bird', included: true },
                { text: '1-on-1 career counseling session', included: true },
                { text: 'Industry mentor connects', included: true },
                { text: 'Resume & LinkedIn review', included: true },
                { text: 'Lifetime updates', included: true },
                { text: 'Priority support (24/7)', included: true },
                { text: 'Exclusive community access', included: true },
            ],
            cta: 'Get Premium',
            ctaStyle: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg',
            link: '#',
        },
    ];

    const faqs = [
        {
            q: 'Can I upgrade later?',
            a: 'Yes! You can upgrade to a higher tier anytime. Your previous payment will be credited.'
        },
        {
            q: 'Do you offer refunds?',
            a: 'We offer a 7-day money-back guarantee if you\'re not satisfied with the service.'
        },
        {
            q: 'What payment methods do you accept?',
            a: 'We accept all major credit/debit cards, UPI, net banking, and wallets.'
        },
        {
            q: 'Is my data secure?',
            a: 'Absolutely. We use bank-grade encryption and never share your data with third parties.'
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gradient-to-b from-neutral-50 to-white pt-20 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6 text-neutral-600 hover:text-black transition-colors">
                        <Heart className="w-5 h-5 fill-black" />
                        <span className="font-bold text-xl">We-KIT</span>
                    </Link>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
                        Choose your path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-black">clarity</span>
                    </h1>
                    <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
                        Invest in your future. Simple pricing with no hidden fees. Early bird pricing available until launch.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 bg-neutral-100 px-2 py-2 rounded-full">
                        <button
                            onClick={() => setBillingPeriod('monthly')}
                            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${billingPeriod === 'monthly' ? 'bg-black text-white shadow-md' : 'text-neutral-600 hover:text-black'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingPeriod('yearly')}
                            className={`px-6 py-2 rounded-full font-semibold text-sm transition-all relative ${billingPeriod === 'yearly' ? 'bg-black text-white shadow-md' : 'text-neutral-600 hover:text-black'}`}
                        >
                            Yearly
                            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                                -17%
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-3 gap-8 -mt-8">
                    {tiers.map((tier, i) => (
                        <div
                            key={i}
                            className={`bg-white rounded-2xl border-2 p-8 relative ${tier.popular
                                    ? 'border-black shadow-2xl scale-105 md:scale-110'
                                    : 'border-neutral-200 shadow-lg hover:shadow-xl'
                                } transition-all duration-300`}
                        >
                            {/* Badge */}
                            {tier.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
                                    {tier.badge}
                                </div>
                            )}

                            {/* Header */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{tier.name}</h3>
                                <p className="text-sm text-neutral-500 mb-6">{tier.description}</p>

                                <div className="flex items-baseline justify-center gap-1 mb-1">
                                    <span className="text-5xl font-bold text-neutral-900">
                                        ₹{tier.price[billingPeriod].toLocaleString('en-IN')}
                                    </span>
                                    {tier.price.monthly > 0 && (
                                        <span className="text-neutral-500">/{billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                                    )}
                                </div>

                                {billingPeriod === 'yearly' && tier.price.yearly > 0 && (
                                    <p className="text-xs text-green-600 font-semibold">
                                        Save ₹{(tier.price.monthly * 12 - tier.price.yearly).toLocaleString('en-IN')} per year
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        {feature.included ? (
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        ) : (
                                            <X className="w-5 h-5 text-neutral-300 flex-shrink-0 mt-0.5" />
                                        )}
                                        <span className={`text-sm ${feature.included ? 'text-neutral-700' : 'text-neutral-400'}`}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                to={tier.link}
                                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${tier.ctaStyle}`}
                            >
                                {tier.cta}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Features Comparison */}
                <div className="mt-20 bg-neutral-50 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-center text-neutral-900 mb-8">
                        All plans include
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Zap, title: 'AI-Powered Matching', desc: 'Advanced algorithms for accurate results' },
                            { icon: Shield, title: 'Data Privacy', desc: 'Your information is 100% secure' },
                            { icon: Sparkles, title: 'Regular Updates', desc: 'New careers & features added monthly' },
                        ].map((feature, i) => (
                            <div key={i} className="text-center">
                                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">{feature.title}</h3>
                                <p className="text-sm text-neutral-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQs */}
                <div className="mt-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-neutral-900 mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 transition-colors">
                                <h3 className="font-bold text-neutral-900 mb-2">{faq.q}</h3>
                                <p className="text-neutral-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-20 bg-gradient-to-r from-black to-neutral-800 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
                    <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
                        We're here to help. Reach out to our team and we'll get back to you within 24 hours.
                    </p>
                    <button className="bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-neutral-100 transition-all shadow-lg">
                        Contact Support
                    </button>
                </div>
            </div>
        </div>
    );
};
