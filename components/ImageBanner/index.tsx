/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageBanner = () => {
  return (
    <div className="w-screen">
      <Carousel
        showThumbs={false}
        autoPlay
        interval={3000}
        infiniteLoop
        showStatus={false}
      >
        {Array.from(Array(8).keys()).map((i) => (
          <img key={i} src={`/pics/${i + 1}.jpg`} alt="Selfies" />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageBanner;
