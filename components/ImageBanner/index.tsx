/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ImageBanner = () => {
  return (
    <div className="h-screen w-screen relative">
     <Carousel>
      <img src="/pics/1.jpg"/>
      <img src="/pics/1.jpg"/>
     </Carousel>
    </div>
  );
};

export default ImageBanner;
