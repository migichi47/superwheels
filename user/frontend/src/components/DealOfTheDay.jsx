import { useEffect, useState } from "react";
import { Button } from "./Button";
import api from "../axios";
import { addComma } from "../utils/addComma";
import { capitaliseFirstLetter } from "../utils/formatName";
import { orderOnWhatsApp } from "../utils/whatsappUrl";
import { FaLongArrowAltRight } from "react-icons/fa";

export function DealOfTheDay() {
  const [deal, setDeal] = useState({});
  const [loading, setLoading] = useState(true);
  const { product, dealPrice, originalPrice, expiresAt } = deal;
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    async function getDealOfTheDay() {
      try {
        const response = await api.get("/api/products/deal-of-the-day");
        setDeal(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
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
    <div
      className="mx-auto w-fit top-10 lg:top-20 bg-white px-10 py-10 flex flex-col
        lg:flex-row gap-20 items-center group h-fit"
    >
      {loading ? (
        <div className="h-80 w-90 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin mx-auto"></div>

            <p className="mt-4 text-gray-600">Loading deal of the day...</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-10 flex-col sm:flex-row">
          <div className="max-h-120 overflow-hidden max-w-90 lg:max-w-80 rounded-xl relative">
            <div className="bg-primary rounded-full w-fit absolute top-3 left-3 text-sm font-bold py-7 px-2 -rotate-12">30% OFF</div>
            <img src={product?.image} alt="" className="w-full object-center" />
          </div>
          <div className="lg:space-y-20 space-y-10 h-fit my-auto">
            <div className="space-y-5">
              <h1 className="uppercase text-primary text-[11px] font-semibold">
                Deal of the day
              </h1>
              <h1 className="text-2xl font-semibold space-x-1.5">
                <span>{capitaliseFirstLetter(product?.category)}</span>
                <span>{capitaliseFirstLetter(product?.make)}</span>
                <span>{capitaliseFirstLetter(product?.model)}</span>
                <span>{product?.year}</span>
              </h1>
              <div className="flex gap-3 items-center">
                <h2 className="text-3xl text-primary font-semibold">
                  Ksh {addComma(dealPrice)}
                </h2>
                <span className="text-secondary font-semibold text-sm line-through">
                  Ksh {addComma(originalPrice)}
                </span>
              </div>
              <h3 className="text-xs text-gray-500 max-w-120">
                {product?.description}
              </h3>
              <div
                className="[&>div]:border [&>div]:border-gray-200 [&>div]:rounded-sm [&>div]:flex [&>div]:flex-col
                [&>div]:items-center [&>div]:gap-1 [&>div]:py-2 [&>div]:bg-gray-100 flex gap-3 [&>div]:[&>h1]:font-semibold
                [&>div]:[&>h1]:text-xl [&>div]:[&>h2]:text-gray-400 [&>div]:[&>h2]:text-[8px] [&>div]:px-3 lg:w-full
                [&>div]:w-15"
              >
                <div>
                  <h1>{hoursLeft}</h1>
                  <h2>HOURS</h2>
                </div>
                <div>
                  <h1>{minutesLeft}</h1>
                  <h2>MINS</h2>
                </div>
                <div>
                  <h1>{secondsLeft}</h1>
                  <h2>SECS</h2>
                </div>
              </div>
            </div>
            <Button
              className="px-5 py-3 bg-primary text-black hover:text-white text-sm font-bold hover:-translate-y-0.5 transition gap-2"
              onClick={() =>
                orderOnWhatsApp(
                  product?.category,
                  product?.make,
                  product?.model,
                  product?.year,
                  dealPrice,
                )
              }
            >
              Shop this deal <FaLongArrowAltRight className="text-sm" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
