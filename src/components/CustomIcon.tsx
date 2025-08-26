import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const BrainIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C13.1 2 14.1 2.4 14.8 3.1C15.5 3.8 15.9 4.8 15.9 6C15.9 6.5 15.8 7 15.6 7.4C16.4 7.7 17.1 8.3 17.6 9C18.1 9.7 18.4 10.6 18.4 11.5C18.4 12.4 18.1 13.3 17.6 14C17.1 14.7 16.4 15.3 15.6 15.6C15.8 16 15.9 16.5 15.9 17C15.9 18.2 15.5 19.2 14.8 19.9C14.1 20.6 13.1 21 12 21C10.9 21 9.9 20.6 9.2 19.9C8.5 19.2 8.1 18.2 8.1 17C8.1 16.5 8.2 16 8.4 15.6C7.6 15.3 6.9 14.7 6.4 14C5.9 13.3 5.6 12.4 5.6 11.5C5.6 10.6 5.9 9.7 6.4 9C6.9 8.3 7.6 7.7 8.4 7.4C8.2 7 8.1 6.5 8.1 6C8.1 4.8 8.5 3.8 9.2 3.1C9.9 2.4 10.9 2 12 2Z"
      fill="currentColor"
    />
    <circle cx="9" cy="9" r="1.5" fill="rgba(255,255,255,0.3)" />
    <circle cx="15" cy="9" r="1.5" fill="rgba(255,255,255,0.3)" />
    <path
      d="M8 13C8 13 9.5 15 12 15C14.5 15 16 13 16 13"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const CPUIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="2"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect
      x="7"
      y="7"
      width="10"
      height="10"
      rx="1"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path d="M2 8H4M2 12H4M2 16H4M20 8H22M20 12H22M20 16H22M8 2V4M12 2V4M16 2V4M8 20V22M12 20V22M16 20V22" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.6" />
  </svg>
);

export const MemoryIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      rx="2"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect x="6" y="9" width="2" height="6" rx="0.5" fill="currentColor" />
    <rect x="9" y="9" width="2" height="6" rx="0.5" fill="currentColor" />
    <rect x="12" y="9" width="2" height="6" rx="0.5" fill="currentColor" />
    <rect x="15" y="9" width="2" height="6" rx="0.5" fill="currentColor" />
    <path d="M8 6V4M12 6V4M16 6V4M8 18V20M12 18V20M16 18V20" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
);

export const NeuralIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="6" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="6" cy="18" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="18" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    
    <path d="M8.5 7.5L10.5 10.5M13.5 13.5L15.5 16.5M8.5 16.5L10.5 13.5M15.5 7.5L13.5 10.5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

export const DataIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M3 5V19C3 20.1 7 22 12 22C17 22 21 20.1 21 19V5" stroke="currentColor" strokeWidth="2" />
    <path d="M21 12C21 13.1 17 15 12 15C7 15 3 13.1 3 12" stroke="currentColor" strokeWidth="2" />
    <path d="M5 8L19 8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <path d="M5 16L19 16" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
);

export const CodeIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 18L22 12L16 6M8 6L2 12L8 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 4L10 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

export const ArchitectureIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <path d="M10 6.5H14M10 17.5H14M6.5 10V14M17.5 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

export const ResultsIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 7H21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="2" y="20" width="4" height="2" rx="1" fill="currentColor" opacity="0.3" />
    <rect x="8" y="18" width="4" height="4" rx="1" fill="currentColor" opacity="0.5" />
    <rect x="14" y="16" width="4" height="6" rx="1" fill="currentColor" opacity="0.7" />
    <rect x="20" y="14" width="2" height="8" rx="1" fill="currentColor" />
  </svg>
);

export const InnovationIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
    <path
      d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8 12H16M12 8V16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

export const ProblemIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.6" />
    <path d="M3.5 7L6.5 4M20.5 7L17.5 4M3.5 17L6.5 20M20.5 17L17.5 20" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      opacity="0.4"
    />
  </svg>
);

export const SummaryIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
    <path d="M7 8H17M7 12H17M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="16" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M15 16L16 17L18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);