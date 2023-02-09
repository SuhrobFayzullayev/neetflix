"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
type PageProps = {
  categories: {
    name?: string;
    id?: number | string;
  }[];
};

export default function Categories({ categories }: PageProps) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={`mySwiper ${styles.categories}`}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {categories?.map((category) => (
          <SwiperSlide key={category.id} className={styles.category}>
            <Link
              className={`${styles.category} text-white`}
              href={`/${category.id}`}
            >
              {category.name}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export { CategoriesLoading } from "./loading";
