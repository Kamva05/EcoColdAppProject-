import React from 'react';
import styles from './TemperatureChart.module.css';

const TemperatureChart = ({ data = [] }) => {
  // Default data if none provided
  const chartData = data.length > 0 ? data : [
    { time: '00:00', temp: 4.2 },
    { time: '04:00', temp: 4.1 },
    { time: '08:00', temp: 4.3 },
    { time: '12:00', temp: 4.5 },
    { time: '16:00', temp: 4.7 },
    { time: '20:00', temp: 4.4 },
    { time: '24:00', temp: 4.2 }
  ];

  // Find min and max temperatures for scaling
  const minTemp = Math.min(...chartData.map(d => d.temp));
  const maxTemp = Math.max(...chartData.map(d => d.temp));
  const tempRange = maxTemp - minTemp || 1; // Avoid division by zero
  
  // Chart dimensions
  const width = 311;
  const height = 200;
  const padding = { top: 20, right: 40, bottom: 40, left: 40 };
  
  // Calculate SVG coordinates
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;
  
  // Scale temperature to Y coordinate (inverted because SVG Y increases downward)
  const yScale = (temp) => {
    const normalized = (temp - minTemp) / tempRange;
    return innerHeight - (normalized * innerHeight);
  };
  
  // Scale time to X coordinate
  const xScale = (index) => {
    const step = innerWidth / (chartData.length - 1);
    return index * step;
  };

  // Generate path for line chart
  const linePath = chartData.map((point, index) => {
    const x = xScale(index) + padding.left;
    const y = yScale(point.temp) + padding.top;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  // Generate points for the line
  const points = chartData.map((point, index) => {
    const x = xScale(index) + padding.left;
    const y = yScale(point.temp) + padding.top;
    return { x, y, temp: point.temp, time: point.time };
  });

  return (
    <div className={styles.chartContainer}>
      <svg width={width} height={height} className={styles.svg}>
        {/* Background grid lines */}
        <defs>
          <linearGradient id="tempGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5b9f2d" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#5b9f2d" stopOpacity="0.05"/>
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {[0, 1, 2, 3].map(i => (
          <line
            key={i}
            x1={padding.left}
            y1={padding.top + (i * innerHeight / 3)}
            x2={width - padding.right}
            y2={padding.top + (i * innerHeight / 3)}
            stroke="#e8f2e6"
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
        {[0, 3, 6, 10].map((value, index) => (
          <text
            key={index}
            x={10}
            y={padding.top + (index * innerHeight / 3)}
            textAnchor="start"
            fontSize="12"
            fill="#888a86"
            className={styles.axisLabel}
          >
            {value}°
          </text>
        ))}
        
        {/* Temperature range area */}
        <path
          d={`
            M ${padding.left} ${padding.top + innerHeight}
            ${linePath}
            L ${width - padding.right} ${padding.top + innerHeight}
            Z
          `}
          fill="url(#tempGradient)"
          opacity="0.5"
        />
        
        {/* Temperature line */}
        <path
          d={linePath}
          fill="none"
          stroke="#5b9f2d"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.tempLine}
        />
        
        {/* Data points */}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#5b9f2d"
            stroke="#fff"
            strokeWidth="2"
            className={styles.dataPoint}
          />
        ))}
        
        {/* Current temperature indicator */}
        <line
          x1={padding.left}
          y1={points[points.length - 1]?.y || padding.top + innerHeight / 2}
          x2={width - padding.right}
          y2={points[points.length - 1]?.y || padding.top + innerHeight / 2}
          stroke="#2166fc"
          strokeWidth="1"
          strokeDasharray="4,4"
          opacity="0.6"
        />
      </svg>
      
      {/* Chart title */}
      <div className={styles.chartTitle}>24-Hour Temperature Trend</div>
      
      {/* Current temperature display */}
      <div className={styles.currentTemp}>
        <span className={styles.tempLabel}>Current: </span>
        <span className={styles.tempValue}>
          {points[points.length - 1]?.temp.toFixed(1)}°C
        </span>
      </div>
      
      {/* Optimal range indicator */}
      <div className={styles.rangeIndicator}>
        <span className={styles.rangeLabel}>Optimal Range: </span>
        <span className={styles.rangeValue}>2°C - 6°C</span>
      </div>
    </div>
  );
};

export default TemperatureChart;