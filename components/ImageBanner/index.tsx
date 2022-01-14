/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageBanner = () => {
  return (
    <div className="max-h-screen w-screen relative">
      <Carousel className="max-h-screen" showThumbs={false} autoPlay interval={3000} infiniteLoop>
        <img src="/pics/1.jpg" />
        <img src="/pics/1.jpg" />
        <img src="/pics/1.jpg" />
        <img src="/pics/1.jpg" />
      </Carousel>
    </div>
  )
};

export default ImageBanner;
