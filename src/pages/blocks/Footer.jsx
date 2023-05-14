import React from 'react';
import { Button, Img, Line, List, Text } from "components";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();

  return (<div className="bg-gray_900 flex flex-col items-center justify-end mt-[34px] py-[43px] rounded-bl-none rounded-br-none rounded-tl-[37px] rounded-tr-[37px] w-full">
            <div className="flex flex-col items-center justify-start mt-[17px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start max-w-[1380px] mx-auto md:px-5 w-full">
                    <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-[52%] md:w-full">
                        <Text
                          className="font-normal not-italic text-left text-white_A700_4c uppercase w-auto"
                          variant="body2"
                        >
                          Interior AI Products
                        </Text>
                        <Text
                          className="font-normal italic text-left text-white_A700_4c uppercase w-auto"
                          variant="body2"
                        >
                          Menu
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-start self-stretch w-auto sm:w-full">
                          <div className="flex flex-row gap-4 items-center justify-start self-stretch w-auto">
                            <Text
                              className="not-italic text-left text-white_A700 w-auto"
                              as="h6"
                              variant="h6"
                            >
                              AI visualization
                            </Text>
                            <Img
                              src="images/img_materialsymbol.svg"
                              className="h-[18px] w-[18px]"
                              alt="materialsymbol"
                            />
                          </div>
                          <div className="flex flex-row gap-4 items-center justify-start self-stretch w-auto">
                            <Text
                              className="not-italic text-left text-white_A700 w-auto"
                              as="h6"
                              variant="h6"
                            >
                              AI moodboard
                            </Text>
                            <Img
                              src="images/img_materialsymbol.svg"
                              className="h-[18px] w-[18px]"
                              alt="materialsymbol_One"
                            />
                          </div>
                          <div className="flex flex-row gap-4 items-center justify-start self-stretch w-auto">
                            <Text
                              className="not-italic text-left text-white_A700 w-auto"
                              as="h6"
                              variant="h6"
                            >
                              AI blend
                            </Text>
                            <Img
                              src="images/img_materialsymbol.svg"
                              className="h-[18px] w-[18px]"
                              alt="materialsymbol_Two"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-row sm:gap-10 items-start justify-between w-[52%] md:w-full">
                          <div className="flex flex-row gap-6 items-start justify-start self-stretch w-auto">
                            <Text
                              className="not-italic text-left text-white_A700 w-auto"
                              as="h6"
                              variant="h6"
                            >
                              About
                            </Text>
                            <Text
                              className="not-italic text-left text-white_A700 w-auto"
                              as="h6"
                              variant="h6"
                            >
                              Team
                            </Text>
                            <Text
                              className="not-italic text-left text-white_A700 w-auto"
                              as="h6"
                              variant="h6"
                            >
                              Gallery
                            </Text>
                            <Text
                              className="not-italic text-left text-white_A700 w-auto"
                              as="h6"
                              variant="h6"
                            >
                              Contact
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1.5 items-center justify-start self-stretch w-auto">
                            <Text
                              className="not-italic text-left text-white_A700 w-auto"
                              as="h6"
                              variant="h6"
                            >
                              En
                            </Text>
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[17px] w-[17px]"
                              alt="arrowdown"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-x-auto w-full">
                    <div className="flex flex-col items-start justify-start overflow-auto w-full">
                      <Line className="bg-gray_800 h-px max-w-[1379px] mx-auto w-full" />
                      <div className="h-[164px] sm:h-[231px] md:h-[435px] mt-[67px] md:px-5 relative w-full">
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[50px] inset-x-[0] items-center justify-end max-w-[1747px] mx-auto w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                            <Img
                              src="images/img_telegramcloud.png"
                              className="h-[143px] md:h-auto object-cover w-full"
                              alt="maskgroup"
                            />
                          </div>
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[32%] md:w-full">
                            <Img
                              src="images/img_telegramcloud.png"
                              className="h-[143px] md:h-auto object-cover w-full"
                              alt="maskgroup_One"
                            />
                          </div>
                        </div>
                        <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-y-[0] items-center justify-between left-[3%] my-auto w-[83%] md:w-full">
                          <div className="bg-gradient  h-[164px] w-[22%]"></div>
                          <div className="bg-gradient  h-[164px] rotate-[180deg] w-[22%]"></div>
                        </div>
                      </div>
                      <Line className="bg-gray_800 h-px max-w-[1379px] mt-[68px] mx-auto w-full" />
                    </div>
                  </div>
                  <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1378px] mx-auto md:px-5 w-full">
                    <Text
                      className="font-normal not-italic text-left text-white_A700_4c uppercase w-auto"
                      variant="body2"
                    >
                      paintit ©2023
                    </Text>
                    <Text
                      className="font-normal not-italic text-right text-white_A700_4c uppercase w-auto"
                      variant="body2"
                    >
                      ALL RIGHTS RESERVED
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
            );
        };
        
        export default Footer;
        
        