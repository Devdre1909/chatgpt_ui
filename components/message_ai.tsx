"use client";

import { HeadCircuit } from "@phosphor-icons/react";
import React from "react";

const MessageAi = () => {
  return (
    <div className="w-full container">
      <div className="layout-width p-2 flex flex-col mx-auto">
        <div className="p-5 flex flex-row gap-4 items-start">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center rounded-full w-8 h-8 border border-gray-600">
              <HeadCircuit size={16} />
            </div>
          </div>
          <div>
            <div className="text-base text-white">
              Good Morning, <br /> <br />
              Thank you for reaching out to us. <br /> <br />
              To assist you more efficiently, could you please provide a more
              detailed description of the issue you're encountering? We see that
              you are currently enrolled in the "Data Analysis with Excel"
              course and have just completed the "Creating Dynamic Charts"
              module. <br /> <br />
              To help us understand and resolve your issue quickly, please
              answer the following questions: <br /> <br />
              Is the XXX app opening successfully? <br /> <br />
              Are you able to sign in and access your course? <br /> <br />
              If you can sign in, what happens when you try to click on your
              next class? <br /> <br />
              We appreciate your cooperation and look forward to your response.{" "}
              <br />
              <br />
              Thank you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageAi;
