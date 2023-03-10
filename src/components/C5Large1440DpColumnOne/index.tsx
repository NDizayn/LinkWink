import React from "react";

import { Text } from "components";

type C5Large1440DpColumnOneProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ labeltext: JSX.Element | string }>;

const C5Large1440DpColumnOne: React.FC<C5Large1440DpColumnOneProps> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        <div className="border-[1px] border-gray_600 border-solid flex items-start justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
          <div className="flex items-center justify-start pl-[16px] py-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]">
            <div className="flex h-[40px] md:h-[auto] items-start justify-center w-[100%]">
              <div className="flex items-center justify-start self-stretch w-[auto]">
                <Text
                  className="font-roboto not-italic text-gray_800 text-left tracking-[0.50px] w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  {props?.labeltext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C5Large1440DpColumnOne.defaultProps = { labeltext: "Email" };

export default C5Large1440DpColumnOne;
