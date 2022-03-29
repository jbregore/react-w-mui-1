import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

import "./Clients.css";

import image from "../../assets/index";

const clientImage = [
  {
    id: 1,
    src: image.client1,
  },
  {
    id: 2,
    src: image.client2,
  },
  {
    id: 3,
    src: image.client3,
  },
  {
    id: 4,
    src: image.client4,
  },
  {
    id: 5,
    src: image.client5,
  },
  {
    id: 6,
    src: image.client6,
  },
  {
    id: 7,
    src: image.client7,
  },
  {
    id: 8,
    src: image.client8,
  },
];

const Clients = () => {
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => setWindowSize(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app__clients section__padding">
      <div style={{ marginBottom: 50, position: "relative" }}>
        <h3 className="app__head-subtitle">Clients</h3>
        <h1 className="app__head-title content__title">They trusted us</h1>
      </div>

      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={windowSize.width > 1150 ? 4 
            : windowSize.width <= 950 && windowSize.width >= 651 ? 3 
            : windowSize.width <= 650 ? 2 : 1 } 
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          style={{ paddingTop: 25, paddingBottom: 30 }}
        >
          {clientImage.map((item, index) => (
            <SwiperSlide style={{ width: 300, cursor: "pointer" }} key={index}>
              <img src={item.src} alt="" style={{ width: 100 }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
};

export default Clients;
