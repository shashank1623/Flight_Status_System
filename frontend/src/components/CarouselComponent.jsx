import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <div className="bg-blue-50 py-8 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          What’s new?
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
          Find <span className="text-green-500">exclusive offers</span> and the best deals available for you.
        </p>
      </div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        className="max-w-screen-lg mx-auto"
      >
        <div className="relative">
          <img src="https://www.goindigo.in/content/dam/s6web/in/en/assets/homepage/homepage/new_images/hotels_22jul_1753X853.jpg" alt="Europe" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Europe</h3>
              <p className="mt-2 text-lg sm:text-xl lg:text-2xl">
                Look at the beauty of the places not just from home, but from the place where you can see it better. Get a flight now!
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">Book</button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://www.goindigo.in/content/dam/s6web/in/en/assets/homepage/homepage/new_images/hotels_22jul_1753X853.jpg" alt="Asia" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Asia</h3>
              <p className="mt-2 text-lg sm:text-xl lg:text-2xl">
                Discover the rich cultures and stunning landscapes of Asia. Book your adventure today!
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">Book</button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://www.goindigo.in/content/dam/s6web/in/en/assets/homepage/homepage/new_images/hotels_22jul_1753X853.jpg" alt="America" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">America</h3>
              <p className="mt-2 text-lg sm:text-xl lg:text-2xl">
                Explore the vast and diverse landscapes of America. Get ready for an unforgettable journey!
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">Book</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
