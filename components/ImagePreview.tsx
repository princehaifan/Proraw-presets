
import React, { useState, useRef, useCallback } from 'react';

interface ImagePreviewProps {
  beforeSrc: string;
  afterSrc: string | null;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ beforeSrc, afterSrc }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
  };

  const handleMouseUp = useCallback((e: MouseEvent) => {
    isDragging.current = false;
  }, []);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    handleMove(e.clientX);
  }, [handleMove]);


  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
  }

  const handleTouchMove = useCallback((e: TouchEvent) => {
     if (!isDragging.current) return;
     handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    isDragging.current = false;
  }, []);


  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <div ref={containerRef} className="slider-container w-full h-full max-w-7xl max-h-[75vh] aspect-[3/2]">
      <img src={beforeSrc} alt="Before" className="absolute inset-0 w-full h-full object-contain" />
      
      {afterSrc && (
        <>
            <div className="after-image-container" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <img src={afterSrc} alt="After" className="absolute inset-0 w-full h-full object-contain" />
            </div>
            <div
                className="slider-handle"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div className="arrow-left">&#9664;</div>
                <div className="arrow-right">&#9654;</div>
            </div>
        </>
      )}
    </div>
  );
};

export default ImagePreview;
