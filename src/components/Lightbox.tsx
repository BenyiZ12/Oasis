import * as React from "react";
import { createPortal } from "react-dom";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: Array<{ src: string; alt: string }>;
  initialIndex: number;
}

export function Lightbox({ isOpen, onClose, images, initialIndex = 0 }: LightboxProps) {
  const [index, setIndex] = React.useState(initialIndex);

  if (!isOpen) return null;

  const current = images[index];
  const prev = (index - 1 + images.length) % images.length;
  const next = (index + 1) % images.length;

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") setIndex(prev);
    if (e.key === "ArrowRight") setIndex(next);
  };

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Ampliar imagen"
      className="fixed inset-0 z-50 flex items-center justify-center"
      onKeyDown={handleKey}
    >
      <div
        className="absolute inset-0 bg-carbone/90 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-6 p-4 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-carbone/80 text-white flex items-center justify-center hover:bg-carbone transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-soft bg-carbone shadow-soft">
          <img
            src={current.src}
            alt={current.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-between w-full max-w-xl px-4">
          <button
            onClick={() => setIndex(prev)}
            className="w-10 h-10 rounded-full bg-blanco/90 text-carbone flex items-center justify-center hover:bg-blanco transition-colors disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Imagen anterior"
            disabled={index === 0 && images.length === 1}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-sans text-blanco/70">
            {index + 1} de {images.length}
          </span>
          <button
            onClick={() => setIndex(next)}
            className="w-10 h-10 rounded-full bg-blanco/90 text-carbone flex items-center justify-center hover:bg-blanco transition-colors disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Imagen siguiente"
            disabled={index === images.length - 1 && images.length === 1}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
