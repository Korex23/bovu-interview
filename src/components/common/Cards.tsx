import React from "react";
import angle from "@/assets/angle.png";
import wavy from "@/assets/wavy.png";
import CreateCard from "./CreateCard";

const Cards = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3">
        <div>
          <div className="relative">
            <div className="absolute text-white text-base top-10 left-3">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="text-[7px] uppercase">Card Number</span>
                  <span>3100 6789 6729 8710</span>
                </div>
                <div className="mt-5 flex justify-between">
                  <div className="flex flex-col">
                    <span className="text-[6px] uppercase">Card Holder</span>
                    <span className="text-xs">Anita Rose</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[6px] uppercase">Expiry</span>
                    <span className="text-xs">09/17</span>
                  </div>
                </div>
              </div>
            </div>
            <img src={wavy} className="w-50 h-32" />
          </div>
        </div>
        <div>
          <div className="relative">
            <div className="absolute text-white text-base top-10 left-3">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <span className="text-[7px] uppercase">Card Number</span>
                  <span>3100 6789 6729 8710</span>
                </div>
                <div className="mt-5 flex justify-between">
                  <div className="flex flex-col">
                    <span className="text-[6px] uppercase">Card Holder</span>
                    <span className="text-xs">Anita Rose</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[6px] uppercase">Expiry</span>
                    <span className="text-xs">09/17</span>
                  </div>
                </div>
              </div>
            </div>
            <img src={angle} className="w-50 h-32" />
          </div>
        </div>
        <CreateCard />
      </div>
    </>
  );
};

export default Cards;
