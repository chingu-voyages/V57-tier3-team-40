import React from 'react';

interface EmblaNavigationProps {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrevClick: () => void;
  onNextClick: () => void;
}

export const EmblaNavigation: React.FC<EmblaNavigationProps> = ({
  canScrollPrev,
  canScrollNext,
  onPrevClick,
  onNextClick
}) => {
  return (
    <>
      <button
        onClick={onPrevClick}
        disabled={!canScrollPrev}
        className={`
          absolute left-2 top-1/2 transform -translate-y-1/2 z-10
          w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
          ${canScrollPrev
            ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
        `}
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={onNextClick}
        disabled={!canScrollNext}
        className={`
          absolute right-2 top-1/2 transform -translate-y-1/2 z-10
          w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
          ${canScrollNext
            ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
        `}
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </>
  );
};