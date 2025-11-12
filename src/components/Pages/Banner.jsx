import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

 
import img1 from '../../assets/gas dhanmondi.jpeg';
import img2 from '../../assets/gas-uttara.jpg';
import img3 from '../../assets/Internet banani.jpg';
import img4 from '../../assets/Power Electricity.webp';
import img5 from '../../assets/water-supply.avif';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const images = [img4, img5, img2, img3, img1];
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative py-10 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black dark:text-white px-4 sm:px-2">
        ⚡Manage your available bills
      </h2>

      <div className="relative w-full md:w-5/5 overflow-hidden rounded-3xl shadow-lg">
        
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="min-w-full relative" data-aos="fade-right">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover" 
                style={{ filter: "blur(2px)" }}  
              />
               
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center  rounded px-4 py-2">
                  💡 Bill Management System makes your payments simple, fast, secure, and completely stress-free! ⚡
                </h3>
              </div>
            </div>
          ))}
        </div>

        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6">
          <button
            onClick={prevSlide}
            className="text-white text-3xl sm:text-4xl bg-black bg-opacity-25 p-2 sm:p-3 rounded-full hover:bg-opacity-50 transition"
          >
            &#60;
          </button>

          <button
            onClick={nextSlide}
            className="text-white text-3xl sm:text-4xl bg-black bg-opacity-25 p-2 sm:p-3 rounded-full hover:bg-opacity-50 transition"
          >
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
