import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, color: "bg-lime-600" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: false, color: "bg-lime-600" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, color: "bg-blue-600" },
    },
  ];
  return (
    <div
      ref={ref}
      className="w-full h-full fixed top-0 left-0 z-[3] flex gap-5 flex-wrap p-5"
    >
      {data?.map((item, index) => (
        <Card refrence={ref} data={item} />
      ))}
    </div>
  );
}

export default Foreground;
