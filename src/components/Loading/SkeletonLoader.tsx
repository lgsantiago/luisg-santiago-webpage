import React from 'react';
import './SkeletonLoader.scss';

interface SkeletonLoaderProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'card' | 'tech-card' | 'project-card';
  width?: string | number;
  height?: string | number;
  lines?: number;
  className?: string;
  animated?: boolean;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  variant = 'text',
  width,
  height,
  lines = 1,
  className = '',
  animated = true
}) => {
  const getStyle = () => {
    const style: React.CSSProperties = {};
    if (width) style.width = typeof width === 'number' ? `${width}px` : width;
    if (height) style.height = typeof height === 'number' ? `${height}px` : height;
    return style;
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`skeleton-container ${className}`}>
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            className={`skeleton skeleton-${variant} ${animated ? 'animated' : ''}`}
            style={{
              ...getStyle(),
              width: i === lines - 1 ? '75%' : '100%'
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`skeleton-card ${className}`}>
        <div className={`skeleton skeleton-rectangular ${animated ? 'animated' : ''}`} style={{ height: '200px', marginBottom: '16px' }} />
        <div className={`skeleton skeleton-text ${animated ? 'animated' : ''}`} style={{ height: '20px', marginBottom: '8px' }} />
        <div className={`skeleton skeleton-text ${animated ? 'animated' : ''}`} style={{ height: '16px', width: '80%', marginBottom: '12px' }} />
        <div className={`skeleton skeleton-text ${animated ? 'animated' : ''}`} style={{ height: '16px', width: '60%' }} />
      </div>
    );
  }

  if (variant === 'tech-card') {
    return (
      <div className={`skeleton-tech-card ${className}`}>
        <div className="skeleton-tech-header">
          <div className={`skeleton skeleton-circular ${animated ? 'animated' : ''}`} style={{ width: '60px', height: '60px' }} />
          <div className="skeleton-tech-info">
            <div className={`skeleton skeleton-text ${animated ? 'animated' : ''}`} style={{ height: '20px', marginBottom: '8px' }} />
            <div className={`skeleton skeleton-text ${animated ? 'animated' : ''}`} style={{ height: '14px', width: '70%' }} />
          </div>
        </div>
        <div className={`skeleton skeleton-rectangular ${animated ? 'animated' : ''}`} style={{ height: '40px', margin: '16px 0' }} />
        <div className={`skeleton skeleton-text ${animated ? 'animated' : ''}`} style={{ height: '16px', marginBottom: '8px' }} />
        <div className={`skeleton skeleton-text ${animated ? 'animated' : ''}`} style={{ height: '16px', width: '85%' }} />
      </div>
    );
  }

  if (variant === 'project-card') {
    return (
      <div className={`skeleton-project-card ${className}`}>
        <div className={`skeleton skeleton-rectangular ${animated ? 'animated' : ''}`} style={{ height: '250px', marginBottom: '16px' }} />
        <div className={`skeleton skeleton-text ${animated ? 'animated' : ''}`} style={{ height: '12px', width: '40%', marginBottom: '8px' }} />
        <div className={`skeleton skeleton-text ${animated ? 'animated' : ''}`} style={{ height: '20px', marginBottom: '8px' }} />
        <div className={`skeleton skeleton-text ${animated ? 'animated' : ''}`} style={{ height: '16px', marginBottom: '4px' }} />
        <div className={`skeleton skeleton-text ${animated ? 'animated' : ''}`} style={{ height: '16px', width: '90%', marginBottom: '16px' }} />
        <div className="skeleton-tags">
          <div className={`skeleton skeleton-rectangular ${animated ? 'animated' : ''}`} style={{ height: '24px', width: '60px', display: 'inline-block', marginRight: '8px' }} />
          <div className={`skeleton skeleton-rectangular ${animated ? 'animated' : ''}`} style={{ height: '24px', width: '80px', display: 'inline-block', marginRight: '8px' }} />
          <div className={`skeleton skeleton-rectangular ${animated ? 'animated' : ''}`} style={{ height: '24px', width: '70px', display: 'inline-block' }} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`skeleton skeleton-${variant} ${animated ? 'animated' : ''} ${className}`}
      style={getStyle()}
    />
  );
};

export default SkeletonLoader;