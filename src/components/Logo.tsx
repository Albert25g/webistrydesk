import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
  variant?: 'light' | 'dark'; // New prop for different backgrounds
}

export default function Logo({
  size = 'medium',
  showText = true,
  className = '',
  variant = 'light', // Default to light variant
}: LogoProps) {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16',
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-lg',
    large: 'text-xl',
  };

  // Context-aware colors
  const textColors = {
    light: {
      primary: 'text-brand-blue', // Dark blue for light backgrounds
      secondary: 'text-gray-600', // Dark gray for light backgrounds
    },
    dark: {
      primary: 'text-white', // White for dark backgrounds
      secondary: 'text-gold-300', // Gold for dark backgrounds
    },
  };

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <Image
          src="/images/tribal-circuit-logo.png"
          alt="WebistryDesk - Tribal Circuit Emblem"
          width={size === 'small' ? 32 : size === 'medium' ? 48 : 64}
          height={size === 'small' ? 32 : size === 'medium' ? 48 : 64}
          className={`${sizeClasses[size]} object-contain filter drop-shadow-lg`}
          priority={size === 'large'}
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold ${textColors[variant].primary} ${textSizeClasses[size]}`}
          >
            WebistryDesk
          </span>
          {size !== 'small' && (
            <span className={`text-xs ${textColors[variant].secondary} -mt-1`}>
              Digital Solutions
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
