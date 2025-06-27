import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import 'swiper/css/autoplay';
import shopifyImg from "../assets/shopify-icon.png";
import slackImg from "../assets/slack-icon.png";
import adobeImg from "../assets/adobe-icon.png";
import asanaIcon from "../assets/asana-icon.png";
import linearIcon from "../assets/linear-icon.png";
const TopCompanies = () => {
  return (
    <section className="text-white bg-[#309689] p-[40px] rounded-2xl shadow-[0px_-5px_23px_0px_#011F5B]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3.4}
      >
        <SwiperSlide>
          <img src={shopifyImg} alt="shopify" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slackImg} alt="slack" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={adobeImg} alt="adobe" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={asanaIcon} alt="asana" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={linearIcon} alt="linear" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TopCompanies;
