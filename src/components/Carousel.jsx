import { useState } from "react";
import { useEffect } from "react";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"


const Carousel = () => {
  const images = [img1, img2, img3, img4 , img5]; 
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (

  <div className="w-full mt-20 ">
 
  <img
       src={images[currentIndex]}
      alt={`Slide ${currentIndex + 1}`}
     className="w-full h-[420px]  object-cover m-0 transition duration-500"
    />  
 </div>
);

  
};

export default Carousel;