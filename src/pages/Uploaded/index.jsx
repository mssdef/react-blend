import React from "react";

import { Button, Img, Line, Text } from "components";

const UploadedPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-generalsans items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex flex-row md:gap-10 gap-[519px] items-center justify-start p-[30px] sm:px-5 w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[38px] items-center justify-start p-[9px] md:px-5 w-[10%]"
              style={{ backgroundImage: "url('images/img_group5.svg')" }}
            >
              <div className="flex flex-row gap-[13px] items-center justify-start w-[85%] md:w-full">
                <Img
                  src="images/img_vector2.svg"
                  className="h-[11px] rounded-[1px] w-auto"
                  alt="vectorTwo"
                />
                <Text
                  className="font-medium text-black_900 text-left w-auto"
                  variant="body1"
                >
                  Go to home
                </Text>
              </div>
            </div>
            <Img
              src="images/img_telegramcloud.png"
              className="h-[22px] md:h-auto object-cover w-[7%]"
              alt="telegramcloud"
            />
          </div>
          <div className="flex flex-col items-center justify-start mt-[18px] md:px-5 self-stretch w-auto sm:w-full">
            <Text
              className="leading-[100.00%] max-w-[540px] md:max-w-full text-black_900 text-center"
              as="h2"
              variant="h2"
            ></Text>
          </div>
          <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start max-w-[1350px] mt-[60px] mx-auto md:px-5 w-full">
            <div className="h-[502px] relative w-1/2 md:w-full">
              <Img
                src="images/img_rectangle172.png"
                className="h-[502px] m-auto object-cover rounded-[37px] w-full"
                alt="rectangle172"
              />
              <div className="absolute bg-white_A700 flex flex-col items-center justify-start px-2.5 py-1 right-[4%] rounded-[11px] self-stretch shadow-bs top-[3%] w-auto">
                <Img
                  src="images/img_arrowright_red_a700.svg"
                  className="h-3.5 w-3.5"
                  alt="arrowright"
                />
              </div>
              <Button
                className="cursor-pointer flex h-max inset-[0] items-center justify-center m-auto min-w-[110px] w-auto"
                rightIcon={
                  <Img
                    src="images/img_ciarrowsreload01.svg"
                    className="mt-px mb-[3px] ml-1 top-[0] bottom-[1%] left-[1%] absolute"
                    alt="ci:arrows-reload-01"
                  />
                }
                shape="CircleBorder15"
                size="sm"
                variant="OutlineBlack9000c"
              >
                <div className="font-normal not-italic text-black_900 text-right text-sm">
                  Reupload
                </div>
              </Button>
            </div>
            <div className="bg-white_A700 border border-black_900 border-dashed flex md:flex-1 flex-col items-center justify-start p-9 sm:px-5 rounded-[37px] w-1/2 md:w-full">
              <Text
                className="text-black_900 text-center w-auto"
                as="h4"
                variant="h4"
              >
                Upload the interior mood
              </Text>
              <Text
                className="font-normal mt-[3px] not-italic text-black_900_90 text-center w-auto"
                variant="body1"
              >
                For example: an image of a tree, water, mountains, etc.
              </Text>
              <Img
                src="images/img_icroundfileupload.svg"
                className="h-[86px] mt-28 w-[86px]"
                alt="icroundfileuplo"
              />
              <Text
                className="mb-32 mt-[25px] not-italic text-black_900 text-center w-auto"
                as="h6"
                variant="h6"
              >
                Click to upload or drag and drop
              </Text>
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium max-w-[1381px] mt-[23px] sm:text-[28.270000000000003px] md:text-[30.270000000000003px] text-[32.27px] text-black_900 text-center uppercase w-full"
            shape="RoundedBorder29"
            size="sm"
            variant="FillTealA400"
          >
            blend
          </Button>
          <Text
            className="mt-[93px] text-black_900 text-center w-auto"
            as="h2"
            variant="h2"
          >
            Latest renders
          </Text>
          <div className="flex md:flex-col flex-row gap-[21px] items-center justify-start max-w-[1380px] mt-[55px] mx-auto md:px-5 w-full">
            <div className="h-[369px] relative w-1/2 md:w-full">
              <Img
                src="images/img_rectangle161_369x680.png"
                className="h-[369px] m-auto object-cover rounded-[106px] w-full"
                alt="rectangle161"
              />
              <div className="absolute flex md:flex-col flex-row gap-[19px] h-max inset-[0] items-center justify-center m-auto w-[41%]">
                <Button
                  className="flex h-[49px] items-center justify-center md:mt-0 my-0.5 w-[49px]"
                  shape="icbRoundedBorder24"
                  size="smIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_phsharefatfill.svg"
                    className="h-6"
                    alt="phsharefatfill"
                  />
                </Button>
                <Button
                  className="flex h-[49px] items-center justify-center md:mt-0 my-0.5 w-[49px]"
                  shape="icbRoundedBorder24"
                  size="smIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_icrounddownload.svg"
                    className="h-6"
                    alt="icrounddownload"
                  />
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[139px] w-auto"
                  rightIcon={
                    <Img
                      src="images/img_materialsymbolsarrowinsertrounded.svg"
                      className="ml-2"
                      alt="material-symbols:arrow-insert-rounded"
                    />
                  }
                  shape="RoundedBorder29"
                  size="lg"
                  variant="OutlineWhiteA700"
                >
                  <div className="font-medium text-black_900 text-left text-lg uppercase">
                    Detail
                  </div>
                </Button>
              </div>
            </div>
            <Img
              src="images/img_rectangle162_369x679.png"
              className="md:flex-1 h-[369px] sm:h-auto object-cover rounded-[37px] w-1/2 md:w-full"
              alt="rectangle162"
            />
          </div>
          <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start max-w-[1380px] mt-[15px] mx-auto md:px-5 w-full">
            <Img
              src="images/img_rectangle164.png"
              className="sm:flex-1 h-[369px] md:h-auto object-cover rounded-[37px] w-1/2 sm:w-full"
              alt="rectangle164"
            />
            <Img
              src="images/img_rectangle165_369x679.png"
              className="sm:flex-1 h-[369px] md:h-auto object-cover rounded-[37px] w-1/2 sm:w-full"
              alt="rectangle165"
            />
          </div>
          <div className="flex flex-col gap-[23px] items-center justify-start max-w-[1380px] mt-[15px] mx-auto md:px-5 w-full">
            <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-full">
              <Img
                src="images/img_rectangle167_369x680.png"
                className="md:flex-1 h-[369px] sm:h-auto object-cover rounded-[37px] w-auto md:w-full"
                alt="rectangle167"
              />
              <Img
                src="images/img_rectangle168_369x679.png"
                className="md:flex-1 h-[369px] sm:h-auto object-cover rounded-[37px] w-auto md:w-full"
                alt="rectangle168"
              />
            </div>
            <div className="bg-teal_A400 flex flex-col items-center justify-start p-[126px] md:px-10 sm:px-5 rounded-[37px] w-full">
              <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
                <div className="flex flex-col gap-[42px] items-center justify-start w-full">
                  <Text
                    className="leading-[113.00%] text-black_900 text-center w-full"
                    as="h1"
                    variant="h1"
                  ></Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[244px] sm:text-[28.270000000000003px] md:text-[30.270000000000003px] text-[32.27px] text-black_900 text-center uppercase w-auto"
                    shape="RoundedBorder29"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    Strat here
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_900 flex flex-col items-center justify-end mt-[34px] py-[43px] rounded-bl-none rounded-br-none rounded-tl-[37px] rounded-tr-[37px] w-full">
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
        </div>
      </div>
    </>
  );
};

export default UploadedPage;
