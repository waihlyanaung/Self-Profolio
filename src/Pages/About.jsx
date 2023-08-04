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
        <div className="bg-white sm:w-[100%] w-[100%]  sm:h-[700px] px-8 py-10 ">
          <div className="text-2xl md:text-4xl tracking-tight uppercase font-semibold relative inline-block align-top z-10 mb-[10px] py-[10px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#d9832e] after:w-[50px]">
            ABOUT ME
          </div>
          <p className="text-sm font-normal text-[#555a64] mt-5">
            A FRONTED DEVELOPER BASED IN MYANMAR
          </p>
          {/* img */}
          <div className="sm:flex flex-wrap ">
            <div className="px-4 sm:flex sm:w-[40%]   ">
              <div className=" relative bg-white  h-[400px] sm:h-[471px] sm:mt-14 mt-10 px-4  flex  items-center justify-center rounded">
                {/* relative group */}
                <div className="absolute top-9  left-1 sm:w-[13%] w-[15%] h-[190px] sm:h-[210px] bg-white flex flex-col justify-around ">
                  <div className="sm:w-9 w-7 ml-3 sm:h-[34px] h-[30px] hover:bg-black bg-[#D9832E] flex items-center justify-center text-white">
                    <a href="https://www.facebook.com/khantnyar.koko.16?mibextid=ZbWKwL">
                      <CgFacebook />
                    </a>
                  </div>
                  <div className="sm:w-9 w-7 ml-3 sm:h-[34px] h-[30px] sm:ml-3 hover:bg-black bg-[#D9832E] flex items-center justify-center text-white">
                    <a href="https://twitter.com/DamianS28619131">
                      <AiOutlineTwitter />
                    </a>
                  </div>
                  <div className="sm:w-9 w-7 ml-3 sm:h-[34px] h-[30px] sm:ml-3 hover:bg-black bg-[#D9832E] flex items-center justify-center text-white">
                    <a href="https://www.instagram.com/knkk_2002/?igshid=NGExMmI2YTkyZg==">
                      <AiOutlineInstagram />
                    </a>
                  </div>
                  <div className="sm:w-9 w-7 ml-3 sm:h-[34px] h-[30px] sm:ml-3 hover:bg-black bg-[#D9832E] flex items-center justify-center text-white">
                    <a href="https://www.linkedin.com/in/khant-nyar-ko-ko-b993b3195/">
                      <BiLogoLinkedin />
                    </a>
                  </div>
                </div>
                <img
                  src={about}
                  className="sm:w-[99%] sm:h-[444px] h-[370px]"
                />
              </div>
            </div>
            {/* Tony Smith */}
            <div className="sm:w-[60%] w-[100%]">
              <div className="flex">
                <img src={reacticon} className="h-[8%] sm:w-[8%] w-[10%] mt-3 sm:mt-0 " />
                <div className="mt-4 text-[#E88534]">Education Background</div>
              </div>

              <div>
                <div className="flex sm:px-14 sm:mt-1 mt-2 px-4 font-semibold">
                  Technological University(Dawei)
                </div>
                <div className="flex sm:px-14 sm:mt-1 mt-2 px-4 font-semibold">
                  Bachelor of Engineering Fifth Year Student (CDM)
                </div>
              </div>

              <div className="flex">
                <img src={reacticon} className="h-[8%] w-[10%] sm:w-[8%]  mt-3 sm:mt-0  " />
                <div className="mt-4 text-[#E88534]">Personal Information</div>
              </div>

              <div className="sm:flex flex-wrap">
                <div>
                  {/* birthday group */}
                  <div className="flex sm:px-14  px-4 sm:mt-1 mt-4">
                    <div className="w-[91px] text-sm font-semibold">
                      Date of Birth
                    </div>
                    <div className="w-[1px]  sm:ml-10 h-[20px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      25 AUG 1998
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="flex sm:px-14 mt-2 px-4 ">
                    <div className="w-[91px] text-sm font-semibold">
                      Passport No
                    </div>
                    <div className="w-[1px] sm:ml-10  h-[20px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      MH150498
                    </div>
                  </div>
                  {/*3  */}

                  <div className="flex sm:px-14 mt-2 px-4 ">
                    <div className="w-[91px] text-sm font-semibold">
                      Nationality
                    </div>
                    <div className="w-[1px]  sm:ml-10 h-[20px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      Myanmar
                    </div>
                  </div>
                  {/* 4 */}
                  <div className="flex sm:px-14 mt-2 px-4 ">
                    <div className="w-[91px] text-sm font-semibold">
                      Address
                    </div>
                    <div className="w-[1px]  sm:ml-10  h-[20px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      Yangon, Myanmar
                    </div>
                  </div>
                </div>

                {/* Email Group */}
                <div>
                  <div className="flex sm:px-14 sm:mt-5 mt-2 px-4">
                    <div className="w-[100px] text-sm font-semibold">
                      Marital Status
                    </div>
                    <div className="w-[1px]  sm:ml-8 h-[18px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      Single
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="flex sm:px-14  mt-2 px-4 ">
                    <div className="w-[120px] text-sm font-semibold">
                      Expected Salary
                    </div>
                    <div className="w-[1px]  sm:ml-3 h-[18px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      US-[900$]
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="flex sm:px-14 mt-2 px-4 ">
                    <div className="w-[91px] text-sm font-semibold">
                      Availability
                    </div>
                    <div className="w-[1px] sm:ml-10 h-[18px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      Immediately
                    </div>
                  </div>
                  {/* 4 */}

                  <div className="flex">
                    <img src={reacticon} className="h-[10%] w-[10%]  sm:h-[14%]  sm:w-[14%]  mt-3 sm:mt-0  " />
                    <div className="mt-4 text-[#E88534]">
                      Languages
                    </div>
                  </div>

                  <div className="flex sm:px-14 mt-2 px-4 ">
                    <div className="w-[100px] text-sm font-semibold">
                      English 4 Skill
                    </div>
                    <div className="w-[1px] sm:ml-8 h-[18px] bg-[#4f5052] "></div>
                    <div class="text-[#555a64] sm:ml-4 ml-6 text-sm">
                      Intermediate
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm font-bold bg-[#D9832E]  text-white sm:w-[22%] w-[40%] h-[47px] flex justify-center items-center mt-7 sm:mx-14 mx-4 hover:bg-black">
                DOWNLOAD CV
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* my skill Gp */}
      <div className="flex justify-center my-28">
        <div className="h-[390px] sm:w-[92%] w-[100%] ">
          <div className="text-black text-4xl font-bold px-4">MY SKILLS</div>
          <p className="text-sm font-normal text-[#555a64] px-4 mt-6">
            {" "}
            A FRONTED DEVELOPER BASED IN MYANMAR
          </p>

          <div className="sm:flex flex-wrap">
            {/* html group */}
            <div className="sm:w-[46%] mt-12 ">
              {/* html */}
              <div className="flex px-4">
                <div className="text-semibold">HTML5</div>
                <div className=" sm:mx-96 mx-[210px] text-sm">92%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[87%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[13%]"></div>
              </div>
              {/* WordPress */}
              <div className="flex px-4 mt-9">
                <div className="font-medium ">CSS</div>
                <div className=" sm:mx-72 mx-[160px] text-sm">75%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[65%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[35%]"></div>
              </div>
              {/* JAVASCRIPT */}
              <div className="flex px-4 mt-9">
                <div className="font-medium ">JAVASCRIPT</div>
                <div className="sm:mx-[300px] mx-[140px] text-sm">86%</div>
              </div>
              <div className="px-4 mt-2 flex">
                <div className="bg-[#D9832E] w-[79%] h-1"></div>
                <div className="bg-[#EEEEEE] h-1 w-[21%]"></div>
              </div>
              {/* rEACT */}
              <div className="flex px-4 mt-9">
                <div className="font-medium ">REACT</div>
                <div className="sm:mx-[352px] mx-[194px] text-sm">88%</div>
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
              <div className="flex justify-evenly  ">
                {/* 1 */}
                <div className="bg-[#E0832E] font-semibold w-[30%] ">
                  <div className=" flex justify-center  ">1+</div>
                  <div className="sm:px-6">YEARS OF EXPERIENCES</div>
                </div>
                {/* 2 */}
                <div className="bg-[#E0832E] font-semibold w-[30%] ">
                  <div className=" flex justify-center  ">10+</div>
                  <div className="sm:px-6">PROJECTS COMPLETED</div>
                </div>
                {/* 3 */}
                <div className="bg-[#E0832E] font-semibold w-[30%] ">
                  <div className=" flex justify-center  ">100+</div>
                  <div className="sm:px-3">HAPPY USERS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
