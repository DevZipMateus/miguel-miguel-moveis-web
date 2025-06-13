
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import ImageModal from './ImageModal';

const LivingRoomCarousel = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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
            {livingRoomImages.map((image, index) => (
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

export default LivingRoomCarousel;
