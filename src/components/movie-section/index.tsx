"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./styles.module.css";

type PageProps = {
  title?: string;
  movies?: {
    id?: number | string;
    title?: string;
    poster_path?: string;
  }[];
};

function MoviesSection({ title, movies }: PageProps) {

  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      {/* <Swiper
        loop={false}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className={`mySwiper ${styles.movies}`}
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id} className={styles.movie}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title!}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}

export { MoviesSectionLoading } from "./loading";
export { MoviesSection };
