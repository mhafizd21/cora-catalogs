"use client"
import React, { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import clsx from 'clsx';

interface GalleryProps {
  images: string[]
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [thumbnail, setThumbnail] = useState(images[0])
  return (
    <>
      <div>
        <Image src={thumbnail} alt='test' width={0} height={0} sizes="100vw" className='product-gallery' />
      </div>
      <Swiper
        spaceBetween="52px"
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
        breakpoints={{
          992: {
            spaceBetween: '20px'
          }
        }}
      >
        {images.map(image => (
          <SwiperSlide 
            key={image}
            onClick={() => setThumbnail(image)}>
            <Image
              alt="test"
              width={100}
              height={100}
              src={image}
              className={clsx('product-gallery__thumbnail', image === thumbnail ? 'product-gallery__thumbnail--active' : '')}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Gallery