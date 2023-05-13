import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Text } from "components";

const InteriorcreatingLoadingModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[87%]"
      overlayClassName="bg-black_900_5b fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[1248px] mb-[23px] mx-auto p-7 md:px-5 rounded-[37px] w-full">
          <Img
            src="images/img_icroundclose.svg"
            className="h-6 w-6"
            alt="icroundclose"
          />
          <Text
            className="mt-[9px] text-black_900 text-center w-auto"
            as="h2"
            variant="h2"
          >
            The interior is being created
          </Text>
          <Img
            src="images/img_search.svg"
            className="h-[172px] mt-[183px] w-[172px]"
            alt="search"
          />
          <Text
            className="leading-[100.00%] mb-[88px] mt-[147px] text-black_900 text-center w-[33%] sm:w-full"
            as="h4"
            variant="h4"
          >
            <>Just wait a little and you&#39;ll be pleasantly surprised</>
          </Text>
        </div>
      </div>
    </ModalProvider>
  );
};

export default InteriorcreatingLoadingModal;
