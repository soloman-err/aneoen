import React from 'react';
import img1 from '../../assets/m024t0154_a_cassette_player_20jun22_color.jpg';
// import img2 from '../../assets/m024t0164_c_paper_bag_29june22.jpg';
// import img3 from '../../assets/m505t0006_shoe_16_june22_03.jpg';
// import img4 from '../../assets/m507t0006_retro_tv_20june22_03.jpg';


const Carousel = () => {
    return (
        <div className="carousel mt-10 w-full h-[30vh] md:h-[50vh] lg:h-[60vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-cover" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carousel;