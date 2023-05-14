import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import Header from '../blocks/Header';
import ResultPopUpModal from "modals/ResultPopUp";
import Footer from '../blocks/Footer';
import LastRenders from '../blocks/LastRenders';



const AIblendOnePage = (props) => {
  const navigate = useNavigate();

  const [isOpenResultPopUpModal, setResultPopUpModal] =
  React.useState(props.isOpenResultPopUpModal);

  function handleOpenResultPopUpModal() {
    setResultPopUpModal(true);
  }
  function handleCloseResultPopUpModal() {
    setResultPopUpModal(false);
  }

  if (props.isOpenResultPopUpModal) {
    // handleOpenResultPopUpModal();
  }


  return (
    <>
      <div className="bg-white_A700 flex flex-col font-generalsans items-center justify-start mx-auto w-full">
        <Header/>
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
              className="common-pointer cursor-pointer font-medium max-w-[1381px] sm:text-[28.270000000000003px] md:text-[30.270000000000003px] text-[32.27px] text-black_900 text-center uppercase w-full"
              onClick={() => navigate("/uploading")}
              shape="RoundedBorder29"
              size="sm"
              variant="FillTealA400"
            >
              blend
            </Button>
          </div>
        </div>
        <LastRenders/>
          <Footer/>

      </div>
      {isOpenResultPopUpModal ? (
        <ResultPopUpModal
          isOpen={isOpenResultPopUpModal}
          onRequestClose={handleCloseResultPopUpModal}
        />
      ) : null}

    </>
  );
};

export default AIblendOnePage;
