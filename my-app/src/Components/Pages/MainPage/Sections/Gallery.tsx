import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import './Gallery.css';
import communityEngagment01 from '../../../../images/community-engagement-01.jpg';
import communityEngagment02 from '../../../../images/community-engagement-02.jpg';
import djNight01 from '../../../../images/dj-night-01.jpg';

const Gallery: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  // Update button states whenever emblaApi changes
  useEffect(() => {
    const updateButtonStates = () => {
      if (!emblaApi) return; // Ensure emblaApi is not undefined
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };
  
    if (emblaApi) { // Check if emblaApi is not undefined
      updateButtonStates();
      emblaApi.on('select', updateButtonStates);
      emblaApi.on('init', updateButtonStates);
  
      // Cleanup event listeners on component unmount
      return () => {
        if (emblaApi) { // Ensure cleanup code checks for undefined too
          emblaApi.off('select', updateButtonStates);
          emblaApi.off('init', updateButtonStates);
        }
      };
    }
  }, [emblaApi]);
  

  const onPrevButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const PrevButton: React.FC<{ onClick: () => void; disabled: boolean }> = ({ onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled} aria-label="Previous slide">
      {"<"}
    </button>
  );

  const NextButton: React.FC<{ onClick: () => void; disabled: boolean }> = ({ onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled} aria-label="Next slide">
      {">"}
    </button>
  );

  return (
    <div className="embla text-rose-taupe mx-auto mt-12 max-w-lg border h-56" ref={emblaRef}>
      <div className="embla__container h-full">
        <div 
        className="embla__slide"
        style={{
          backgroundImage: `url(${communityEngagment01})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', // Ensure the image is centered
        }}
        />
        <div 
        className="embla__slide"
        style={{
          backgroundImage: `url(${communityEngagment02})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', // Ensure the image is centered
        }}
        />
        <div 
        className="embla__slide"
        style={{
          backgroundImage: `url(${djNight01})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', // Ensure the image is centered
        }}
        />
      </div>

      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

    </div>
  );
};

export default Gallery;
