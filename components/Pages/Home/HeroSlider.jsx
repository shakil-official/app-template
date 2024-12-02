import Slider from "react-slick";
import React from "react";
// import './styles.css'; // Assuming you're using an external CSS file for styles

const HeroSlider = ({ slideData }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <>
            <div className="container pt-6 lg:pt-0 mt-3">
                {/* Desktop Slider */}
                <div className="desktop-slider lg:block hidden">
                    <Slider {...settings}>
                        {slideData.map((item, index) => (
                            <div className="outline-none border-none relative" key={index}>
                                <img
                                    className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
                                    src={item.img}
                                    alt="banner"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Mobile Image */}
                <div className="mobile-slider lg:hidden block">
                    {slideData.map((item, index) => (
                        <div key={index}>
                            <img
                                className="mobile-image"
                                src={item.img}
                                alt="banner"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HeroSlider;
