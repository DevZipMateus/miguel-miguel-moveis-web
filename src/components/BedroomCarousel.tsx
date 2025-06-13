import { useState, useRef, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ImageModal from './ImageModal';

const BedroomCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const autoplayRef = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

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

  useEffect(() => {
    if (!selectedImage && autoplayRef.current) {
      autoplayRef.current.play();
    }
  }, [selectedImage]);

  return (
    <>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayRef.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {bedroomImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => handleImageClick(image)}
                  >
                    <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-8 lg:-left-12" />
          <CarouselNext className="hidden sm:flex -right-8 lg:-right-12" />
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
