import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './Gallery.css';
import communityEngagment01 from '../../../../images/community-engagement-01.jpg';
import communityEngagment02 from '../../../../images/community-engagement-02.jpg';
import djNight01 from '../../../../images/dj-night-01.jpg';

const Gallery: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  useEffect(() => {
    const updateButtonStates = () => {
      if (!emblaApi) return;
      setPrevBtnDisabled(emblaApi.canScrollPrev() === false);
      setNextBtnDisabled(emblaApi.canScrollNext() === false);
    };

    updateButtonStates();
    if (emblaApi) {
      emblaApi.on('select', updateButtonStates);
      emblaApi.on('init', updateButtonStates);

      // Return a cleanup function that removes the event listeners
      return () => {
        emblaApi.off('select', updateButtonStates);
        emblaApi.off('init', updateButtonStates);
      };
    }
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {[communityEngagment01, communityEngagment02, djNight01].map((src, index) => (
            <div className="embla__slide" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className="embla__image" />
            </div>
          ))}
        </div>
      </div>
      <button
        className="embla__button embla__button--prev"
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        disabled={prevBtnDisabled}
        aria-label="Previous slide"
      >
        &#9664; {/* Left-pointing arrow (Unicode character) */}
      </button>
      <button
        className="embla__button embla__button--next"
        onClick={() => emblaApi && emblaApi.scrollNext()}
        disabled={nextBtnDisabled}
        aria-label="Next slide"
      >
        &#9654; {/* Right-pointing arrow (Unicode character) */}
      </button>

    </div>
  );
};

export default Gallery;
