import React from "react";

import { Button, Img, Line, List, Text } from "components";

const AIblendOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-generalsans items-center justify-start mx-auto w-full">
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
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1381px] mt-[25px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start self-stretch w-auto sm:w-full">
            <Text
              className="leading-[100.00%] max-w-[540px] md:max-w-full text-black_900 text-center"
              as="h2"
              variant="h2"
            ></Text>
          </div>
          <div className="flex flex-col gap-[23px] items-center justify-start w-full">
            <List
              className="sm:flex-col flex-row gap-3 grid md:grid-cols-1 grid-cols-2 justify-center w-[98%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 border border-black_900 border-dashed flex flex-col items-center justify-start sm:ml-[0] p-9 sm:px-5 rounded-[37px] w-full">
                <div className="flex flex-col md:gap-10 gap-28 justify-start mb-32 w-[54%] md:w-full">
                  <div className="flex flex-col justify-start w-full">
                    <Text
                      className="ml-14 md:ml-[0] text-black_900 text-center w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Upload the room
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-black_900_90 text-center w-auto"
                      variant="body1"
                    >
                      For example: picture of the room you want to blend
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[25px] items-center justify-start ml-8 md:ml-[0] w-[73%] md:w-full">
                    <Img
                      src="images/img_icroundfileupload.svg"
                      className="h-[86px] w-[86px]"
                      alt="icroundfileuplo"
                    />
                    <Text
                      className="not-italic text-black_900 text-center w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Click to upload or drag and drop
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 border border-black_900 border-dashed flex flex-col items-center justify-start sm:ml-[0] p-9 sm:px-5 rounded-[37px] w-full">
                <div className="flex flex-col md:gap-10 gap-28 items-center justify-start mb-32 w-[58%] md:w-full">
                  <div className="flex flex-col justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[23px] text-black_900 text-center w-auto"
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
                  </div>
                  <div className="flex flex-col gap-[25px] items-center justify-start w-[68%] md:w-full">
                    <Img
                      src="images/img_icroundfileupload.svg"
                      className="h-[86px] w-[86px]"
                      alt="icroundfileuplo"
                    />
                    <Text
                      className="not-italic text-black_900 text-center w-auto"
                      as="h6"
                      variant="h6"
                    >
                      Click to upload or drag and drop
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <Button
              className="cursor-pointer font-medium max-w-[1381px] sm:text-[28.270000000000003px] md:text-[30.270000000000003px] text-[32.27px] text-black_900 text-center uppercase w-full"
              shape="RoundedBorder29"
              size="sm"
              variant="FillTealA400"
            >
              blend
            </Button>
          </div>
        </div>
        <div className="flex flex-col mt-12 md:px-5 relative w-full">
          <div className="bg-gray_100 flex flex-col items-center justify-start mx-auto p-[30px] sm:px-5 rounded-[37px] w-full">
            <div className="flex flex-col items-center justify-start mb-[101px] mt-[35px] w-full">
              <div className="flex flex-col md:gap-10 gap-[81px] items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-auto md:w-full">
                  <Text
                    className="font-normal not-italic text-black_900_7e text-left uppercase w-auto"
                    variant="body1"
                  >
                    Latest renders
                  </Text>
                  <Text
                    className="leading-[113.00%] mt-[3px] text-black_900 text-center w-full"
                    as="h3"
                    variant="h3"
                  ></Text>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
                    <div className="h-[369px] relative w-1/2 md:w-full">
                      <Img
                        src="images/img_rectangle161.png"
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
                              className="ml-2 my-[3px]"
                              alt="material-symbols:arrow-insert-rounded"
                            />
                          }
                          shape="RoundedBorder29"
                          size="md"
                          variant="OutlineWhiteA700"
                        >
                          <div className="font-medium text-black_900 text-left text-lg uppercase">
                            Detail
                          </div>
                        </Button>
                      </div>
                    </div>
                    <Img
                      src="images/img_rectangle162.png"
                      className="md:flex-1 h-[369px] sm:h-auto object-cover rounded-[37px] w-auto md:w-full"
                      alt="rectangle162"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between mt-[15px] w-full">
                    <Img
                      src="images/img_rectangle164.png"
                      className="md:flex-1 h-[369px] sm:h-auto object-cover rounded-[37px] w-auto md:w-full"
                      alt="rectangle164"
                    />
                    <Img
                      src="images/img_rectangle165.png"
                      className="md:flex-1 h-[369px] sm:h-auto object-cover rounded-[37px] w-auto md:w-full"
                      alt="rectangle165"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between mt-[15px] w-full">
                    <Img
                      src="images/img_rectangle167.png"
                      className="md:flex-1 h-[369px] sm:h-auto object-cover rounded-[37px] w-auto md:w-full"
                      alt="rectangle167"
                    />
                    <Img
                      src="images/img_rectangle168.png"
                      className="md:flex-1 h-[369px] sm:h-auto object-cover rounded-[37px] w-auto md:w-full"
                      alt="rectangle168"
                    />
                  </div>
                  <div className="flex flex-row gap-0.5 items-start justify-start mt-[34px] self-stretch w-auto">
                    <Button
                      className="flex h-[38px] items-center justify-center rounded-[50%] w-[38px]"
                      size="smIcn"
                      variant="icbOutlineBlack9007e"
                    >
                      <Img
                        src="images/img_vector2.svg"
                        className=""
                        alt="frame48095586"
                      />
                    </Button>
                    <Text
                      className="bg-black_900 border border-black_900 border-solid flex font-medium h-[38px] items-center justify-center rounded-[50%] text-center text-white_A700 w-[38px]"
                      as="h5"
                      variant="h5"
                    >
                      1
                    </Text>
                    <Text
                      className="border border-black_900 border-solid flex font-medium h-[38px] items-center justify-center rounded-[50%] text-black_900 text-center w-[38px]"
                      as="h5"
                      variant="h5"
                    >
                      2
                    </Text>
                    <Text
                      className="border border-black_900 border-solid flex font-medium h-[38px] items-center justify-center rounded-[50%] text-black_900 text-center w-[38px]"
                      as="h5"
                      variant="h5"
                    >
                      3
                    </Text>
                    <Text
                      className="border border-black_900 border-solid flex font-medium h-[38px] items-center justify-center rounded-[50%] text-black_900 text-center w-[38px]"
                      as="h5"
                      variant="h5"
                    >
                      ...
                    </Text>
                    <Text
                      className="border border-black_900 border-solid flex font-medium h-[38px] items-center justify-center rounded-[50%] text-black_900 text-center w-[38px]"
                      as="h5"
                      variant="h5"
                    >
                      6
                    </Text>
                    <Button
                      className="flex h-[38px] items-center justify-center rounded-[50%] w-[38px]"
                      size="smIcn"
                      variant="icbOutlineBlack900"
                    >
                      <Img
                        src="images/img_arrowright.svg"
                        className=""
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat bg-teal_A400 flex flex-col h-[479px] items-center justify-start mt-[34px] p-[126px] md:px-10 sm:px-5 rounded-[37px] w-full"
                    style={{
                      backgroundImage: "url('images/img_frame48095577.png')",
                    }}
                  >
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
                          size="sm"
                          variant="FillWhiteA700"
                        >
                          Strat here
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray_900 flex items-center justify-center mt-[-97px] mx-auto rounded-bl-none rounded-br-none rounded-tl-[37px] rounded-tr-[37px] w-full z-[1]">
            <div className="flex flex-col items-center justify-center mb-[39px] mt-[58px] w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                  <div className="flex flex-col gap-[11px] items-start justify-start w-full">
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
                <div className="mt-[37px] overflow-x-auto w-full">
                  <div className="flex flex-col items-start justify-start overflow-auto w-full">
                    <Line className="bg-gray_800 h-px md:ml-[0] ml-[30px] w-[96%]" />
                    <div className="h-[164px] sm:h-[231px] md:h-[435px] mt-[67px] relative w-full">
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
                    <Line className="bg-gray_800 h-px md:ml-[0] ml-[30px] mt-[68px] w-[96%]" />
                  </div>
                </div>
                <div className="flex flex-row md:gap-10 items-center justify-between mt-[37px] w-[96%] md:w-full">
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
          </footer>
        </div>
      </div>
    </>
  );
};

export default AIblendOnePage;
