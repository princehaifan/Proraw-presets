
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-gray-900/70 flex flex-col items-center justify-center z-40">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-400"></div>
      <p className="mt-4 text-lg font-semibold text-white">Applying AI Preset...</p>
      <p className="text-sm text-gray-400">This may take a moment.</p>
    </div>
  );
};

export default Loader;
