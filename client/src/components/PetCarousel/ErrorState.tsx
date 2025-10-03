import React from 'react';

interface ErrorStateProps {
  error: string | null;
  onRetry: () => void;
  onChangeLocation: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  error,
  onRetry,
  onChangeLocation
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-8">
      <div className="text-red-500 mb-4">
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
        Oops! Something went wrong
      </h3>

      <p className="text-gray-600 mb-6 text-center max-w-md">
        {error || 'We had trouble loading the pets. Please try again.'}
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={onChangeLocation}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Change Location
        </button>
      </div>
    </div>
  );
};