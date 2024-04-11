import React from 'react';

interface BlogArticleProps {
    title: string;
    date: string;
    summary: string;
    imagePath: string;
    articlePath: string;
}

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

const BlogArticle: React.FC<BlogArticleProps> = ({ title, date, summary, imagePath, articlePath }) => {
  return (
      <div className="py-8 flex flex-wrap md:flex-nowrap">
          {/* Image block */}
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <img src={imagePath} alt="Blog" className="object-cover object-center w-full h-full rounded-lg" />
              <span className="mt-1 text-gray-500 text-sm pt-4">{date}</span>
          </div>
          {/* Content block */}
          <div className="md:flex-grow px-4">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
              <p className="leading-relaxed">{truncateText(summary, 50)}</p> {/* Apply truncate function here */}
              <a href={articlePath} className="text-indigo-500 inline-flex items-center mt-4">Learn More
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                  </svg>
              </a>
          </div>
      </div>
  );
};


export default BlogArticle;
