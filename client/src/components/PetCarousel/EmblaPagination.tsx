import React from 'react';

interface EmblaPaginationProps {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotClick: (index: number) => void;
}

export const EmblaPagination: React.FC<EmblaPaginationProps> = ({
  selectedIndex,
  scrollSnaps,
  onDotClick
}) => {
  const totalSlides = scrollSnaps.length;
  const currentSlide = selectedIndex + 1;

  if (totalSlides <= 1) return null;

  return (
    <div className="flex flex-col items-center mt-6 gap-4">
      <div className="text-purple-600 font-medium">
        {currentSlide} • {totalSlides}
      </div>

      <div className="flex gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-200
              ${index === selectedIndex
                ? 'bg-purple-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};