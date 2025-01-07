'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

interface img {
    src: string,
    alt: string
}

interface ImageSliderProps {
    imgProps: img[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imgProps }) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={1000} 
                effect="fade" 
                fadeEffect={{
                    crossFade: true, 
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper max-w-[400px] max-sm:w-[300px] object-fill"
            >
                {imgProps.map((e, i) => {
                    return (
                        <SwiperSlide className=' sm:w-[250px] md:w-[300px]' key={i}><img className='rounded-md object-center' src={e.src} alt={e.alt} /></SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default ImageSlider
