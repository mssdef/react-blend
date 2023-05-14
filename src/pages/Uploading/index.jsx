import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from '../blocks/Header';
import Footer from '../blocks/Footer';
import LastRenders from '../blocks/LastRenders';


const UploadingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-generalsans items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
        <Header/>

          <div className="flex flex-col items-center justify-start mt-[18px] md:px-5 self-stretch w-auto sm:w-full">
            <Text
              className="leading-[100.00%] max-w-[540px] md:max-w-full text-black_900 text-center"
              as="h2"
              variant="h2"
            ></Text>
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[502px] items-start justify-start max-w-[1350px] mt-[60px] mx-auto p-9 md:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group101.svg')" }}
          >
            <div className="flex flex-col justify-start mb-12 ml-0.5 md:ml-[0] w-[90%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between ml-auto w-[79%] md:w-full">
                <Text
                  className="text-black_900 text-center w-auto"
                  as="h4"
                  variant="h4"
                >
                  Upload the room
                </Text>
                <Text
                  className="text-black_900 text-center w-auto"
                  as="h4"
                  variant="h4"
                >
                  Upload the interior mood
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-auto mt-[3px] w-[88%] md:w-full">
                <Text
                  className="font-normal not-italic text-black_900_90 text-center w-auto"
                  variant="body1"
                >
                  For example: picture of the room you want to blend
                </Text>
                <Text
                  className="font-normal not-italic text-black_900_90 text-center w-auto"
                  variant="body1"
                >
                  For example: an image of a tree, water, mountains, etc.
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-14 mt-[89px] w-[96%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[55%] md:w-full">
                  <div className="flex flex-col gap-[27px] items-center justify-start self-stretch w-auto">
                    <Img
                      src="images/img_rectangle147.png"
                      className="h-[71px] md:h-auto object-cover rounded-[5px] w-[122px] sm:w-full"
                      alt="rectangle147"
                    />
                    <div className="flex flex-col gap-3.5 items-center justify-center self-stretch w-auto">
                      <Text
                        className="font-normal not-italic text-black_900 text-center w-auto"
                        as="h5"
                        variant="h5"
                      >
                        Photo_12445.jpg
                      </Text>
                      <Text
                        className="font-normal not-italic text-black_900_90 text-center w-auto"
                        variant="body1"
                      >
                        1.2 MB
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[34px] w-full">
                    <div className="bg-blue_gray_50 flex flex-col items-start justify-start rounded-[11px] w-full">
                      <Text
                        className="bg-gradient1  font-medium sm:px-5 px-[35px] rounded-[10px] text-black_900 text-center w-auto"
                        variant="body2"
                      >
                        68%
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium mt-3.5 text-black_900 text-left underline w-auto"
                    variant="body1"
                  >
                    Cancel
                  </Text>
                </div>
                <div className="flex flex-col gap-[25px] items-center justify-start md:mt-0 mt-[23px] w-[22%] md:w-full">
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
          </div>
          <Button
            className="common-pointer cursor-pointer font-medium max-w-[1381px] mt-[23px] sm:text-[28.270000000000003px] md:text-[30.270000000000003px] text-[32.27px] text-black_900 text-center uppercase w-full"
            onClick={() => navigate("/uploaded")}
            shape="RoundedBorder29"
            size="sm"
            variant="FillTealA400"
          >
            blend
          </Button>
          <LastRenders/>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default UploadingPage;
