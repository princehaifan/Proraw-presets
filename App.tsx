
import React, { useState, useCallback } from 'react';
import { PRESET_COLLECTIONS } from './constants';
import type { PresetCollection } from './types';
import Header from './components/Header';
import PresetGallery from './components/PresetGallery';
import Editor from './components/Editor';

const App: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState<PresetCollection | null>(null);

  const handleCollectionSelect = useCallback((collection: PresetCollection) => {
    setSelectedCollection(collection);
  }, []);

  const handleBackToGallery = useCallback(() => {
    setSelectedCollection(null);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Header onBack={selectedCollection ? handleBackToGallery : undefined} />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        {!selectedCollection ? (
          <PresetGallery collections={PRESET_COLLECTIONS} onSelect={handleCollectionSelect} />
        ) : (
          <Editor collection={selectedCollection} />
        )}
      </main>
    </div>
  );
};

export default App;
