"use client";

import ProductCard from "@/components/product/product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RelatedProducts() {
  return (
    <div className="space-y-4">
      <div className="text-2xl font-bold">Related Products</div>

      <Swiper
        spaceBetween={16}
        slidesPerView={5}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ dynamicBullets: true }}
      >
        {[...Array(16)].map((_, id) => (
          <SwiperSlide key={id}>
            <ProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
