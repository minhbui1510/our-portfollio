interface AnimatedAvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const sizeMap = {
  sm: 'w-14 h-14',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
};

const ringSize = {
  sm: 'w-16 h-16',
  md: 'w-[104px] h-[104px]',
  lg: 'w-[136px] h-[136px]',
};

export default function AnimatedAvatar({
  src,
  alt,
  size = 'lg',
  onClick,
}: AnimatedAvatarProps) {
  return (
    <div
      className={`avatar-ring ${ringSize[size]} flex items-center justify-center flex-shrink-0 ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className={`${sizeMap[size]} rounded-full object-cover`}
      />
    </div>
  );
}
