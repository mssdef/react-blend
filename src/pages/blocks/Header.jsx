import React from 'react';
import { Button, Img, Line, List, Text } from "components";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

  return (
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
              <Button
                className="font-medium text-black_900 text-left w-auto"
                variant="body1"
                onClick={() => navigate("/aiblendone")}
              >
                Go to home
              </Button>
            </div>
          </div>
          <Img
            src="images/img_telegramcloud.png"
            className="h-[22px] md:h-auto object-cover w-[7%]"
            alt="telegramcloud"
          />
        </div>  
  );
};

export default Header;

