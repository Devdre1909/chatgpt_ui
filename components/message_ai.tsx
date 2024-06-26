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
            <div
              className="text-base text-white AIMESSAGE"
              dangerouslySetInnerHTML={{
                __html: `


                <p>
                  Hello, here is your response
                </p>


                <table>
  <tr>
    <th>is_error</th>
    <th>is_critical</th>
    <th>original_log</th>
    <th>error</th>
    <th>possible_fix</th>
    <th>affected_services</th>
  </tr>
  <tr style="color:red;">
    <td>is_error</td>
    <td>is_critical</td>
    <td>{
        "insertId": "f566s3kye8y1iu2e",
        "jsonPayload": {
            "message": "POST /api/service-accounts-actions/external-sourcing/signup {\"statusCode\":400,\"timestamp\":\"2024-06-11T21:00:33.248Z\",\"path\":\"/api/service-accounts-actions/external-sourcing/signup\",\"method\":\"POST\",\"message\":{\"statusCode\":400,\"message\":\"Invalid token\",\"error\":\"Bad Request\"}}",
            "span_id": "b5725d02edb2c99c",
            "trace_id": "a8f997f53d0bfa39d3ef128c574be373",
            "trace_flags": "01",
            "level": "error"
        }
    }</td>
    <td>Invalid token</td>
    <td>Check token generation and validation process</td>
    <td>xyz</td>
  </tr>
</table>
              `,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageAi;
