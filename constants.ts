import { Platform, LaunchPhase, PostContent } from './types';

export const LAUNCH_DATE = "February 14, 2025";
export const CORE_NARRATIVE = "Fall in love with your future. Discover careers that fit who you actually are.";

export const INITIAL_POSTS: PostContent[] = [
  // --- LINKEDIN ---
  {
    id: 'li-pre-1',
    platform: Platform.LINKEDIN,
    phase: LaunchPhase.PRE_LAUNCH,
    hook: "The most expensive mistake in India isn't a lavish wedding. It's a 4-year engineering degree for a poet.",
    body: `We push our 17-year-olds into boxes—Engineering, Medicine, CA—before we ever ask them who they are.\n\nI’ve spent the last 6 months building We-KIT not to add to the noise, but to filter it. We’re using actual psychometrics (not just 'interest checks') to match students with careers that align with their core personality.\n\nSelf-awareness > Scope.\n\nLaunching Feb 14. Because you should love your future.`,
    cta: "Comment 'Interested' to get early access to the beta.",
    hashtags: ['#EdTech', '#CareerDiscovery', '#WeKIT', '#ParentingIndia']
  },
  {
    id: 'li-pre-2',
    platform: Platform.LINKEDIN,
    phase: LaunchPhase.PRE_LAUNCH,
    hook: "Your career isn't a race to be won. It's a home you have to live in.",
    body: `We treat career counseling like a competitive exam prep. 'Which field pays the most?' 'Where is the status?'\n\nBut at We-KIT, we are asking different questions:\n- What flows naturally to you?\n- What problems do you enjoy solving?\n- Where do you feel most like yourself?\n\nIf we fix the input (the choice), we fix the output (the career satisfaction).`,
    cta: "Follow We-KIT for insights on the new era of work.",
    hashtags: ['#CareerGuidance', '#FutureOfWork', '#MentalHealth']
  },
  {
    id: 'li-pre-3',
    platform: Platform.LINKEDIN,
    phase: LaunchPhase.PRE_LAUNCH,
    hook: "We built an AI that doesn't just give answers. It asks the right questions.",
    body: `Most AI tools today are about speed. We-KIT is about depth.\n\nWe trained our model to act like an empathetic counselor, not a search engine. It understands the nuance of Indian family pressure, the fear of missing out, and the confusion of choice.\n\nIt’s almost ready.`,
    cta: "Join the waitlist (Link in bio).",
    hashtags: ['#AIforGood', '#StartupIndia', '#Psychometrics']
  },
  {
    id: 'li-launch',
    platform: Platform.LINKEDIN,
    phase: LaunchPhase.LAUNCH_DAY,
    hook: "This Valentine's Day, don't just look for love. Look for purpose.",
    body: `Today, we are launching We-KIT to the world.\n\nIt is a psychometric career discovery platform designed for the Indian context. No jargon, no impossible promises. just a clear mirror to show you who you are and where you fit.\n\nFor every student who feels lost in the crowd: this is for you.\nFor every parent who wants their child to be happy, not just 'settled': this is for you.`,
    cta: "Try We-KIT for free today. Link in comments.",
    hashtags: ['#LaunchDay', '#WeKIT', '#ValentinesDay', '#CareerLove']
  },
  {
    id: 'li-post',
    platform: Platform.LINKEDIN,
    phase: LaunchPhase.POST_LAUNCH,
    hook: "1,000 students found their match in 24 hours. The data is telling us something fascinating.",
    body: `The most common result wasn't 'Software Engineer'. It was 'Creative Strategist' and 'Environmental Data Analyst'.\n\nIndian students are ready to explore. They just needed a map. We-KIT is proud to be that map.\n\nTo everyone who supported our launch: Thank you. We are just getting started.`,
    cta: "What's the most surprising career path you've heard of? Let me know below.",
    hashtags: ['#DataInsights', '#CareerTrends', '#ThankYou']
  },

  // --- INSTAGRAM ---
  {
    id: 'ig-pre-1',
    platform: Platform.INSTAGRAM,
    phase: LaunchPhase.PRE_LAUNCH,
    imagePlaceholder: "A split screen. Left: Stressed student with textbooks. Right: Happy student sketching on an iPad.",
    hook: "POV: You finally stopped trying to be Sharma ji's son.",
    body: `It’s okay if you hate coding. \nIt’s okay if biology makes you dizzy.\n\nYour superpower is somewhere else. We’re here to help you find it.\n\nWe-KIT drops in 3 days. 🚀`,
    cta: "Share this to your story if you're done with the pressure.",
    hashtags: ['#StudentLife', '#CareerGoals', '#NoPressure', '#WeKIT']
  },
  {
    id: 'ig-pre-2',
    platform: Platform.INSTAGRAM,
    phase: LaunchPhase.PRE_LAUNCH,
    imagePlaceholder: "Simple graphic: 'Medicine? Engineering? Law? 🤷‍♂️'",
    hook: "Confused? Good. That means you're thinking.",
    body: `Confusion isn't a weakness. It's the first step to clarity.\n\nMost people just follow the herd. You are stopping to ask directions. That puts you ahead.\n\nWait for Feb 14. We have the map.`,
    cta: "Save this post as a reminder to trust yourself.",
    hashtags: ['#CareerAdvice', '#TeenLife', '#TrustTheProcess']
  },
  {
    id: 'ig-pre-3',
    platform: Platform.INSTAGRAM,
    phase: LaunchPhase.PRE_LAUNCH,
    imagePlaceholder: "A phone notification mockup: 'We-KIT: You have a new career match ❤️'",
    hook: "The only match that matters this Valentine's.",
    body: `Forget dates. Fall in love with a future that actually excites you.\n\nWe-KIT uses psychology + AI to find careers that fit your vibe.\n\nLaunch is tomorrow!`,
    cta: "Turn on post notifications 🔔",
    hashtags: ['#ValentinesDay', '#SelfLove', '#FutureReady']
  },
  {
    id: 'ig-launch',
    platform: Platform.INSTAGRAM,
    phase: LaunchPhase.LAUNCH_DAY,
    imagePlaceholder: "Photo of a person holding a phone looking relieved/happy with the We-KIT logo overlay.",
    hook: "We are LIVE! 🟢 Fall in love with your future today.",
    body: `We-KIT is finally here.\n\nTake the discovery test. Find your strengths. Build a career that feels like play.\n\nLink in bio to start your journey.`,
    cta: "Tag a friend who needs this right now.",
    hashtags: ['#JustLaunched', '#CareerDiscovery', '#India']
  },
  {
    id: 'ig-post',
    platform: Platform.INSTAGRAM,
    phase: LaunchPhase.POST_LAUNCH,
    imagePlaceholder: "Carousel of 3 user testimonials/DMs saying 'This changed my mind!'",
    hook: "Y'all are crying in our DMs and we love it. 😭❤️",
    body: `The response has been insane. Seeing you guys discover paths like 'Game Design' or 'Ethical Hacking' and realizing it's POSSIBLE... that's why we built this.\n\nKeep the stories coming.`,
    cta: "Have you tried We-KIT yet? DM us your result!",
    hashtags: ['#CommunityLove', '#StudentVoices', '#Impact']
  },

  // --- TWITTER ---
  {
    id: 'tw-pre-1',
    platform: Platform.TWITTER,
    phase: LaunchPhase.PRE_LAUNCH,
    hook: "Day 12 building We-KIT.",
    body: `Most career tests are just horoscopes with a better UI. "You like talking? Be a lawyer!" 🙄\n\nWe're going deeper. Big 5 Personality traits mapped to real-world Indian career demand.\n\nNo fluff. Just data.\n\n#buildinpublic #edtech`,
    cta: "Drop a 👋 if you've ever taken a useless career test.",
    hashtags: []
  },
  {
    id: 'tw-pre-2',
    platform: Platform.TWITTER,
    phase: LaunchPhase.PRE_LAUNCH,
    hook: "Unpopular opinion: The 'Scope' of a field doesn't matter if you are mediocre at it.",
    body: `You can be a broke engineer or a wealthy graphic designer.\n\nExcellence pays. Mediocrity doesn't.\n\nWe-KIT helps you find where you can be excellent.\n\n2 days to launch.`,
    cta: "",
    hashtags: ['#CareerAdvice', '#India']
  },
  {
    id: 'tw-pre-3',
    platform: Platform.TWITTER,
    phase: LaunchPhase.PRE_LAUNCH,
    hook: "Shipping the final build tonight.",
    body: `Nervous? Yes.\nExcited? Also yes.\n\nWe-KIT is my love letter to every Indian student who was told "Engineering karlo, life set hai" (Do engineering, life is set).\n\nLife is set when you love what you do.\n\nSee you tomorrow.`,
    cta: "",
    hashtags: ['#ShipIt']
  },
  {
    id: 'tw-launch',
    platform: Platform.TWITTER,
    phase: LaunchPhase.LAUNCH_DAY,
    hook: "We-KIT is live. 🚀",
    body: `Fall in love with your future.\n\nDiscover careers that fit your personality, not just your marks.\n\nTry it here: [Link]\n\nRetweets appreciated! Let's help some confused students today.`,
    cta: "",
    hashtags: ['#ProductLaunch', '#ValentinesDay']
  },
  {
    id: 'tw-post',
    platform: Platform.TWITTER,
    phase: LaunchPhase.POST_LAUNCH,
    hook: "24 hours in. 1 server crash. 500+ signups.",
    body: `The best part? The feedback.\n\n"I didn't know this existed" is the best thing a founder can hear.\n\nWe are fixing bugs and rolling out more career paths this week.\n\nThanks for the trust.`,
    cta: "",
    hashtags: ['#buildinpublic', '#startup']
  },

  // --- REDDIT ---
  {
    id: 'rd-pre-1',
    platform: Platform.REDDIT,
    phase: LaunchPhase.PRE_LAUNCH,
    title: "I built a tool to help Indian students avoid the 'Sharma ji ka beta' trap. No promo, just thoughts.",
    hook: "Hey r/IndianTeenagers,",
    body: `I've been working in edtech for 5 years and I'm tired of seeing students pushed into careers they hate. I'm building a platform called We-KIT that uses psychometrics to find your actual fit.\n\nIt's launching this week. I'm not asking you to buy anything. I just want to know: What's the worst career advice you've ever received from a relative?`,
    cta: "Let's vent in the comments.",
    hashtags: []
  },
  {
    id: 'rd-pre-2',
    platform: Platform.REDDIT,
    phase: LaunchPhase.PRE_LAUNCH,
    title: "Why are we still obsessed with 'Scope'?",
    hook: "Honest question.",
    body: `Does anyone actually know what 'Scope' means? It usually just means 'what paid well 10 years ago'.\n\nI'm launching a career discovery tool on Feb 14 (ironic, I know) that focuses on FIT instead of scope. Because if you're good at something, you create your own scope.\n\nAgree/Disagree?`,
    cta: "",
    hashtags: []
  },
  {
    id: 'rd-pre-3',
    platform: Platform.REDDIT,
    phase: LaunchPhase.PRE_LAUNCH,
    title: "AMA: I'm a career strategist launching an AI tool. Ask me anything about 'future proof' careers.",
    hook: "The job market is changing fast.",
    body: `AI is eating entry-level jobs. But it's creating new ones too. I've analyzed data on 50+ emerging career paths for my new platform We-KIT.\n\nAsk me about a specific field and I'll tell you if it's dying or thriving based on the data I have.`,
    cta: "",
    hashtags: []
  },
  {
    id: 'rd-launch',
    platform: Platform.REDDIT,
    phase: LaunchPhase.LAUNCH_DAY,
    title: "It’s Valentine’s Day. I made something for your career instead of your love life.",
    hook: "Hey everyone,",
    body: `We-KIT is finally live. It's a free-to-try psychometric tool specifically for Indian students.\n\nIt’s not perfect, but it’s honest. It won’t tell you to be an astronaut if you hate math. \n\nGive it a spin and roast my UI in the comments? I need the feedback.`,
    cta: "[Link to We-KIT]",
    hashtags: []
  },
  {
    id: 'rd-post',
    platform: Platform.REDDIT,
    phase: LaunchPhase.POST_LAUNCH,
    title: "Update: You guys crashed my server.",
    hook: "Wow.",
    body: `I posted about We-KIT yesterday and the traffic from Reddit was insane. Thank you.\n\nA lot of you asked for more 'Arts' and 'Humanities' careers. We hear you. I'm spending the weekend adding 20+ new non-STEM paths.\n\nKeep the feedback coming. You guys are building this with me.`,
    cta: "",
    hashtags: []
  },
];
