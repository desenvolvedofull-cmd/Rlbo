import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const CheckCircle: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const Zap: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const Bot: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
);

export const Users: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const Film: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M7 3v18" />
    <path d="M3 7.5h4" />
    <path d="M3 12h18" />
    <path d="M3 16.5h4" />
    <path d="M17 3v18" />
    <path d="M21 7.5h-4" />
    <path d="M21 16.5h-4" />
  </svg>
);

export const Smartphone: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

export const Windows: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 12H2.5" />
    <path d="M21.5 12H12" />
    <path d="M12 2.5V12" />
    <path d="M12 21.5V12" />
    <path d="M2.5 12 5.7 5.7" />
    <path d="M2.5 12 5.7 18.3" />
    <path d="M21.5 12 18.3 5.7" />
    <path d="M21.5 12 18.3 18.3" />
  </svg>
);

export const Gift: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
  </svg>
);

export const Rocket: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.18-.65-.87-2.07-1.33-3.18-.05Z" />
    <path d="m12 15-3-3a2.25 2.25 0 0 1 0-3l3-3a2.25 2.25 0 0 1 3 0l3 3a2.25 2.25 0 0 1 0 3l-3 3a2.25 2.25 0 0 1-3 0Z" />
    <path d="m15 12-3-3" />
    <path d="M9 9 4.5 4.5" />
    <path d="m19.5 19.5-4.5-4.5" />
  </svg>
);

export const MessageSquare: React.FC<IconProps> = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
);

export const Code: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const CompanyLogo1: React.FC<IconProps> = ({ className = "" }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 30V0H10V30H0Z M20 30V0H30V30H20Z M40 30V0H100V10H50V20H100V30H40Z" />
  </svg>
);

export const CompanyLogo2: React.FC<IconProps> = ({ className = "" }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="15" cy="15" r="15" />
    <path d="M40 0L60 30L80 0H40Z" />
    <path d="M85 0H100L92.5 15L100 30H85L77.5 15L85 0Z" />
  </svg>
);

export const CompanyLogo3: React.FC<IconProps> = ({ className = "" }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0 0H30L15 15L30 30H0L15 15L0 0Z" />
    <path d="M40 15C40 6.71573 46.7157 0 55 0C63.2843 0 70 6.71573 70 15C70 23.2843 63.2843 30 55 30C46.7157 30 40 23.2843 40 15ZM55 20C57.7614 20 60 17.7614 60 15C60 12.2386 57.7614 10 55 10C52.2386 10 50 12.2386 50 15C50 17.7614 52.2386 20 55 20Z" />
    <path d="M80 0H100V10H90V20H100V30H80V0Z" />
  </svg>
);

export const CompanyLogo4: React.FC<IconProps> = ({ className = "" }) => (
  <svg viewBox="0 0 100 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="30" height="30" rx="5" />
    <path d="M45 0H55V30H45V0Z" />
    <path d="M65 0L100 15L65 30V0Z" />
  </svg>
);

export const ChevronDown: React.FC<IconProps> = ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);