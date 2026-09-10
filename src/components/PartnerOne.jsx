"use client";
import Slider from "react-slick";

const partners = [
  { file: "asshu.png", name: "Association of Secondary School Headteachers of Uganda" },
  { file: "namudeo.png", name: "NAMUDEO-U" },
  { file: "unisa.png", name: "Uganda National Inspectors of Schools Association" },
  { file: "mastercard.png", name: "Mastercard Foundation" },
  { file: "echidna.png", name: "Echidna Giving" },
  { file: "usaid.png", name: "USAID" },
  { file: "ubs.png", name: "UBS Optimus Foundation" },
  { file: "ikea.png", name: "IKEA Foundation" },
  { file: "jacobs.png", name: "Jacobs Foundation" },
  { file: "elma.png", name: "The ELMA Foundation" },
];

const PartnerOne = () => {
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
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 420,
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
                  <div className='swiper-slide' key={index}>
                    <div className='partner__slider-single'>
                      <img
                        src={`/assets/images/sponsor/${partner.file}`}
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
