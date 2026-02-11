import React, { useState } from 'react';
import { PostContent, Platform } from '../types';
import { Copy, Share2, MessageCircle, Heart, Repeat, Bookmark, MoreHorizontal, ArrowBigUp } from 'lucide-react';
import { generateBonusHook } from '../services/geminiService';

interface PostCardProps {
  post: PostContent;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [bonusHooks, setBonusHooks] = useState<string[]>([]);
  const [loadingHooks, setLoadingHooks] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const fetchBonusHooks = async () => {
    setLoadingHooks(true);
    const hooks = await generateBonusHook(post.platform, post.hook + " " + post.body.substring(0, 50));
    setBonusHooks(hooks);
    setLoadingHooks(false);
  };

  const renderPlatformIcon = () => {
    switch (post.platform) {
      case Platform.LINKEDIN: return <div className="bg-[#0077b5] text-white p-1 rounded">in</div>;
      case Platform.INSTAGRAM: return <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">Ig</div>;
      case Platform.TWITTER: return <div className="bg-black text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs">X</div>;
      case Platform.REDDIT: return <div className="bg-[#ff4500] text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">r/</div>;
    }
  };

  const cardStyle = () => {
    switch (post.platform) {
      case Platform.LINKEDIN:
        return "bg-white border border-gray-200 rounded-lg shadow-sm font-sans";
      case Platform.INSTAGRAM:
        return "bg-white border border-gray-200 rounded-xl shadow-sm max-w-sm mx-auto font-sans";
      case Platform.TWITTER:
        return "bg-black text-white border border-gray-800 rounded-xl shadow-sm font-sans";
      case Platform.REDDIT:
        return "bg-white border border-gray-300 rounded-md shadow-sm font-sans";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Platform Preview Card */}
      <div className={`${cardStyle()} p-0 overflow-hidden relative group transition-all duration-300 hover:shadow-md`}>
        
        {/* Header */}
        <div className={`p-4 flex items-center justify-between ${post.platform === Platform.TWITTER ? 'border-b border-gray-800' : 'border-b border-gray-100'}`}>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center text-gray-500 text-xs">IMG</div>
             <div>
                <p className={`font-bold text-sm ${post.platform === Platform.TWITTER ? 'text-white' : 'text-gray-900'}`}>
                   {post.platform === Platform.REDDIT ? 'u/WeKIT_Official' : 'We-KIT Founder'}
                </p>
                <p className={`text-xs ${post.platform === Platform.TWITTER ? 'text-gray-500' : 'text-gray-500'}`}>
                  {post.platform === Platform.LINKEDIN ? 'Founder @ We-KIT • 2h' : 
                   post.platform === Platform.INSTAGRAM ? 'Original Audio' :
                   post.platform === Platform.REDDIT ? 'posted by u/founder 4h ago' : '@wekit_app'}
                </p>
             </div>
          </div>
          <MoreHorizontal size={16} className="text-gray-400" />
        </div>

        {/* Content */}
        <div className="p-4">
           {post.title && (
             <h3 className={`font-bold text-lg mb-2 ${post.platform === Platform.TWITTER ? 'text-white' : 'text-gray-900'}`}>{post.title}</h3>
           )}
           
           {post.imagePlaceholder && (
             <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4 text-center text-gray-500 text-sm italic">
               📷 {post.imagePlaceholder}
             </div>
           )}

           <div className={`whitespace-pre-wrap text-sm leading-relaxed ${post.platform === Platform.TWITTER ? 'text-gray-200' : 'text-gray-800'}`}>
             <span className="font-semibold block mb-2">{post.hook}</span>
             {post.body}
             {post.hashtags && post.hashtags.length > 0 && (
               <div className={`mt-3 ${post.platform === Platform.TWITTER ? 'text-blue-400' : 'text-blue-600'}`}>
                 {post.hashtags.join(' ')}
               </div>
             )}
           </div>

           {post.cta && (
             <div className={`mt-4 p-2 text-xs rounded ${post.platform === Platform.TWITTER ? 'bg-gray-900 text-gray-400 border border-gray-800' : 'bg-blue-50 text-blue-800'}`}>
               🎯 <strong>CTA:</strong> {post.cta}
             </div>
           )}
        </div>

        {/* Footer Actions (Simulated) */}
        <div className={`p-3 flex items-center justify-between ${post.platform === Platform.TWITTER ? 'border-t border-gray-800 text-gray-500' : 'border-t border-gray-100 text-gray-500'}`}>
           {post.platform === Platform.LINKEDIN && (
             <>
               <span className="flex items-center gap-1 text-xs"><Heart size={14}/> Like</span>
               <span className="flex items-center gap-1 text-xs"><MessageCircle size={14}/> Comment</span>
               <span className="flex items-center gap-1 text-xs"><Repeat size={14}/> Repost</span>
               <span className="flex items-center gap-1 text-xs"><Share2 size={14}/> Send</span>
             </>
           )}
           {post.platform === Platform.INSTAGRAM && (
             <div className="flex justify-between w-full">
               <div className="flex gap-4">
                 <Heart size={20} className="hover:text-red-500"/>
                 <MessageCircle size={20}/>
                 <Share2 size={20}/>
               </div>
               <Bookmark size={20}/>
             </div>
           )}
           {post.platform === Platform.TWITTER && (
              <>
               <MessageCircle size={16}/>
               <Repeat size={16}/>
               <Heart size={16}/>
               <Share2 size={16}/>
              </>
           )}
           {post.platform === Platform.REDDIT && (
              <div className="flex items-center gap-4 bg-gray-100 rounded-full px-2 py-1">
                 <ArrowBigUp size={20}/>
                 <span className="text-sm font-bold text-gray-700">Vote</span>
                 <MessageCircle size={16} className="ml-2"/>
                 <span className="text-xs font-bold text-gray-500">Comments</span>
              </div>
           )}
        </div>

        {/* Real Utility Buttons Overlay */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
           <button 
             onClick={() => handleCopy(`${post.title ? post.title + '\n\n' : ''}${post.hook}\n\n${post.body}\n\n${post.cta}`)}
             className="bg-white text-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-50 border border-gray-200"
             title="Copy Text"
           >
             <Copy size={14} />
           </button>
        </div>
      </div>

      {/* Bonus Hook Generator */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
         <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide">AI Strategy Assist</h4>
            <button 
              onClick={fetchBonusHooks} 
              disabled={loadingHooks}
              className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded hover:bg-indigo-200 disabled:opacity-50 transition-colors"
            >
              {loadingHooks ? "Generating..." : "✨ Generate Alt Hooks"}
            </button>
         </div>
         
         {bonusHooks.length > 0 && (
           <div className="space-y-2 mt-2">
             {bonusHooks.map((hook, idx) => (
               <div key={idx} className="bg-white p-2 rounded border border-indigo-100 text-sm text-gray-700 italic border-l-4 border-l-indigo-400">
                 "{hook}"
                 <button onClick={() => handleCopy(hook)} className="float-right text-gray-400 hover:text-indigo-600">
                   <Copy size={12}/>
                 </button>
               </div>
             ))}
           </div>
         )}
         {bonusHooks.length === 0 && !loadingHooks && (
            <p className="text-xs text-slate-400">Need a fresh angle? Click generate to get alternative hooks using Gemini.</p>
         )}
      </div>
    </div>
  );
};

export default PostCard;
