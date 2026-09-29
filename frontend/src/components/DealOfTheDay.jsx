import { useEffect, useState } from "react";
import { Button } from "./Button";
import api from "../axios";
import { addComma } from "../utils/addComma";
import { capitaliseFirstLetter } from "../utils/formatName";

export function DealOfTheDay() {
  const [deal, setDeal] = useState({});
  const { product, dealPrice, originalPrice, expiresAt } = deal;
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    async function getDealOfTheDay() {
      const response = await api.get("/api/products/deal-of-the-day");
      setDeal(response.data);
    }
    getDealOfTheDay();
  }, []);

  useEffect(() => {
    if (!expiresAt) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const expiry = new Date(expiresAt).getTime();
      const difference = expiry - now;

      setHoursLeft(Math.floor(difference / (1000 * 60 * 60)));
      setMinutesLeft(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSecondsLeft(Math.floor((difference % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [deal, expiresAt]);

  return (
    <div className="relative px-10 lg:overflow-hidden h-185 lg:h-150 flex justify-center shadow-2xl mb-30 lg:mb-10">
      <img
        className="w-[90%]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQz41m6jJhHkAX9w12d7CZNmTwBjSwaQN4CjS94_BFocqyYfvEztT6G61&s=10"
        alt=""
      />
      <div className="bg-black/60 w-full h-full absolute hidden lg:block" />
      <div className="mx-auto absolute w-fit top-10 lg:top-20 bg-white px-10 py-10 flex flex-col lg:flex-row gap-20 items-center group h-full lg:h-fit">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl text-white bg-primary py-2 px-5 w-full lg:w-fit flex justify-center lg:block lg:absolute -top-5 left-5">
            Deal of the Day
          </h1>
          <div className="max-h-100 overflow-hidden max-w-100">
            <img src={product?.image} alt="" className="group-hover:scale-110 transition" />
          </div>
        </div>
        <div className="space-y-20">
          <div className="space-y-5">
            <h1 className="text-2xl font-semibold">
              {capitaliseFirstLetter(product?.category)}{" "}
              {capitaliseFirstLetter(product?.make)}{" "}
              {capitaliseFirstLetter(product?.model)} {product?.year}
            </h1>
            <s className="text-secondary font-semibold text-sm">
              Ksh {addComma(originalPrice)}
            </s>
            <h2 className="text-xl text-primary font-semibold">
              Ksh {addComma(dealPrice)}
            </h2>
            <h3 className="text-sm text-gray-500">{product?.description}</h3>
            <div
              className="[&>div]:border [&>div]:border-gray-300 [&>div]:rounded-sm [&>div]:flex [&>div]:flex-col
          [&>div]:items-center  [&>div]:gap-1 flex gap-3 [&>div]:[&>h1]:font-semibold [&>div]:[&>h1]:text-xl
          [&>div]:[&>h2]:text-gray-400 [&>div]:[&>h2]:text-sm [&>div]:px-3"
            >
              <div>
                <h1>{hoursLeft}</h1>
                <h2>HOUR</h2>
              </div>
              <div>
                <h1>{minutesLeft}</h1>
                <h2>MIN</h2>
              </div>
              <div>
                <h1>{secondsLeft}</h1>
                <h2>SEC</h2>
              </div>
            </div>
          </div>
          <Button className="px-5 bg-black hover:bg-black/80">WHATSAPP TO ORDER</Button>
        </div>
        <img
          src="../../images/images.png"
          className="lg:h-50 h-30 absolute bottom-0 right-0"
          alt=""
        />
      </div>
    </div>
  );
}
