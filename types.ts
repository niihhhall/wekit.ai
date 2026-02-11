export enum Platform {
  LINKEDIN = 'LinkedIn',
  INSTAGRAM = 'Instagram',
  TWITTER = 'Twitter',
  REDDIT = 'Reddit'
}

export enum LaunchPhase {
  PRE_LAUNCH = 'Pre-Launch',
  LAUNCH_DAY = 'Launch Day',
  POST_LAUNCH = 'Post-Launch'
}

export interface PostContent {
  id: string;
  platform: Platform;
  phase: LaunchPhase;
  title?: string; // For Reddit mostly
  hook: string;
  body: string;
  cta: string;
  imagePlaceholder?: string; // For Insta
  hashtags?: string[];
  notes?: string;
}

export interface GenerationRequest {
  platform: Platform;
  topic: string;
  tone: string;
}