"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Slider() {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper" style={{ height: '500px' }}>
                <SwiperSlide>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image
                            src='/background3.jpg'
                            alt='Background'
                            layout='fill'
                            objectFit='cover'
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image
                            src='/background3.jpg'
                            alt='Background'
                            layout='fill'
                            objectFit='cover'
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image
                            src='/background3.jpg'
                            alt='Background'
                            layout='fill'
                            objectFit='cover'
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image
                            src='/background3.jpg'
                            alt='Background'
                            layout='fill'
                            objectFit='cover'
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image
                            src='/background3.jpg'
                            alt='Background'
                            layout='fill'
                            objectFit='cover'
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <Image
                            src='/background3.jpg'
                            alt='Background'
                            layout='fill'
                            objectFit='cover'
                            style={{ borderRadius: '10px' }}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
