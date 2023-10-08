import React from "react";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import about from "../images/pf3.jpg";
import reacticon from "../images/react.gif";
const About = () => {
  return (
    <section name="about">
      <div className="flex justify-center">
        {/* About Gp */}
        <div className="bg-white sm:w-[100%] w-[100%]   mt-8 sm:mt-0 sm:h-[550px]   px-8  ">
          <div data-aos="zoom-out-right" className="text-2xl md:text-4xl tracking-tight uppercase font-semibold relative inline-block align-top z-10 mb-[10px] py-[10px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#d9832e] after:w-[50px]">
            ABOUT ME
          </div>
          {/* <p className="text-sm font-normal text-[#555a64] mt-5">
            A FRONTED DEVELOPER BASED IN MYANMAR
          </p> */}
          {/* img */}
          <div className="sm:flex flex-wrap ">
            <div data-aos="flip-left" className=" sm:flex sm:w-[40%] w-[100%]  ">
              {/* relative group */}

              <img
                src={about}
                className="sm:w-[99%] w-[130%] sm:h-[444px] h-[250px]"
              />
            </div>
            {/* Tony Smith */}
            <div data-aos="fade-down" className="sm:w-[60%] w-[100%] ">
              <div className="flex">
                <img
                  src={reacticon}
                  className="h-[8%] sm:w-[8%] w-[10%] mt-4 sm:mt-0 "
                />
                <div className="mt-4 text-[#E88534]">Education Background</div>
              </div>

              <div>
                <div className="flex sm:px-14 sm:mt-1 mt-2 px-4 font-semibold">
                  Technological University(Dawei)
                </div>
                <div className="flex sm:px-14 sm:mt-1 mt-2 px-4 font-semibold">
                  Bachelor of Engineering Fifth Year Student 
                </div>
              </div>

              <div className="flex w-[90%]">
                <img
                  src={reacticon}
                  className="h-[8%] w-[10%] sm:w-[8%]  mt-4 sm:mt-0  "
                />
                <div className="mt-4 text-[#E88534]">Personal Information</div>
              </div>

              <div className=" flex-wrap">
                <div className="ml-[10%] sm:ml-14">
                  {/* birthday group */}
                  <table>
                    <tr>
                      <td>
                        <div className="text-sm font-semibold">
                          Date of Birth
                        </div>
                      </td>
                      <td>
                        <div class="text-[#555a64] text-sm sm:ml-12">
                          25 AUG 1998
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-sm font-semibold">Passport No</div>
                      </td>
                      <td>
                        <div class="text-[#555a64] text-sm sm:ml-12">
                          MH150498
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-sm font-semibold">Nationality</div>
                      </td>
                      <td>
                        <div class="text-[#555a64] text-sm sm:ml-12">
                          Myanmar
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-sm font-semibold">Address</div>
                      </td>
                      <td>
                        <div class="text-[#555a64] text-sm sm:ml-12">
                          YANGON
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-sm font-semibold">
                          Marital Status
                        </div>
                      </td>
                      <td>
                        <div class="text-[#555a64] text-sm sm:ml-12">
                          Single
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-sm font-semibold">Experience</div>
                      </td>
                      <td>
                        <div class="text-[#555a64] text-sm sm:ml-12">
                          1 year
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="text-sm font-semibold">
                          Availability
                        </div>
                      </td>
                      <td>
                        <div class="text-[#555a64] text-sm sm:ml-12">
                          Immediately
                        </div>
                      </td>
                    </tr>
                    {/* <tr>
    <td>
      <div className="text-sm font-semibold">English 4 skill</div>
    </td>
    <td>
      <div class="text-[#555a64] text-sm">Intermediate</div>
    </td>
  </tr> */}
                  </table>
                </div>

                <div className="sm:block hidden">
                  <div className="flex ">
                    <img
                      src={reacticon}
                      className="h-[10%] w-[10%]  sm:h-[14%]  sm:w-[7%]  mt-4 sm:mt-0  "
                    />
                    <div className="mt-4 text-[#E88534] sm:h-5">Languages</div>
                  </div>

                  <div className="flex sm:px-14 mt-2  ">
                    <div className="sm:w-[19%] w-[38%] text-sm font-semibold ">
                      English 4 Skill
                    </div>
                    <div class="text-[#555a64]   text-sm sm:ml-12">
                      Intermediate
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="text-sm font-bold bg-[#D9832E]  text-white sm:w-[22%] w-[40%] h-[47px] flex justify-center items-center mt-7 sm:mx-14 mx-4 hover:bg-black">
                DOWNLOAD CV
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* my skill Gp */}
      <div data-aos="zoom-in" className="flex justify-center my-20">
        <div className="h-[390px] sm:w-[92%] w-[100%] ">
          <div className="text-black text-4xl font-bold px-4">MY SKILLS</div>
          <p className="text-sm font-normal text-[#555a64] px-4 mt-6">
            {" "}
            A FRONTED DEVELOPER BASED IN MYANMAR
          </p>

          <div className="sm:flex flex-wrap">
            {/* html group */}
            <div className="sm:w-[46%] mt-4 ">
              {/* html */}
              <div className="flex px-4">
                <div className="text-semibold">HTML5</div>
                <div className=" sm:mx-96 mx-[140px] text-sm">92%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[87%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[13%]"></div>
              </div>
              {/* WordPress */}
              <div className="flex px-4 mt-4">
                <div className="font-medium ">CSS</div>
                <div className=" sm:mx-72 mx-[100px] text-sm">75%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[65%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[35%]"></div>
              </div>
              {/* JAVASCRIPT */}
              <div className="flex px-4 mt-4">
                <div className="font-medium ">JAVASCRIPT</div>
                <div className="sm:mx-[300px] mx-[70px] text-sm">86%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[79%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[21%]"></div>
              </div>
              {/* rEACT */}
              <div className="flex px-4 mt-4">
                <div className="font-medium ">REACT</div>
                <div className="sm:mx-[352px] mx-[120px] text-sm">88%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[82%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[18%]"></div>
              </div>

              <div className="flex px-4 mt-4">
                <div className="font-medium ">NextJs</div>
                <div className="sm:mx-[352px] mx-[120px] text-sm">88%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[82%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[18%]"></div>
              </div>
            </div>

            {/* 80 column group */}
            <div className="sm:mx-9 sm:w-[46%] ">
              {/* first flex */}

              <div className="flex justify-center">
                <img
                  src="https://self-portfolio-six.vercel.app/assets/slide_menu-04a57b7b.gif"
                  className="w-[40%] "
                />
              </div>
              {/* second flex */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
