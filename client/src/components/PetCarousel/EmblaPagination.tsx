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
  if (scrollSnaps.length <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mt-6">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`
            w-3 h-3 rounded-full transition-all duration-300
            ${index === selectedIndex
              ? 'bg-[#104C35] w-8'
              : 'bg-gray-300 hover:bg-gray-400'
            }
          `}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};