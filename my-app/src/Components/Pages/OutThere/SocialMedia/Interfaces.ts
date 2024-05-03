export interface SocialMediaPost {
  id: string;
  type: 'facebook' | 'instagram' | 'youtube';
  embedUrl: string;
  description?: string;
};