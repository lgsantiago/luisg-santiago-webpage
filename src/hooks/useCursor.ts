import { useState, useEffect, useRef, useCallback } from 'react';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  cursorType: 'default' | 'pointer' | 'text' | 'grab' | 'grabbing';
}

interface UseCursorReturn extends CursorState {
  setCursorType: (type: CursorState['cursorType']) => void;
  setCursorHover: (isHovering: boolean) => void;
}

export const useCursor = (): UseCursorReturn => {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    cursorType: 'default'
  });

  const requestRef = useRef<number | null>(null);

  const updateCursor = useCallback((e: MouseEvent) => {
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    
    requestRef.current = requestAnimationFrame(() => {
      setCursorState(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY
      }));
    });
  }, []);

  const handleMouseDown = useCallback(() => {
    setCursorState(prev => ({ ...prev, isClicking: true }));
  }, []);

  const handleMouseUp = useCallback(() => {
    setCursorState(prev => ({ ...prev, isClicking: false }));
  }, []);

  const setCursorType = useCallback((type: CursorState['cursorType']) => {
    setCursorState(prev => ({ ...prev, cursorType: type }));
  }, []);

  const setCursorHover = useCallback((isHovering: boolean) => {
    setCursorState(prev => ({ ...prev, isHovering }));
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [updateCursor, handleMouseDown, handleMouseUp]);

  return {
    ...cursorState,
    setCursorType,
    setCursorHover
  };
};