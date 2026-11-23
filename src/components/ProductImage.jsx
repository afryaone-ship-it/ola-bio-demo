import { Package } from 'lucide-react';

export default function ProductImage({ src, alt = '', className = '', iconSize = 40 }) {
  return (
    <div className={`relative overflow-hidden bg-forest/10 ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center text-forest/30">
        <Package size={iconSize} />
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="relative w-full h-full object-cover transition-opacity duration-500"
        onError={(e) => { e.currentTarget.style.opacity = 0; }}
      />
    </div>
  );
}
