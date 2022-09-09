import React from "react";
import ReactMarkdown from "react-markdown";

export default function Info({ data }) {
  return (
    <div className="h-full bg-[#161718] text-[#9f844e] p-3 pt-16 sm:p-5 sm:pt-20 md:px-28 lg:px-80">
      <div>
        <h1 className="text-3xl custom-underline mb-5 sm:text-5xl">
          {data.Header}
        </h1>
      </div>
      <div>
        <ReactMarkdown children={data.Text} />
      </div>
    </div>
  );
}
