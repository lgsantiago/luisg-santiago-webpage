import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'slide-in-bottom' | 'slide-in-top' | 'rotate-in' | 'bounce-in';
  delay?: number;
  duration?: 'fast' | 'normal' | 'slow';
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  stagger?: boolean;
  className?: string;
  as?: React.ElementType;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in-up',
  delay = 0,
  duration = 'normal',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
  stagger = false,
  className = '',
  as: Component = 'div'
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
    delay
  });

  const animationClass = `animate-${animation}`;
  const durationClass = duration !== 'normal' ? `animate-duration-${duration}` : '';
  const staggerClass = stagger ? 'animate-stagger' : '';
  const visibleClass = isVisible ? 'animate-visible' : '';

  const combinedClassName = [
    animationClass,
    durationClass,
    staggerClass,
    visibleClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component ref={ref as any} className={combinedClassName}>
      {children}
    </Component>
  );
};

export default AnimatedSection;