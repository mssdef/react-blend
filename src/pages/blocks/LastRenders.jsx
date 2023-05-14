import React from 'react';
import { Button, Img, Line, List, Text } from "components";
import { useNavigate } from "react-router-dom";


const LastRenders = () => {
    const navigate = useNavigate();

  return (
  <div>
    
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
  </div>
            );
        };
        
        export default LastRenders;
        
        