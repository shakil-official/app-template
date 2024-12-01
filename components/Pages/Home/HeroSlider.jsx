import Slider from "react-slick";
import React from "react";


const HeroSlider = ({slideData}) => {

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
                <Slider {...settings}>
                    {slideData.map((item, index) => (
                            <div className="outline-none border-none relative" key={index}>
                                {/*<div*/}
                                {/*    className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">*/}
                                {/*    <h3 className="text-weblite text-[24px] lg:text-[28px]">{item.title}</h3>*/}
                                {/*    <h2 className="text-gray-800 text-[26px] lg:text-[44px] font-bold leading-[1.2]">*/}
                                {/*        {item.mainTitle}*/}
                                {/*    </h2>*/}
                                {/*    <h3 className="text-[24px] text-gray-500">starting at{" "}*/}
                                {/*        <b className="text-[20px] md:text-[24px] lg:text-[30px]">{item.price}</b>.00*/}
                                {/*    </h3>*/}
                                {/*    <div*/}
                                {/*        className="bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-dark">*/}
                                {/*        Shop Now*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <img
                                    className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
                                    src={item.img}
                                    alt="banner"
                                    // width={2000}
                                    // height={2000}
                                />
                            </div>
                        )
                    )}
                </Slider>
            </div>


        </>
    )
}

export default HeroSlider;
