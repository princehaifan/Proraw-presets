
export interface Preset {
  id: string;
  name: string;
  thumbnailUrl: string;
  prompt: string;
}

export interface PresetCollection {
  id: string;
  name: string;
  description: string;
  coverImageUrl: string;
  presets: Preset[];
}
