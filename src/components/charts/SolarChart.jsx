import React from 'react';
import styles from './SolarChart.module.css';

const SolarChart = ({ data = [] }) => {
  // Default data if none provided
  const chartData = data.length > 0 ? data : [
    { time: '00:00', output: 0 },
    { time: '06:00', output: 25 },
    { time: '09:00', output: 55 },
    { time: '12:00', output: 78 },
    { time: '15:00', output: 75 },
    { time: '18:00', output: 45 },
    { time: '24:00', output: 0 }
  ];

  // Chart dimensions
  const width = 316;
  const height = 180;
  const padding = { top: 20, right: 40, bottom: 40, left: 40 };
  
  // Calculate SVG coordinates
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  
  // Scale output percentage to Y coordinate
  const yScale = (output) => {
    const normalized = output / 100;
    return innerHeight - (normalized * innerHeight);
  };
  
  // Scale time to X coordinate
  const xScale = (index) => {
    const step = innerWidth / (chartData.length - 1);
    return index * step;
  };

  // Generate path for area chart
  const areaPath = chartData.map((point, index) => {
    const x = xScale(index) + padding.left;
    const y = yScale(point.output) + padding.top;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  // Generate points for hover effects
  const points = chartData.map((point, index) => {
    const x = xScale(index) + padding.left;
    const y = yScale(point.output) + padding.top;
    return { x, y, output: point.output, time: point.time };
  });

  return (
    <div className={styles.chartContainer}>
      <svg width={width} height={height} className={styles.svg}>
        <defs>
          <linearGradient id="solarGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbc523" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#fbc523" stopOpacity="0.1"/>
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((value, index) => (
          <line
            key={index}
            x1={padding.left}
            y1={padding.top + (index * innerHeight / 4)}
            x2={width - padding.right}
            y2={padding.top + (index * innerHeight / 4)}
            stroke="#fff7e6"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
        ))}
        
        {/* X-axis labels */}
        {chartData.map((point, index) => (
          <text
            key={index}
            x={xScale(index) + padding.left}
            y={height - 10}
            textAnchor="middle"
            fontSize="12"
            fill="#888a86"
            className={styles.axisLabel}
          >
            {point.time}
          </text>
        ))}
        
        {/* Y-axis labels */}
        {[0, 25, 50, 75, 100].map((value, index) => (
          <text
            key={index}
            x={10}
            y={padding.top + (index * innerHeight / 4)}
            textAnchor="start"
            fontSize="12"
            fill="#888a86"
            className={styles.axisLabel}
          >
            {value}%
          </text>
        ))}
        
        {/* Solar energy area */}
        <path
          d={`
            M ${padding.left} ${padding.top + innerHeight}
            ${areaPath}
            L ${width - padding.right} ${padding.top + innerHeight}
            Z
          `}
          fill="url(#solarGradient)"
          opacity="0.8"
          className={styles.solarArea}
        />
        
        {/* Solar energy line */}
        <path
          d={areaPath}
          fill="none"
          stroke="#fbc523"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          className={styles.solarLine}
        />
        
        {/* Data points */}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#fbc523"
            stroke="#fff"
            strokeWidth="2"
            className={styles.solarPoint}
          />
        ))}
        
        {/* Current output indicator */}
        <line
          x1={padding.left}
          y1={points[points.length - 1]?.y || padding.top + innerHeight / 2}
          x2={width - padding.right}
          y2={points[points.length - 1]?.y || padding.top + innerHeight / 2}
          stroke="#f9a825"
          strokeWidth="2"
          strokeDasharray="4,4"
          opacity="0.8"
        />
      </svg>
      
      {/* Chart title */}
      <div className={styles.chartTitle}>Solar Energy Performance</div>
      
      {/* Current output display */}
      <div className={styles.currentOutput}>
        <span className={styles.outputLabel}>Current Output: </span>
        <span className={styles.outputValue}>
          {points[points.length - 1]?.output}%
        </span>
      </div>
    </div>
  );
};

export default SolarChart;