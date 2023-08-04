import React from "react";
import GameImage from "../images/game.png";
import dashboardImage from "../images/dashboard.jpg";
import contactImage from "../images/contact2.png";
import programImage from "../images/hotel.png";
import programImage2 from "../images/constructor.png";
import programImage3 from "../images/program3.jpg";
import cardImage from "../images/team-2.jpg";
import cardImage2 from "../images/team-1.jpg";
import cardImage3 from "../images/team-3.jpg";
import cardImage4 from "../images/team-4.jpg";
import CustomizeButton from "../components/CustomizeButton";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Portfolio = () => {
  return (
    <section name="portfolio" className="">
      <div className="portfolio py-20 ">
        <div className="title container pt-[90px] pb-[40px] px-8 md:px-20">
          <h3 className=" text-2xl md:text-4xl tracking-tight uppercase font-semibold relative inline-block align-top z-10 mb-[10px] py-[10px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#d9832e] after:w-[50px]">
            Latest Works
          </h3>
          <p className=" text-slate-600 md:tracking-wider text-sm">
            A JUNIOR WEB DEVELOPER <br className=" block md:hidden" /> BASED IN
            MYANMAR
          </p>
        </div>
        <div className=" container md:px-10">
          <div className=" grid z-[-1] md:grid-cols-3 gap-8 mx-10 ">
            <div>
              {/* game */}
              <a
                href="https://game-platform-tawny.vercel.app/"
                className=" link-overlay"
                target="_blank"
              >
                <div className=" overflow-hidden relative group bg-black rounded shadow-lg">
                  <img
                    src={GameImage}
                    className="w-full h-[350px] object-cover transition duration-1000 ease-in-out delay-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:opacity-60 "
                    alt=""
                  />
                  <div>
                    <div className="absolute top-[20%] left-[20%] hidden group-hover:block duration-1000 ease-in-out delay-300">
                      {" "}
                      <h3 className=" text-slate-100 text-2xl">
                        GAME PLATFORM{" "}
                      </h3>
                    </div>
                    <div className="absolute top-[30%] left-[10%] hidden group-hover:block duration-1000 ease-in-out delay-300">
                      {" "}
                      <p className=" text-slate-100">
                        Using react tailwind react-icons react-router-dom
                        react-redux react-fast-marquee swiper react-lazyload
                        redux-persist react-toastify{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around bg-gray-300">
                  <div className=" py-4">
                    {" "}
                    <CustomizeButton> To View </CustomizeButton>
                  </div>
                </div>
              </a>
            </div>
            {/* Contact */}
            <a
              href="https://contact-app-7mg5.vercel.app/"
              className=" link-overlay"
              target="_blank"
            >
              <div className=" overflow-hidden relative group bg-black rounded shadow-lg">
                <img
                  src={contactImage}
                  className="w-full h-[350px] object-cover transition duration-700 ease-in-out delay-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:opacity-60 "
                  alt=""
                />
                <div>
                  <div className="absolute top-[20%] left-[20%] hidden group-hover:block duration-1000 ease-in-out delay-300">
                    {" "}
                    <h3 className=" text-slate-100 text-2xl">CONTACT APP</h3>
                  </div>
                  <div className="absolute top-[30%] left-[10%] hidden group-hover:block duration-1000 ease-in-out delay-300">
                    {" "}
                    <p className=" text-slate-100">
                      Using react tailwind react-icons react-router-dom
                      react-redux react-toastify reduxjs-toolkit mantine react
                      lottie{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around bg-gray-300">
                <div className=" py-4">
                  {" "}
                  <CustomizeButton> To View </CustomizeButton>
                </div>
              </div>
            </a>
            {/* dashboard   src={dashboardImage} href="https://admin-dashboard-xi-one.vercel.app/" */}
            <a
              href="https://admin-dashboard-xi-one.vercel.app/"
              className=" link-overlay"
              target="_blank"
            >
              <div className=" overflow-hidden relative group bg-black rounded shadow-lg">
                <img
                  src={dashboardImage}
                  className="w-full h-[350px] object-cover transition duration-700 ease-in-out delay-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:opacity-60 "
                  alt=""
                />
                <div>
                  <div className="absolute top-[20%] left-[20%] hidden group-hover:block duration-1000 ease-in-out delay-300">
                    {" "}
                    <h3 className=" text-slate-100 text-2xl">DASHBOARD </h3>
                  </div>
                  <div className="absolute top-[30%] left-[10%] hidden group-hover:block duration-1000 ease-in-out delay-300">
                    {" "}
                    <p className=" text-slate-100">
                      Using react tailwind react-icons react-router-dom
                      react-redux react-charjs{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around bg-gray-300">
                <div className=" py-4">
                  {" "}
                  <CustomizeButton> To View </CustomizeButton>
                </div>
              </div>
            </a>

            {/* hotel */}

            <a
              href="https://hotel-website-team-1bjeg7wno-khant-nyar-ko-ko.vercel.app/"
              className=" link-overlay"
              target="_blank"
            >
              <div className=" overflow-hidden relative group bg-black rounded shadow-lg">
                <img
                  src={programImage}
                  className="w-full h-[350px] object-cover transition duration-1000 ease-in-out delay-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:opacity-60 "
                  alt=""
                />
                <div>
                  <div className="absolute top-[20%] left-[30%] hidden group-hover:block duration-1000 ease-in-out delay-300">
                    
                    <h3 className=" text-slate-100 text-2xl">HOTEL</h3>
                  </div>
                  <div className="absolute top-[30%] left-[10%] hidden group-hover:block duration-1000 ease-in-out delay-300">
                  
                    <p className=" text-slate-100 ">
                      Using animate.css framer-motion react-datepicker
                      react-icons react-router-dom swiper
                    </p>
                  </div>
                </div>

              </div>
              <div className="flex justify-around bg-gray-300">
                <div className=" py-4">
                  {" "}
                  <CustomizeButton> To View </CustomizeButton>
                </div>
              </div>
            </a>
            {/*Architecture  src={programImage2}  href="https://team-l-contact.netlify.app"*/}
            <a
              href="https://bauen-architecture-and-interior-theme.netlify.app/"
              className=" link-overlay"
              target="_blank"
            >
              <div className=" overflow-hidden relative group bg-black rounded shadow-lg">
                <img
                  src={programImage2}
                  className="w-full h-[350px] object-cover transition duration-1000 ease-in-out delay-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:opacity-60 "
                  alt=""
                />
                <div>
                  <div className="absolute top-[20%] left-[20%] hidden group-hover:block duration-1000 ease-in-out delay-300">
                    {" "}
                    <h3 className=" text-slate-100 text-2xl">ARCHITECTURE </h3>
                  </div>
                  <div className="absolute top-[30%] left-[10%] hidden group-hover:block duration-1000 ease-in-out delay-300">
                    {" "}
                    <p className=" text-slate-100">
                      Using react flowbite react-circular-progressbar
                      react-transition-group swiper{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-around bg-gray-300">
                <div className=" py-4">
                  {" "}
                  <CustomizeButton> To View </CustomizeButton>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="testimonials bg-[#EAEDF1] md:py-20">
          <div className="title container pt-[90px] pb-[40px] px-10 md:px-20">
            <h3 className=" text-2xl md:text-4xl tracking-tight uppercase font-semibold relative inline-block align-top z-10 mb-[10px] py-[10px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#d9832e] after:w-[50px]">
              TESTIMONIALS
            </h3>
            <p className=" text-slate-600 md:tracking-wider text-sm">
              A JUNIOR WEB DEVELOPER <br className=" block md:hidden" /> BASED
              IN MYANMAR
            </p>
          </div>
          <div className="container px-5 md:px-20 pt-[90px] pb-[40px]">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={1}
              slidesPerView={1}
              loop={true}
              // onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              autoplay={{ delay: 1000 }}
              breakpoints={{
                // Set breakpoints for different screen sizes
                768: {
                  slidesPerView: 2, // Show two slides on screens wider than 768px
                },
              }}
            >
              <SwiperSlide>
                <div className=" grid grid-cols-10 md:grid-cols-4 gap-2 md:gap-5 border border-[#EEDDDC] w-[350px] md:w-[550px] bg-white p-2 md:p-5">
                  <img
                    src={cardImage}
                    alt=""
                    className=" w-[70px] md:w-[120px] col-span-2 md:col-span-1 h-auto md:h-[120px] overflow-hidden rounded-full rounded-t-none rounded-l-full"
                  />
                  <div className=" col-span-8 md:col-span-3 flex flex-col gap-2">
                    <p className=" text-slate-600 text-sm md:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, fugit placeat. Consectetur, doloremque tempore
                      nobis quo accusantium.
                    </p>
                    <h4 className=" font-semibold text-lg">Elon 2Musk</h4>
                    <p className=" text-slate-600">Co-founder</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" grid grid-cols-10 md:grid-cols-4 gap-2 md:gap-5 border border-[#EEDDDC] w-[350px] md:w-[550px] bg-white p-2 md:p-5">
                  <img
                    src={cardImage2}
                    alt=""
                    className=" w-[70px] md:w-[120px] col-span-2 md:col-span-1 h-auto md:h-[120px] overflow-hidden rounded-full rounded-t-none rounded-l-full"
                  />
                  <div className=" col-span-8 md:col-span-3 flex flex-col gap-2">
                    <p className=" text-slate-600 text-sm md:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, fugit placeat. Consectetur, doloremque tempore
                      nobis quo accusantium.
                    </p>
                    <h4 className=" font-semibold text-lg">Elon 2Musk</h4>
                    <p className=" text-slate-600">Co-founder</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" grid grid-cols-10 md:grid-cols-4 gap-2 md:gap-5 border border-[#EEDDDC] w-[350px] md:w-[550px] bg-white p-2 md:p-5">
                  <img
                    src={cardImage3}
                    alt=""
                    className=" w-[70px] md:w-[120px] col-span-2 md:col-span-1 h-auto md:h-[120px] overflow-hidden rounded-full rounded-t-none rounded-l-full"
                  />
                  <div className=" col-span-8 md:col-span-3 flex flex-col gap-2">
                    <p className=" text-slate-600 text-sm md:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, fugit placeat. Consectetur, doloremque tempore
                      nobis quo accusantium.
                    </p>
                    <h4 className=" font-semibold text-lg">Elon 2Musk</h4>
                    <p className=" text-slate-600">Co-founder</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" grid grid-cols-10 md:grid-cols-4 gap-2 md:gap-5 border border-[#EEDDDC] w-[350px] md:w-[550px] bg-white p-2 md:p-5">
                  <img
                    src={cardImage4}
                    alt=""
                    className=" w-[70px] md:w-[120px] col-span-2 md:col-span-1 h-auto md:h-[120px] overflow-hidden rounded-full rounded-t-none rounded-l-full"
                  />
                  <div className=" col-span-8 md:col-span-3 flex flex-col gap-2">
                    <p className=" text-slate-600 text-sm md:text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, fugit placeat. Consectetur, doloremque tempore
                      nobis quo accusantium.
                    </p>
                    <h4 className=" font-semibold text-lg">Elon 2Musk</h4>
                    <p className=" text-slate-600">Co-founder</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div> */}
    </section>
  );
};

export default Portfolio;
