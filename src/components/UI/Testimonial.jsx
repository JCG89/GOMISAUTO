import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import "../../styles/Testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sed nulla debitis nihil expedita, nesciunt neque adipisci maxime
          deleniti accusantium quidem officia? Dolorem sunt perspiciatis
          distinctio cum repudiandae. Dignissimos, ipsum?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="tofs" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jean Christophe Gomis</h6>
            <p className="section_description">Client</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sed nulla debitis nihil expedita, nesciunt neque adipisci maxime
          deleniti accusantium quidem officia? Dolorem sunt perspiciatis
          distinctio cum repudiandae. Dignissimos, ipsum?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="tofs" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jean Christophe Gomis</h6>
            <p className="section_description">Client</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sed nulla debitis nihil expedita, nesciunt neque adipisci maxime
          deleniti accusantium quidem officia? Dolorem sunt perspiciatis
          distinctio cum repudiandae. Dignissimos, ipsum?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="tofs" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jean Christophe Gomis</h6>
            <p className="section_description">Client</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          sed nulla debitis nihil expedita, nesciunt neque adipisci maxime
          deleniti accusantium quidem officia? Dolorem sunt perspiciatis
          distinctio cum repudiandae. Dignissimos, ipsum?
        </p>
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="tofs" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jean Christophe Gomis</h6>
            <p className="section_description">Client</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
