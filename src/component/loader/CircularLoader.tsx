import React from 'react';
import './Loader.css';

interface CircularLoaderProps {
  size?: number;
  color?: string;
}

const CircularLoader: React.FC<CircularLoaderProps> = ({
  size = 40,
  color = '#007bff',
}) => {
  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    margin: 'auto',
  };

  const circleStyle: React.CSSProperties = {
    border: `4px solid ${color}`,
    borderTop: '4px solid transparent',
    borderRadius: '50%',
    width: size - 8,
    height: size - 8,
    animation: 'spin 1s linear infinite',
  };

  return (
    <div className="circular-loader-container" style={containerStyle}>
      <div className="circular-loader" style={circleStyle}></div>
    </div>
  );
};

export default CircularLoader;
