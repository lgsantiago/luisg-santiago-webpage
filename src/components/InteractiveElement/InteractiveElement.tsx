import React, { useRef, ReactNode } from 'react';
import { useCursor } from '../../hooks/useCursor';
import './InteractiveElement.scss';

interface InteractiveElementProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  hoverEffect?: 'magnetic' | 'glow' | 'shimmer' | 'tilt' | 'pulse' | 'bounce' | 'float' | 'rotate' | 'shadow-expand' | 'border-sweep' | 'color-shift' | 'morph' | 'none';
  cursorType?: 'default' | 'pointer' | 'text' | 'grab' | 'grabbing';
  magneticStrength?: number;
  as?: React.ElementType;
}

const InteractiveElement: React.FC<InteractiveElementProps> = ({
  children,
  hoverEffect = 'none',
  cursorType = 'pointer',
  magneticStrength = 0.3,
  className = '',
  as: Component = 'div',
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const elementRef = useRef<HTMLElement>(null);
  const { setCursorType, setCursorHover } = useCursor();
  
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setCursorType(cursorType);
    setCursorHover(true);
    onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setCursorType('default');
    setCursorHover(false);
    
    // Reset magnetic effect
    if (hoverEffect === 'magnetic' && elementRef.current) {
      elementRef.current.style.transform = '';
    }
    
    onMouseLeave?.(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (hoverEffect === 'magnetic' && elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * magneticStrength;
      const deltaY = (e.clientY - centerY) * magneticStrength;
      
      elementRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
    }
  };

  const combinedClassName = [
    'interactive-element',
    hoverEffect !== 'none' ? `hover-${hoverEffect}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component
      ref={elementRef}
      className={combinedClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
    </Component>
  );
};

export default InteractiveElement;