import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import { CarImage } from '../../types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface CarGalleryProps {
  images?: CarImage[];
}

const CarGallery: React.FC<CarGalleryProps> = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (images.length === 0) {
    return (
      <div className="rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80"
          alt="Default car image"
          className="w-full h-[400px] object-cover"
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="rounded-lg overflow-hidden"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          modules={[Thumbs]}
          watchSlidesProgress
          className="thumbs-swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-24 object-cover rounded cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};