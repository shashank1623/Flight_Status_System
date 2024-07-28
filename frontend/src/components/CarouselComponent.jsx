import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
  return (
    <>
    <div className='bg-[#e0e7ff]'>
    <div className="text-center mb-8 pt-9">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#757C8A]">
            What’s new?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
            Find <span className="text-green-500">exclusive offers</span> and the best deals available for you.
          </p>
        </div>
    <div className="flex justify-center  px-4 pb-9 sm:px-8 lg:px-16">
      <div className="w-full max-w-screen-lg bg-white rounded-3xl shadow-lg p-4 sm:p-8 lg:p-12" style={{ width: '80%' }}>
        <Carousel
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showStatus={false}
          className="rounded-3xl"
        >
          <div className="relative">
            <img src="https://s6web-prod.goindigo.in/content/dam/s6web/in/en/assets/paris.png" alt="Europe" className="rounded-3xl" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-3xl">
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
            <img src="https://s6web-prod.goindigo.in/content/dam/s6web/in/en/assets/discoverdestination/images/bangkok-pariticpate-image.jpg" alt="Asia" className="rounded-3xl" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-3xl">
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
            <img src="https://www.goindigo.in/content/dam/s6web/in/en/assets/homepage/homepage/new_images/hotels_22jul_1753X853.jpg" alt="America" className="rounded-3xl" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-3xl">
              <div className="text-center text-white">
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full">Book</button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
    </div>
    </>
    
  );
};

export default CarouselComponent;
