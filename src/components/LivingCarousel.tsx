
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ImageModal from './ImageModal';

const LivingCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const livingImages = [
    {
      src: '/lovable-uploads/a864bbc8-6bc9-4167-83fd-010110c532b8.png',
      alt: 'Sala de jantar moderna com mesa de vidro e iluminação ambiente'
    },
    {
      src: '/lovable-uploads/a2715fa7-7296-4539-9b7f-fca0d492687b.png',
      alt: 'Cozinha integrada com detalhes ripados e pendentes modernos'
    },
    {
      src: '/lovable-uploads/14c4015a-87cc-4686-9447-2200377ab4ad.png',
      alt: 'Ambiente integrado moderno com área gourmet e plantas decorativas'
    },
    {
      src: '/lovable-uploads/cc217709-62b0-44cd-8f60-a0ba3d0d925b.png',
      alt: 'Adega refrigerada moderna com prateleiras iluminadas'
    }
  ];

  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {livingImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => handleImageClick(image)}
                  >
                    <div className="h-64 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      <ImageModal
        src={selectedImage?.src || ''}
        alt={selectedImage?.alt || ''}
        isOpen={!!selectedImage}
        onClose={closeModal}
      />
    </>
  );
};

export default LivingCarousel;
