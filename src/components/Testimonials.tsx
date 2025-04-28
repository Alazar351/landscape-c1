"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";

import { Quote } from "@public/index";
import { reviews } from "@/data/clients";
import Image from "next/image";
import { fadeInAnimationBT } from "@/data/motions";
import FramerFade from "./FramerAnimations";

export default function Testimonials() {
  return (
    <section className="mb-[60px] py-[60px]">
      <div className="container flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <FramerFade variant={fadeInAnimationBT}>
            <h2 className="uppercase tracking-[3.8px] text-primary">
              Client Testimonials
            </h2>
          </FramerFade>
          <FramerFade variant={fadeInAnimationBT}>
            <p className="my-5 font-jost text-[2.875rem] font-medium tracking-[-1px] text-[#181818]">
              What our clients say
            </p>
          </FramerFade>
        </div>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={10}
          loop={true}
          speed={750}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper w-full"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide
              className="flex items-center justify-center py-16"
              key={idx}
            >
              <div className="relative flex w-full flex-col items-center justify-center rounded-md">
                <div className="pointer-events-none absolute inset-x-0 -top-10 z-10 flex justify-center">
                  <Image
                    src={review.src}
                    alt="Profile picture of client"
                    width={80}
                    height={80}
                    placeholder="blur"
                    className="rounded-full"
                  />
                </div>
                <div className="group/body relative flex h-[305px] w-full max-w-[400px] flex-col items-center justify-center overflow-hidden rounded-sm bg-background px-6 text-center text-primary-foreground">
                  <p className="mb-4 leading-[30px]">{review.desc}</p>
                  <p className="mb-2 font-bold">{review.name}</p>
                  <p className="">{review.position}</p>
                  <div className="pointer-events-none absolute inset-0 z-0 translate-y-[100%] rounded-md border-2 border-primary-foreground opacity-0 transition-all duration-300 ease-in-out group-hover/body:translate-y-0 group-hover/body:opacity-100">
                    <Image
                      src={"/assets/mask-testimonial-box.png"}
                      alt="Background"
                      aria-hidden
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-x-0 -bottom-10 z-10 flex justify-center">
                  <div className="rounded-full bg-white p-5 shadow-lg">
                    <Quote className="size-10 fill-primary" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
