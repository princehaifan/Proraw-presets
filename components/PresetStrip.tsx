
import React from 'react';
import type { Preset } from '../types';

interface PresetStripProps {
  presets: Preset[];
  onSelect: (preset: Preset) => void;
  selectedPreset: Preset | null;
}

const PresetStrip: React.FC<PresetStripProps> = ({ presets, onSelect, selectedPreset }) => {
  return (
    <div className="overflow-x-auto py-2">
      <div className="flex space-x-4">
        {presets.map((preset) => (
          <div
            key={preset.id}
            onClick={() => onSelect(preset)}
            className="flex-shrink-0 cursor-pointer text-center group"
          >
            <div
              className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                selectedPreset?.id === preset.id ? 'border-indigo-400 scale-105' : 'border-transparent group-hover:border-gray-500'
              }`}
            >
              <img
                src={preset.thumbnailUrl}
                alt={preset.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className={`mt-2 text-xs font-semibold transition-colors duration-200 ${
                selectedPreset?.id === preset.id ? 'text-indigo-400' : 'text-gray-300 group-hover:text-white'
              }`}
            >
              {preset.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresetStrip;
