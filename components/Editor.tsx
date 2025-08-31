
import React, { useState, useCallback, useEffect, useRef } from 'react';
import type { Preset, PresetCollection } from '../types';
import { DEMO_IMAGE_URL } from '../constants';
import { applyPreset } from '../services/geminiService';
import ImagePreview from './ImagePreview';
import PresetStrip from './PresetStrip';
import { UploadIcon, DownloadIcon } from './Icon';
import Loader from './Loader';

// Utility to convert image URL to base64
const toBase64 = async (url: string): Promise<{ base64: string, mimeType: string }> => {
  const response = await fetch(url);
  const blob = await response.blob();
  const mimeType = blob.type;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      if (typeof reader.result !== 'string') {
        return reject(new Error('FileReader did not return a string.'));
      }
      const base64 = reader.result.split(',')[1];
      resolve({ base64, mimeType });
    };
    reader.readAsDataURL(blob);
  });
};


interface EditorProps {
  collection: PresetCollection;
}

const Editor: React.FC<EditorProps> = ({ collection }) => {
  const [originalImage, setOriginalImage] = useState<{ url: string; base64: string; mimeType: string; } | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [activePreset, setActivePreset] = useState<Preset | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loadDemoImage = async () => {
      setIsLoading(true);
      try {
        const { base64, mimeType } = await toBase64(DEMO_IMAGE_URL);
        setOriginalImage({ url: DEMO_IMAGE_URL, base64, mimeType });
      } catch (e) {
        setError('Failed to load demo image.');
      } finally {
        setIsLoading(false);
      }
    };
    loadDemoImage();
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        const base64 = url.split(',')[1];
        setOriginalImage({ url, base64, mimeType: file.type });
        setEditedImage(null);
        setActivePreset(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePresetSelect = useCallback(async (preset: Preset) => {
    if (!originalImage) return;
    setIsLoading(true);
    setError(null);
    setActivePreset(preset);
    try {
      const editedBase64 = await applyPreset(originalImage.base64, originalImage.mimeType, preset.prompt);
      setEditedImage(`data:${originalImage.mimeType};base64,${editedBase64}`);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred';
      setError(errorMessage);
      setEditedImage(null); // Clear previous edit on error
    } finally {
      setIsLoading(false);
    }
  }, [originalImage]);

  const handleDownload = () => {
    if (!editedImage || !activePreset) return;
    const link = document.createElement('a');
    link.href = editedImage;
    const fileExtension = originalImage?.mimeType.split('/')[1] || 'jpeg';
    link.download = `preset-${collection.id}-${activePreset.id}.${fileExtension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  }

  return (
    <div className="flex flex-col h-full gap-8">
       {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg text-center">
          <strong>Error:</strong> {error}
        </div>
      )}
      <div className="relative flex-grow flex items-center justify-center bg-black/30 rounded-lg min-h-[60vh]">
        {isLoading && <Loader />}
        {!originalImage && !isLoading && (
          <div className="text-center">
            <p className="text-gray-400">Loading demo image...</p>
          </div>
        )}
        {originalImage && (
          <ImagePreview
            beforeSrc={originalImage.url}
            afterSrc={editedImage}
          />
        )}
      </div>

      <div className="flex-shrink-0 bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="w-full md:w-auto">
                <h3 className="text-xl font-bold text-center md:text-left">{collection.name}</h3>
                <p className="text-sm text-gray-400 text-center md:text-left">Select a preset to apply</p>
            </div>
            
            <div className="flex-grow w-full max-w-3xl">
              <PresetStrip 
                presets={collection.presets} 
                onSelect={handlePresetSelect} 
                selectedPreset={activePreset}
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto justify-center">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*"
                />
                <button 
                  onClick={triggerFileUpload}
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 disabled:bg-gray-500"
                  disabled={isLoading}
                >
                    <UploadIcon className="w-5 h-5"/>
                    Upload
                </button>
                <button 
                    onClick={handleDownload}
                    disabled={!editedImage || isLoading}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                    <DownloadIcon className="w-5 h-5"/>
                    Export
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
