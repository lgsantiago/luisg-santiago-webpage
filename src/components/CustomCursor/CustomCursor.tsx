import React, { useEffect, useState } from 'react';
import { useCursor } from '../../hooks/useCursor';
import './CustomCursor.scss';

interface CustomCursorProps {
  enabled?: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ enabled = true }) => {
  const { x, y, isHovering, isClicking, cursorType } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  // Show/hide cursor based on mouse movement
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleMouseMove = () => {
      setIsVisible(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(false), 2000);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    if (enabled) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(timeoutId);
    };
  }, [enabled]);

  // Create cursor trail effect
  useEffect(() => {
    if (!enabled || !isVisible) return;

    const trailId = Date.now();
    setTrail(prev => [
      { x, y, id: trailId },
      ...prev.slice(0, 5) // Keep only last 6 positions
    ]);

    const timeoutId = setTimeout(() => {
      setTrail(prev => prev.filter(point => point.id !== trailId));
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [x, y, enabled, isVisible]);

  if (!enabled) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor ${isVisible ? 'visible' : ''} ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''} cursor-${cursorType}`}
        style={{
          left: `${x}px`,
          top: `${y}px`
        }}
      >
        <div className="cursor-dot" />
        <div className="cursor-ring" />
      </div>

      {/* Cursor trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (trail.length - index) / trail.length * 0.3,
            transform: `scale(${(trail.length - index) / trail.length * 0.5 + 0.3})`
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;