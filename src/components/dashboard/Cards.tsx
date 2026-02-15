import CreateCard from "./CreateCard";
import { cards } from "@/data/mock-data";

const Cards = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="
        cursor-pointer
        transition-transform duration-300 ease-out
        hover:scale-110 hover:translate-x-3
      "
          >
            <div className="relative">
              <div className="absolute text-white top-10 left-3">
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="text-[7px] uppercase">Card Number</span>
                    <span className="text-sm tracking-widest">
                      {card.number}
                    </span>
                  </div>

                  <div className="mt-5 flex justify-between gap-6">
                    <div className="flex flex-col">
                      <span className="text-[6px] uppercase">Card Holder</span>
                      <span className="text-xs">{card.holder}</span>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-[6px] uppercase">Expiry</span>
                      <span className="text-xs">{card.expiry}</span>
                    </div>
                  </div>
                </div>
              </div>

              <img
                src={card.image}
                alt="Bank card"
                className="w-52 rounded-2xl h-32 object-cover"
              />
            </div>
          </div>
        ))}
        <CreateCard />
      </div>
    </>
  );
};

export default Cards;
