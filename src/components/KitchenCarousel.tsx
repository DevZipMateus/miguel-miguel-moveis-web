
import { useState, useRef, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ImageModal from './ImageModal';

const KitchenCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const autoplayRef = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const kitchenImages = [
    {
      src: '/lovable-uploads/1859a9d3-e2a7-432f-9d12-dd39430e1a19.png',
      alt: 'Cozinha moderna com churrasqueira integrada e bancada de granito preto'
    },
    {
      src: '/lovable-uploads/2418291e-de63-442b-a908-29f533e7bfb1.png',
      alt: 'Cozinha minimalista com armários brancos e bancada preta'
    },
    {
      src: '/lovable-uploads/3c1e952b-8ba2-412f-afbd-d8db7f3ef268.png',
      alt: 'Cozinha compacta com iluminação LED sob os armários'
    },
    {
      src: '/lovable-uploads/83227f46-b78c-4afd-a5ae-54d3a071ed84.png',
      alt: 'Cozinha em L com ilha central e armários planejados'
    },
    {
      src: '/lovable-uploads/59dad0f1-ff07-49aa-b8e4-05504bb1feca.png',
      alt: 'Cozinha com revestimento hexagonal colorido e armários cinza'
    },
    {
      src: '/lovable-uploads/58d1eb73-f1a3-4af4-a591-fc41bd120543.png',
      alt: 'Cozinha com torre de fornos embutidos e acabamento moderno'
    },
    {
      src: '/lovable-uploads/5ee3a263-12f1-487a-bca5-f92b60bf047d.png',
      alt: 'Cozinha linear com armários verdes e iluminação sob os móveis'
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
            {kitchenImages.map((image, index) => (
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

export default KitchenCarousel;
