import React from 'react';
import Image from 'next/image';

interface LogoProps {
  light?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  className?: string;
}

export default function Logo({ size = 'md', centered = false, className = '' }: LogoProps) {
  const dimensions = 
    size === 'xl' ? { width: 420, height: 180 } :
    size === 'lg' ? { width: 300, height: 120 } :
    size === 'sm' ? { width: 130, height: 50 } :
    { width: 180, height: 75 };

  const maxHeightClass = 
    size === 'xl' ? 'max-h-36 sm:max-h-48' :
    size === 'lg' ? 'max-h-24 sm:max-h-32' :
    size === 'sm' ? 'max-h-12' :
    'max-h-16';

  return (
    <div className={`inline-flex items-center justify-center ${centered ? 'mx-auto' : ''} ${className}`}>
      <Image
        src="/logo.png"
        alt="مؤسسة باثقيلي للمقاولات العامة والخدمات اللوجستية"
        width={dimensions.width}
        height={dimensions.height}
        priority
        className={`object-contain h-auto w-auto ${maxHeightClass}`}
      />
    </div>
  );
}