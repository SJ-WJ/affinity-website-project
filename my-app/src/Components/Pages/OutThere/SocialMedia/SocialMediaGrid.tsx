import React from "react";
import { SocialMediaPost } from "./Interfaces";

interface Props {
  posts: SocialMediaPost[];
}

const SocialMediaGrid: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <div key={post.id} className="rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <iframe src={post.embedUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="w-full h-60"></iframe>
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaGrid;