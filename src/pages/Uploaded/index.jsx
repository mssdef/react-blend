import React from "react";

import InteriorcreatingLoadingModal from "modals/InteriorcreatingLoading";

import { Button, Img, Line, Text } from "components";
import Header from '../blocks/Header';
import Footer from '../blocks/Footer';
import LastRenders from '../blocks/LastRenders';


const UploadedPage = () => {
  const [isOpenInteriorcreatingLoadingModal, setInteriorcreatingLoadingModal] =
    React.useState(false);

  function handleOpenInteriorcreatingLoadingModal() {
    setInteriorcreatingLoadingModal(true);
  }
  function handleCloseInteriorcreatingLoadingModal() {
    setInteriorcreatingLoadingModal(false);
  }

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
            className="common-pointer cursor-pointer font-medium max-w-[1381px] mt-[23px] sm:text-[28.270000000000003px] md:text-[30.270000000000003px] text-[32.27px] text-black_900 text-center uppercase w-full"
            onClick={handleOpenInteriorcreatingLoadingModal}
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
      {isOpenInteriorcreatingLoadingModal ? (
        <InteriorcreatingLoadingModal
          isOpen={isOpenInteriorcreatingLoadingModal}
          onRequestClose={handleCloseInteriorcreatingLoadingModal}
        />
      ) : null}
    </>
  );
};

export default UploadedPage;
