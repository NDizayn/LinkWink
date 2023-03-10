import React from "react";

import { Text, Img, List, Button } from "components";
import C5Large1440DpColumnOne from "components/C5Large1440DpColumnOne";
import { useGoogleLogin } from "@react-oauth/google";

const Large1440dpPage: React.FC = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[238px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[30px] items-center justify-center sm:w-[100%] w-[474px]">
          <Text
            className="text-black_900 text-center w-[auto]"
            as="h1"
            variant="h1"
          >
            Login
          </Text>
          <div className="flex flex-col font-roboto gap-[25px] items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[25px] items-center justify-start w-[100%]">
              <div className="border-[1px] border-gray_600 border-solid flex font-roboto items-center justify-center sm:px-[20px] md:px-[40px] px-[74px] rounded-[20px] w-[100%]">
                <div
                  className="common-pointer flex flex-row gap-[8px] items-center justify-center pl-[16px] sm:pr-[20px] pr-[24px] py-[10px] w-[100%]"
                  onClick={() => googleSignIn()}
                >
                  <Img
                    src="images/img_image1.png"
                    className="h-[18px] md:h-[auto] object-cover w-[18px]"
                    alt="imageOne"
                  />
                  <Text
                    className="flex-1 font-medium text-black_900 text-center tracking-[0.10px] w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Continue with Google
                  </Text>
                </div>
              </div>
              <Text
                className="font-inter font-medium text-center text-gray_700 tracking-[0.10px] w-[auto]"
                as="h3"
                variant="h3"
              >
                or
              </Text>
            </div>
            <div className="flex items-start justify-start w-[100%]">
              <List
                className="flex-col gap-[15px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <C5Large1440DpColumnOne
                  className="flex flex-1 flex-col h-[56px] md:h-[auto] items-start justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                  labeltext="Email"
                />
                <C5Large1440DpColumnOne
                  className="flex flex-1 flex-col h-[56px] md:h-[auto] items-start justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                  labeltext="Password"
                />
                <Button className="bg-deep_purple_500 cursor-pointer flex-1 font-medium h-[40px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[0.10px] w-[100%]">
                  Login
                </Button>
              </List>
            </div>
            <div className="flex flex-col font-inter gap-[8px] items-center justify-start w-[100%]">
              <Text
                className="font-normal not-italic text-black_900 text-left tracking-[0.25px] w-[auto]"
                as="h3"
                variant="h3"
              >
                <span className="text-black_900 text-[14px] font-inter">
                  Don’t have an account?{" "}
                </span>
                <span className="text-deep_purple_500 text-[14px] font-inter">
                  Sign Up for free
                </span>
              </Text>
              <Text
                className="font-normal not-italic text-deep_purple_500 text-left tracking-[0.25px] w-[auto]"
                as="h3"
                variant="h3"
              >
                Forgot Password?
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Large1440dpPage;
