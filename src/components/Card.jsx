import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ refrence, data }) {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{ scale: 1.1 }}
      className="relative w-60 h-72 rounded-[30px] bg-zinc-950/50 text-white p-5 overflow-hidden"
    >
      <FaRegFilePdf />
      <p className=" text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-5 py-3 px-8">
          <h5>{data.fileSize}</h5>
          <span>
            {data.close ? (
              <MdDownloadForOffline size="1.5em" />
            ) : (
              <IoIosCloseCircle size="1.5em" />
            )}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div className={` ${data.tag.color} flex justify-center items-center py-3 `}>
            <h3 className="text-lg">Downlod Now</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
