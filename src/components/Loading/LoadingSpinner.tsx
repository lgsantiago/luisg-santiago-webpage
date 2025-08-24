import React from 'react';
import './LoadingSpinner.scss';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'gray';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = ''
}) => {
  return (
    <div className={`loading-spinner ${size} ${color} ${className}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;