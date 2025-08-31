
import React from 'react';
import { CameraIcon } from './Icon';

interface HeaderProps {
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBack }) => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {onBack && (
              <button
                onClick={onBack}
                className="mr-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                aria-label="Back to gallery"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            <div className="flex items-center space-x-2">
              <CameraIcon className="h-8 w-8 text-indigo-400" />
              <h1 className="text-xl font-bold text-white tracking-tight">ProRAW Presets</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
