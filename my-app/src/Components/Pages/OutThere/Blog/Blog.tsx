import React from 'react';
import BlogArticle from './BlogArticle'; // Adjust the import path as needed
import testImage from '../../../../images/danglingfeetlandscape.jpg';

const Blog: React.FC = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden bg-dutch-wine">
            {/* container and other setup */}
            <div className='container px-5 py-24 mx-auto'>
              <BlogArticle 
                  title="Example Title"
                  date="Example Date"
                  summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed nisi facilisis, scelerisque erat non, vulputate est. Sed eu eros sem. Nulla vestibulum, felis nec molestie suscipit, libero erat feugiat nisl, eu posuere elit leo vitae purus. Nullam aliquet velit diam, at accumsan orci iaculis eu. Sed elit tellus, aliquet eu efficitur at, lobortis aliquet massa. Donec porta suscipit elit, tristique egestas quam sagittis sed. Donec a leo pulvinar neque rhoncus tristique non sit amet tellus. Integer tempus elementum tincidunt. Nulla malesuada metus id euismod auctor. Sed eget facilisis massa, quis scelerisque justo. Curabitur lectus orci, elementum sed sem eget, faucibus scelerisque elit. Nam ut ullamcorper urna, id pharetra massa. Quisque ipsum nunc, lobortis lobortis odio vitae, accumsan volutpat nunc. Donec sagittis ac velit in pharetra. Quisque vulputate libero a mattis consequat. Ut blandit id purus eu faucibus."
                  imagePath={testImage}
                  articlePath="/example-path"
              />
              {/* More BlogArticle components as needed */}
            </div>
        </section>
    );
};

export default Blog;

