
import { X } from 'lucide-react';

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal = ({ src, alt, isOpen, onClose }: ImageModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full h-full max-w-7xl max-h-[95vh] flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10 shadow-lg"
          aria-label="Fechar modal"
        >
          <X className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%',
            width: 'auto',
            height: 'auto'
          }}
        />
      </div>
    </div>
  );
};

export default ImageModal;
