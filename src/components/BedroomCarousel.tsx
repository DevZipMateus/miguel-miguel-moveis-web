
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ImageModal from './ImageModal';

const BedroomCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const bedroomImages = [
    {
      src: '/lovable-uploads/960270c3-fa6e-4334-8fa4-9bb2e76d24b5.png',
      alt: 'Guarda-roupa planejado branco com portas lisas e piso de madeira'
    },
    {
      src: '/lovable-uploads/8cbbfab8-638c-4050-98fd-9d80bdea38ee.png',
      alt: 'Closet planejado com prateleiras, gavetas e cabideiros organizados'
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
            {bedroomImages.map((image, index) => (
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

export default BedroomCarousel;
