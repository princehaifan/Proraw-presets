import type { PresetCollection } from './types';

export const PRESET_COLLECTIONS: PresetCollection[] = [
  {
    id: 'film',
    name: 'Film Collection',
    description: 'Classic film looks with rich tones and beautiful grain.',
    coverImageUrl: 'https://picsum.photos/seed/film/600/400',
    presets: [
      { id: 'film-01', name: 'Vintage Agfa', thumbnailUrl: 'https://picsum.photos/seed/agfa/100/100', prompt: 'Apply a vintage Agfa film look to this image, with warm, slightly desaturated tones, high contrast, and a fine grain.' },
      { id: 'film-02', name: 'Kodak Portra', thumbnailUrl: 'https://picsum.photos/seed/portra/100/100', prompt: 'Emulate the look of Kodak Portra 400 film. Give the image warm undertones, soft contrast, and accurate, beautiful skin tones.' },
      { id: 'film-03', name: 'Cinematic Teal', thumbnailUrl: 'https://picsum.photos/seed/teal/100/100', prompt: 'Give this image a cinematic teal and orange color grade. Push blue tones in the shadows towards teal and skin tones towards orange for a modern movie look.' },
    ],
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    description: 'Timeless black and white conversions with character.',
    coverImageUrl: 'https://picsum.photos/seed/mono/600/400',
    presets: [
      { id: 'mono-01', name: 'High Contrast', thumbnailUrl: 'https://picsum.photos/seed/contrast/100/100', prompt: 'Convert this image to a high-contrast black and white. Make the blacks deep and the whites bright, enhancing texture and form.' },
      { id: 'mono-02', name: 'Soft Sepia', thumbnailUrl: 'https://picsum.photos/seed/sepia/100/100', prompt: 'Convert this image to a soft black and white with a gentle sepia tone for a nostalgic, warm feel.' },
      { id: 'mono-03', name: 'Faded Matte', thumbnailUrl: 'https://picsum.photos/seed/matte/100/100', prompt: 'Create a faded matte black and white look. Lift the black point slightly so there are no true blacks, and reduce the highlights for a soft, dreamy effect.' },
    ],
  },
  {
    id: 'travel',
    name: 'Travel',
    description: 'Vibrant and punchy looks for your adventure photos.',
    coverImageUrl: 'https://picsum.photos/seed/travel/600/400',
    presets: [
        { id: 'travel-01', name: 'Tropical Punch', thumbnailUrl: 'https://picsum.photos/seed/tropical/100/100', prompt: 'Enhance this image with a tropical look. Boost the saturation of blues and greens, add warmth to the highlights, and increase overall vibrancy.' },
        { id: 'travel-02', name: 'Desert Mirage', thumbnailUrl: 'https://picsum.photos/seed/desert/100/100', prompt: 'Apply a warm, desaturated desert look. Emphasize orange and red tones, reduce blues, and add a subtle haze.' },
        { id: 'travel-03', name: 'Urban Explorer', thumbnailUrl: 'https://picsum.photos/seed/urban/100/100', prompt: 'Create a gritty, urban look. Increase clarity, desaturate colors slightly except for reds and yellows, and add a cool tone to the shadows.' },
    ]
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Elegant and clean presets for a high-end aesthetic.',
    coverImageUrl: 'https://picsum.photos/seed/luxury/600/400',
    presets: [
        { id: 'luxury-01', name: 'Golden Hour', thumbnailUrl: 'https://picsum.photos/seed/golden/100/100', prompt: 'Bathe this image in a warm, golden hour light. Add soft, glowing highlights and a warm cast to the entire photo for a luxurious feel.' },
        { id: 'luxury-02', name: 'Clean & Bright', thumbnailUrl: 'https://picsum.photos/seed/bright/100/100', prompt: 'Create a clean, bright, and airy look. Increase exposure slightly, reduce shadows, and keep colors natural but vibrant.' },
        { id: 'luxury-03', name: 'Rich & Moody', thumbnailUrl: 'https://picsum.photos/seed/moody/100/100', prompt: 'Apply a rich and moody preset. Deepen the shadows, increase color richness especially in greens and reds, and add a slight vignette.' },
    ]
  },
  {
    id: 'product',
    name: 'Product',
    description: 'Sharp, clean presets to make your products stand out.',
    coverImageUrl: 'https://picsum.photos/seed/product/600/400',
    presets: [
        { id: 'product-01', name: 'Crisp White', thumbnailUrl: 'https://picsum.photos/seed/whitebg/100/100', prompt: 'Create an ultra-clean look for product photography. Make the whites pure white, increase sharpness and clarity, and ensure colors are true to life.' },
        { id: 'product-02', name: 'Studio Pop', thumbnailUrl: 'https://picsum.photos/seed/studiopop/100/100', prompt: 'Apply a vibrant studio look. Boost overall saturation slightly, add a gentle S-curve to the tone curve for contrast, and make the colors pop.' },
    ]
  },
  {
    id: 'neutral',
    name: 'Neutral Collection',
    description: 'Subtle adjustments for a natural and timeless look.',
    coverImageUrl: 'https://picsum.photos/seed/neutral/600/400',
    presets: [
        { id: 'neutral-01', name: 'True Tone', thumbnailUrl: 'https://picsum.photos/seed/truetone/100/100', prompt: 'Apply a very subtle edit. Correct white balance, slightly increase dynamic range by lifting shadows and recovering highlights, and keep colors natural.' },
        { id: 'neutral-02', name: 'Soft Light', thumbnailUrl: 'https://picsum.photos/seed/softlight/100/100', prompt: 'Enhance the image with a soft light effect. Reduce contrast, add a hint of warmth, and ensure a gentle falloff from highlights to shadows.' },
    ]
  },
  {
    id: 'night',
    name: 'Night',
    description: 'Optimized for low-light and night-time photography.',
    coverImageUrl: 'https://picsum.photos/seed/night/600/400',
    presets: [
        { id: 'night-01', name: 'Cyberpunk Neon', thumbnailUrl: 'https://picsum.photos/seed/cyberpunk/100/100', prompt: 'Give this night photo a cyberpunk feel. Push blues towards cyan, magentas towards pink, and increase the glow of light sources.' },
        { id: 'night-02', name: 'Clean Night', thumbnailUrl: 'https://picsum.photos/seed/cleannight/100/100', prompt: 'Clean up this night shot. Reduce noise, correct color cast from streetlights, and enhance the details in the shadows without making it look unnatural.' },
    ]
  },
  {
    id: 'dark-aesthetic',
    name: 'Dark Aesthetic',
    description: 'Moody and atmospheric presets for a dramatic feel.',
    coverImageUrl: 'https://picsum.photos/seed/dark/600/400',
    presets: [
        { id: 'dark-01', name: 'Crushed Blacks', thumbnailUrl: 'https://picsum.photos/seed/crushed/100/100', prompt: 'Create a dark aesthetic by crushing the blacks and desaturating colors, especially greens and yellows. Add a cool, blue tone to the shadows.' },
        { id: 'dark-02', name: 'Cinematic Shadows', thumbnailUrl: 'https://picsum.photos/seed/cinematicshadow/100/100', prompt: 'Enhance the shadows to create a cinematic, moody feel. Desaturate the image slightly and focus the light on the main subject.' },
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Dynamic presets to make cars look their best.',
    coverImageUrl: 'https://picsum.photos/seed/auto/600/400',
    presets: [
        { id: 'auto-01', name: 'Showroom Shine', thumbnailUrl: 'https://picsum.photos/seed/showroom/100/100', prompt: 'Give this car photo a showroom look. Increase clarity, contrast, and reflections. Make the colors deep and rich, especially the car\'s paint.' },
        { id: 'auto-02', name: 'Motion Blur', thumbnailUrl: 'https://picsum.photos/seed/motion/100/100', prompt: 'Apply a gritty, action-oriented look. Add cool tones to the environment, boost the car\'s color, and enhance the sense of speed and motion.' },
    ]
  },
  {
    id: 'proraw-01',
    name: 'ProRAW 01',
    description: 'Signature looks designed for ProRAW flexibility.',
    coverImageUrl: 'https://picsum.photos/seed/proraw1/600/400',
    presets: [
        { id: 'proraw-01-01', name: 'Dynamic Range+', thumbnailUrl: 'https://picsum.photos/seed/dynamic/100/100', prompt: 'Maximize the dynamic range of this ProRAW image. Recover highlight details and lift shadows significantly while maintaining natural contrast and color.' },
        { id: 'proraw-01-02', name: 'True Color', thumbnailUrl: 'https://picsum.photos/seed/truecolor/100/100', prompt: 'Produce a true-to-life color rendition from this ProRAW file. Focus on accurate skin tones and realistic landscape colors with minimal stylistic changes.' },
    ]
  },
  {
    id: 'proraw-02',
    name: 'ProRAW 02',
    description: 'Creative and bold styles leveraging ProRAW data.',
    coverImageUrl: 'https://picsum.photos/seed/proraw2/600/400',
    presets: [
        { id: 'proraw-02-01', name: 'Dramatic Sky', thumbnailUrl: 'https://picsum.photos/seed/sky/100/100', prompt: 'Use the ProRAW data to create a dramatic sky. Deepen the blues, enhance cloud texture, and increase contrast between the sky and foreground.' },
        { id: 'proraw-02-02', name: 'Micro Contrast', thumbnailUrl: 'https://picsum.photos/seed/microcontrast/100/100', prompt: 'Boost micro-contrast and local texture throughout the image, leveraging the detail in the ProRAW file for a sharp, tactile look.' },
    ]
  },
  {
    id: 'foodie',
    name: 'Foodie Collection',
    description: 'Make your food photos look delicious and inviting.',
    coverImageUrl: 'https://picsum.photos/seed/foodie/600/400',
    presets: [
      { id: 'foodie-01', name: 'Bright & Airy', thumbnailUrl: 'https://picsum.photos/seed/foodbright/100/100', prompt: 'Create a bright and airy food photo. Increase exposure, add warmth, and boost saturation slightly to make the food look fresh and appealing.' },
      { id: 'foodie-02', name: 'Dark & Rustic', thumbnailUrl: 'https://picsum.photos/seed/fooddark/100/100', prompt: 'Apply a dark and rustic look. Increase contrast and clarity, add warm tones to the highlights, and create a moody atmosphere.' },
    ],
  },
  {
    id: 'portrait',
    name: 'Portrait Collection',
    description: 'Enhance skin tones and create beautiful portraits.',
    coverImageUrl: 'https://picsum.photos/seed/portrait/600/400',
    presets: [
        { id: 'portrait-01', name: 'Natural Glow', thumbnailUrl: 'https://picsum.photos/seed/glow/100/100', prompt: 'Enhance this portrait by softening the skin slightly, adding a warm, natural glow, and making the eyes pop with a bit more brightness and clarity. Keep skin tones realistic.' },
        { id: 'portrait-02', name: 'Dramatic Light', thumbnailUrl: 'https://picsum.photos/seed/dramatic-portrait/100/100', prompt: 'Create a dramatic, low-key portrait look. Deepen the shadows, increase contrast, and add a subtle cool tone to the midtones while keeping highlights on the face.' },
        { id: 'portrait-03', name: 'Ethereal Haze', thumbnailUrl: 'https://picsum.photos/seed/ethereal/100/100', prompt: 'Apply a dreamy, ethereal look to this portrait. Add a soft haze, lift the blacks for a faded feel, and shift the colors towards pastel tones.' }
    ]
  },
  {
    id: 'street',
    name: 'Street Collection',
    description: 'Gritty, high-contrast looks for urban environments.',
    coverImageUrl: 'https://picsum.photos/seed/street/600/400',
    presets: [
        { id: 'street-01', name: 'Urban Grit', thumbnailUrl: 'https://picsum.photos/seed/grit/100/100', prompt: 'Apply a gritty, high-contrast look suitable for street photography. Increase clarity and texture, desaturate colors slightly, and add a cool, steely blue tone to the shadows.' },
        { id: 'street-02', name: 'Night Wanderer', thumbnailUrl: 'https://picsum.photos/seed/wanderer/100/100', prompt: 'Enhance this street night scene. Boost the neon lights, deepen the shadows, and add reflections to wet pavement. Create a cinematic, moody atmosphere.' },
        { id: 'street-03', name: 'Human Element', thumbnailUrl: 'https://picsum.photos/seed/human/100/100', prompt: 'Focus on the human element in this street photo. Apply a classic black and white conversion with rich mid-tones and sharp details to emphasize emotion and story.' }
    ]
  },
  {
    id: 'nature',
    name: 'Nature Collection',
    description: 'Bring landscapes and wildlife to life with vibrant colors.',
    coverImageUrl: 'https://picsum.photos/seed/nature/600/400',
    presets: [
        { id: 'nature-01', name: 'Lush Greens', thumbnailUrl: 'https://picsum.photos/seed/lush/100/100', prompt: 'Enhance the greens and earth tones in this nature shot. Increase vibrancy in the foliage, add warmth to the sunlight, and boost overall clarity for a lush, vibrant landscape.' },
        { id: 'nature-02', name: 'Misty Mountains', thumbnailUrl: 'https://picsum.photos/seed/misty/100/100', prompt: 'Create a moody, atmospheric look for this mountain landscape. Add a cool, blueish haze, desaturate the colors slightly, and enhance the contrast in the rock textures.' },
        { id: 'nature-03', name: 'Golden Forest', thumbnailUrl: 'https://picsum.photos/seed/goldenforest/100/100', prompt: 'Apply a warm, golden-hour look to this forest scene. Bathe the image in warm, orange light, deepen the shadows, and make the light rays more prominent.' }
    ]
  },
  {
    id: 'food',
    name: 'Food Collection',
    description: 'Delicious presets to make your food photography mouth-watering.',
    coverImageUrl: 'https://picsum.photos/seed/newfood/600/400',
    presets: [
        { id: 'food-01', name: 'Fresh & Clean', thumbnailUrl: 'https://picsum.photos/seed/foodfresh/100/100', prompt: 'Apply a fresh and clean look to this food photo. Boost brightness and whites, slightly increase saturation in colors, and add sharpness to make the ingredients look crisp.' },
        { id: 'food-02', name: 'Cozy Cafe', thumbnailUrl: 'https://picsum.photos/seed/foodcafe/100/100', prompt: 'Give this photo a cozy, warm cafe vibe. Add warm tones, soften the contrast, and add a gentle vignette to draw focus to the food.' },
        { id: 'food-03', name: 'Gourmet Mood', thumbnailUrl: 'https://picsum.photos/seed/foodmood/100/100', prompt: 'Create a moody, gourmet restaurant look. Deepen the shadows, enhance texture and reflections with clarity, and use selective color boosting for key ingredients.' }
    ]
  },
  {
    id: 'architecture',
    name: 'Architecture Collection',
    description: 'Clean lines and dramatic perspectives for buildings.',
    coverImageUrl: 'https://picsum.photos/seed/architecture/600/400',
    presets: [
        { id: 'arch-01', name: 'Modern Minimal', thumbnailUrl: 'https://picsum.photos/seed/archminimal/100/100', prompt: 'Create a modern, minimalist architectural look. Convert to a clean black and white, straighten all lines, and push the contrast to emphasize form and shadow.' },
        { id: 'arch-02', name: 'Urban Symmetry', thumbnailUrl: 'https://picsum.photos/seed/archsymmetry/100/100', prompt: 'Enhance the symmetry and lines in this architectural shot. Apply a cool, desaturated color palette, increase sharpness, and correct any perspective distortion.' },
        { id: 'arch-03', name: 'Historic Charm', thumbnailUrl: 'https://picsum.photos/seed/archhistoric/100/100', prompt: 'Bring out the historic charm of this building. Add warm, golden tones, soften the texture slightly for a vintage feel, and enhance the details in the stonework or wood.' }
    ]
  },
  {
    id: 'abstract',
    name: 'Abstract Collection',
    description: 'Creative and unconventional edits for artistic expression.',
    coverImageUrl: 'https://picsum.photos/seed/abstract/600/400',
    presets: [
        { id: 'abstract-01', name: 'Color Explosion', thumbnailUrl: 'https://picsum.photos/seed/colorexplosion/100/100', prompt: 'Transform this image into an abstract piece by dramatically boosting color saturation and vibrancy. Shift hues to create a surreal, dreamlike color palette.' },
        { id: 'abstract-02', name: 'Shape & Form', thumbnailUrl: 'https://picsum.photos/seed/shapeform/100/100', prompt: 'Emphasize shape and form by converting the image to a very high-contrast black and white. Remove all mid-tones, leaving only pure black and white to create a graphic look.' },
        { id: 'abstract-03', name: 'Textural Dream', thumbnailUrl: 'https://picsum.photos/seed/texture/100/100', prompt: 'Create an abstract image focused on texture. Greatly increase clarity and sharpness, apply a monochrome color wash, and add a heavy film grain effect.' }
    ]
  },
  {
    id: 'vintage',
    name: 'Vintage Collection',
    description: 'Nostalgic looks from bygone eras.',
    coverImageUrl: 'https://picsum.photos/seed/vintage/600/400',
    presets: [
        { id: 'vintage-01', name: '70s Polaroid', thumbnailUrl: 'https://picsum.photos/seed/polaroid/100/100', prompt: 'Emulate a 1970s Polaroid photograph. Apply a warm, yellowish cast, fade the blacks, slightly reduce sharpness, and add a soft vignette.' },
        { id: 'vintage-02', name: 'Faded Postcard', thumbnailUrl: 'https://picsum.photos/seed/postcard/100/100', prompt: 'Give this image the look of a faded vintage postcard. Desaturate the colors, apply a subtle sepia tone, and add a texture that mimics old paper grain.' },
        { id: 'vintage-03', name: '50s Technicolor', thumbnailUrl: 'https://picsum.photos/seed/technicolor/100/100', prompt: 'Recreate the saturated, vibrant look of 1950s Technicolor films. Deepen the reds and blues, give skin tones a slightly rosy tint, and increase overall color richness.' }
    ]
  },
  {
    id: 'futuristic',
    name: 'Futuristic Collection',
    description: 'Cyberpunk and sci-fi aesthetics for a modern edge.',
    coverImageUrl: 'https://picsum.photos/seed/futuristic/600/400',
    presets: [
        { id: 'futuristic-01', name: 'Blade Runner Blues', thumbnailUrl: 'https://picsum.photos/seed/bladerunner/100/100', prompt: 'Apply a Blade Runner-inspired futuristic look. Create a dark, high-contrast scene with a strong cyan and magenta color grade, especially in the highlights and shadows.' },
        { id: 'futuristic-02', name: 'Holographic Glow', thumbnailUrl: 'https://picsum.photos/seed/hologram/100/100', prompt: 'Give the image a holographic, futuristic feel. Add a subtle glow effect to light sources, increase color vibrancy, and apply a cool, digital-blue tint to the overall image.' },
        { id: 'futuristic-03', name: 'AI Utopia', thumbnailUrl: 'https://picsum.photos/seed/utopia/100/100', prompt: 'Create a clean, bright, utopian futuristic look. Use a high-key exposure, a desaturated color palette with hints of silver and electric blue, and enhance smooth surfaces and sharp lines.' }
    ]
  }
];

export const DEMO_IMAGE_URL = 'https://picsum.photos/seed/demo/1200/800';