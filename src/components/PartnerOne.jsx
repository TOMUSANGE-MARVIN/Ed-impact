"use client";
import { mediaSrc } from "@/lib/image";
import Slider from "react-slick";

const defaultPartners = [
  { name: "Mastercard Foundation", logo: { url: "/assets/images/sponsor/mastercard.webp" } },
  { name: "Social Initiative", logo: { url: "/assets/images/sponsor/social-initiative.webp" } },
  { name: "Echidna Giving", logo: { url: "/assets/images/sponsor/echidna.webp" } },
];

const PartnerOne = ({ partners = defaultPartners }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className='partner'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='partner__slider swiper'>
              <Slider {...settings} className='swiper-wrapper'>
                {[...partners, ...partners].map((partner, index) => (
                  <div className='swiper-slide' key={partner.id ? `${partner.id}-${index}` : index}>
                    <div className='partner__slider-single'>
                      <img
                        src={mediaSrc(partner.logo?.url, 384)}
                        alt={partner.name}
                        title={partner.name}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerOne;
