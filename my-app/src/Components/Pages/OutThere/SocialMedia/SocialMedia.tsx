import React from 'react';
import SocialMediaGrid from './SocialMediaGrid';
import { SocialMediaPost } from './Interfaces';

const socialPosts: SocialMediaPost[] = [
  { id: '1', type: 'facebook', embedUrl: 'https://www.facebook.com/photo/?fbid=463037146073263&set=a.226939313016382', description: 'Check out our Facebook post!' },
  { id: '2', type: 'instagram', embedUrl: 'https://www.instagram.com/affinitymentorshipfoundation/p/C6W_CY1yi5H/?hl=en', description: 'Our latest Instagram photo!' },
  { id: '3', type: 'youtube', embedUrl: 'https://www.youtube.com/watch?v=mqzhfg0jkfA', description: 'Learn more about AMF!' },
];

const SocialMedia: React.FC = () => {
    return (
        <div>
            <main className="social-media-content container mx-auto mt-10">
              <SocialMediaGrid posts={socialPosts} />
            </main>
        </div>
    );
};

export default SocialMedia;
