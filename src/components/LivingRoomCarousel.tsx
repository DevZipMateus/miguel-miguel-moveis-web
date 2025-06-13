
import { useState, useRef, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ImageModal from './ImageModal';

const LivingRoomCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const autoplayRef = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const livingRoomImages = [
    {
      src: '/lovable-uploads/88e641b4-1bf2-4a3d-ae1a-50d885ef36ad.png',
      alt: 'Sala de estar moderna com painel de TV e móvel suspenso branco'
    },
    {
      src: '/lovable-uploads/f05c4d48-3ee1-4786-abff-1058aac69cea.png',
      alt: 'Sala com rack de madeira e TV na parede'
    },
    {
      src: '/lovable-uploads/f1abadfa-1043-4340-a061-2e7d78c344a8.png',
      alt: 'Móvel suspenso branco com quadro decorativo'
    },
    {
      src: '/lovable-uploads/6ae5ab4d-0058-4c45-bd79-fb9cdd8b0b2b.png',
      alt: 'Buffet de madeira com detalhes ripados'
    },
    {
      src: '/lovable-uploads/f4127dde-66b2-467b-94c8-147785d748d3.png',
      alt: 'Estante moderna com estrutura metálica e madeira'
    },
    {
      src: '/lovable-uploads/ba5cead6-71ea-48ae-aecf-937579e74330.png',
      alt: 'Painel ripado de madeira para TV'
    },
    {
      src: '/lovable-uploads/e297724c-4f5d-4345-87bd-39b9798cbd3a.png',
      alt: 'Móvel planejado com iluminação LED integrada'
    },
    {
      src: '/lovable-uploads/dcebe72f-be78-44d5-b4b5-396f1b989de7.png',
      alt: 'Rack suspenso com painel ripado'
    },
    {
      src: '/lovable-uploads/5f15a0a0-ac93-4c4d-a1d4-d1f1016df42d.png',
      alt: 'Sala clean com painel de TV e móveis brancos'
    },
    {
      src: '/lovable-uploads/79da1ff7-d13f-4614-ac6c-6284eb05d660.png',
      alt: 'Sala de jantar moderna com mesa de vidro e lustre pendente'
    },
    {
      src: '/lovable-uploads/6dcb5cdd-7e8c-4928-ac74-793845ac1452.png',
      alt: 'Cozinha gourmet integrada com detalhes ripados e pendentes modernos'
    },
    {
      src: '/lovable-uploads/c61a7346-9562-4520-b502-5546137e6865.png',
      alt: 'Ambiente integrado com sala de jantar, cozinha e área gourmet moderna'
    },
    {
      src: '/lovable-uploads/31545d24-04e2-4312-8018-61df19db0589.png',
      alt: 'Bar residencial com adega refrigerada e prateleiras iluminadas'
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
      // Add safety check to ensure the plugin has the necessary methods
      try {
        if (typeof autoplayRef.current.play === 'function') {
          autoplayRef.current.play();
        }
      } catch (error) {
        console.log('Autoplay restart failed:', error);
      }
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
            {livingRoomImages.map((image, index) => (
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

export default LivingRoomCarousel;
