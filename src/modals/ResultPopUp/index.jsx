import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const ResultPopUpModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[87%]"
      overlayClassName="bg-black_900_5b fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[1248px] mb-[53px] mx-auto p-7 md:px-5 rounded-[37px] w-full">
          <div className="flex flex-col gap-[22px] items-end justify-start mb-0.5 w-full">
            <Img
              src="images/img_icroundclose.svg"
              className="common-pointer h-6 w-6"
              alt="icroundclose"
              onClick={props.onRequestClose}
            />
            <div className="flex flex-col gap-3.5 items-center justify-start w-full">
              <div className="h-[618px] relative w-full">
                <Img
                  src="images/img_image1.png"
                  className="h-[618px] m-auto object-cover rounded-[25px] w-full"
                  alt="imageOne"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto top-[5%] w-[95%]">
                  <Button
                    className="flex h-[49px] items-center justify-center w-[49px]"
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
                    className="flex h-[49px] items-center justify-center ml-3.5 md:ml-[0] w-[49px]"
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
                    className="flex h-[49px] items-center justify-center ml-3.5 md:ml-[0] w-[49px]"
                    shape="icbRoundedBorder24"
                    size="smIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_fluentfullscr.svg"
                      className="h-6"
                      alt="fluentfullscr"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer font-normal min-w-[85px] md:ml-[0] ml-[868px] not-italic text-center text-lg text-white_A700 uppercase w-auto"
                    shape="CircleBorder19"
                    size="sm"
                    variant="OutlineWhiteA700_1"
                  >
                    Result
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between w-full">
                <div className="h-[386px] relative w-1/2 md:w-full">
                  <Img
                    src="images/img_image2.png"
                    className="h-[386px] m-auto object-cover rounded-[25px] w-full"
                    alt="imageTwo"
                  />
                  <Button
                    className="absolute cursor-pointer font-normal min-w-[104px] not-italic right-[5%] text-center text-lg text-white_A700 top-[8%] uppercase w-auto"
                    shape="CircleBorder19"
                    size="sm"
                    variant="OutlineWhiteA700_1"
                  >
                    Original
                  </Button>
                </div>
                <div className="h-[386px] relative w-1/2 md:w-full">
                  <Img
                    src="images/img_image3.png"
                    className="h-[386px] m-auto object-cover rounded-[25px] w-full"
                    alt="imageThree"
                  />
                  <Button
                    className="absolute cursor-pointer font-normal min-w-[78px] not-italic right-[5%] text-center text-lg text-white_A700 top-[8%] uppercase w-auto"
                    shape="CircleBorder19"
                    size="sm"
                    variant="OutlineWhiteA700_1"
                  >
                    Mood
                  </Button>
                </div>
              </div>
              <div
                className="bg-blue_gray_50 bg-cover bg-no-repeat flex flex-col h-[479px] items-center justify-center p-[105px] md:px-10 sm:px-5 rounded-[37px] w-full"
                style={{
                  backgroundImage: "url('images/img_frame48095577.png')",
                }}
              >
                <div className="flex flex-col gap-[42px] items-center justify-start my-[21px] w-full">
                  <Text
                    className="leading-[113.00%] text-black_900 text-center w-full"
                    as="h1"
                    variant="h1"
                  ></Text>
                  <Button
                    className="common-pointer cursor-pointer font-medium min-w-[244px] sm:text-[28.270000000000003px] md:text-[30.270000000000003px] text-[32.27px] text-black_900 text-center uppercase w-auto"
                    onClick={(event) => {
                      props.onRequestClose();
                      navigate("/aiblendone");
                    }}
                    shape="RoundedBorder29"
                    size="sm"
                    variant="FillTealA400"
                  >
                    Strat here
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ResultPopUpModal;
