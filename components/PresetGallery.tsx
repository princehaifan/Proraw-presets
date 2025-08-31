
import React from 'react';
import type { PresetCollection } from '../types';

interface PresetGalleryProps {
  collections: PresetCollection[];
  onSelect: (collection: PresetCollection) => void;
}

const PresetGallery: React.FC<PresetGalleryProps> = ({ collections, onSelect }) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Preset Collections</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
          Browse our curated collections to find the perfect look for your photos.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => onSelect(collection)}
          >
            <img
              src={collection.coverImageUrl}
              alt={collection.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white">{collection.name}</h3>
              <p className="text-gray-300 mt-1">{collection.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresetGallery;
