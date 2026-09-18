import { RiQuestionnaireFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export function AboutUsPage() {
  return (
    <div className="my-10 space-y-10">
      <div className="shadow-[-1px_-1px_5px_rgba(0,0,0,0.2)] max-w-300 mx-auto space-y-5 p-5 rounded-sm">
        <h1 className="text-2xl font-bold border-b w-fit border-gray-400 mx-auto">
          Who Are We?
        </h1>
        <div className="flex md:grid md:grid-cols-2 md:gap-5 lg:gap-10">
          <img
            src="https://www.superwheelsautoparts.com/images/super-wheels.jpg"
            alt="superwheels logo"
            className="h-full hidden md:block"
          />
          <p className="text-sm [&>span]:font-bold text-gray-600">
            <span>Super Wheels Auto Parts Ltd</span> has firmly established
            itself as one of
            <span className="mx-1">
              Kenya's most trusted and reliable suppliers of quality car spare
              parts.
            </span>
            Our journey began over 5 years ago, building a strong foundation and
            a pristine reputation for reliability, authenticity, and excellent
            customer service primarily through our active trading on platforms
            like Jiji. We're not just sellers; we are a dedicated team committed
            to keeping Kenya's wheels turning safely and efficiently. We
            specialize in sourcing and supplying both
            <span className="ml-1">
              new and carefully inspected ex-Japan body parts
            </span>{" "}
            for a wide array of Japanese vehicle models. Our extensive inventory
            covers all major brands, including
            <span className="mx-1">
              Toyota, Nissan, Mazda, Suzuki, Honda, and Mitsubishi.
            </span>
            Our focus is on providing parts that meet or exceed Original
            Equipment Manufacturer (OEM) standards, ensuring your vehicle
            retains its performance and safety.
          </p>
        </div>
      </div>

      <div className="shadow-[-1px_-1px_5px_rgba(0,0,0,0.2)] max-w-300 mx-auto space-y-5 p-5 rounded-sm">
        <h1 className="text-2xl font-bold border-b w-fit border-gray-400">
          Our Product Range
        </h1>
        <div className="[&>div]:flex [&>div]:items-center [&>div]:text-gray-600 [&>div]:gap-2 [&>div]:py-1">
          <div>
            <TiTick /> <p>New & ex-Japan body parts</p>
          </div>
          <div>
            <TiTick /> <p>Headlights & lighting</p>
          </div>
          <div>
            <TiTick /> <p>Exterior accessories</p>
          </div>
          <div>
            <TiTick /> <p>Interior components</p>
          </div>
          <div>
            <TiTick /> <p>Mirrors, bumpers, tailgates</p>
          </div>
          <div>
            <TiTick /> <p>And many other parts for Japanese car models</p>
          </div>
        </div>
      </div>

      <div className="shadow-[-1px_-1px_5px_rgba(0,0,0,0.2)] max-w-300 mx-auto space-y-5 p-5 rounded-sm">
        <div>
          <h1 className="text-lg font-bold w-fit">Our Mission</h1>
          <p className="text-gray-600">
            To make car maintenance easier and more affordable by providing
            accessible, genuine spare parts for Japan-made cars across Kenya,
            backed by outstanding support and timely delivery.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold w-fit">Our Vision</h1>
          <p className="text-gray-600">
            To be Kenya’s first choice for Japanese vehicle spare parts — a
            company known for quality, trustworthiness, and customer-first
            service.
          </p>
        </div>
      </div>

      <div
        className="shadow-[-1px_-1px_5px_rgba(0,0,0,0.2)] max-w-300 mx-auto space-y-5 
      p-5 rounded-sm flex flex-col md:flex-row items-center gap-5"
      >
        <img
          src="https://www.superwheelsautoparts.com/images/why-choose-us.jpg"
          alt="Why choose us?"
          className="md:max-w-100 h-full hidden md:block"
        />
        <h1 className="text-2xl font-bold border-b w-fit border-gray-400 mx-auto md:hidden">Why choose us?</h1>
        <div className="space-y-3 text-gray-600">
          <p>
            - If you value genuine parts, clear communication, and dependable
            delivery, you’ll find a reliable partner in Super Wheels Auto Parts
            Ltd.
          </p>
          <p>
            - Whether you're doing a repair, restoration, or just maintenance, we
            aim to make your buying process smooth and worry-free.
          </p>
        </div>
      </div>

      <div
        className="shadow-[-1px_-1px_5px_rgba(0,0,0,0.2)] max-w-300 mx-auto space-y-5 p-5
      rounded-sm grid md:grid-cols-2 lg:grid-cols-[260px_250px_1fr] text-sm [&>div]:space-y-2"
      >
        <div>
          <h1 className="text-2xl font-bold border-b w-fit border-gray-400">
            What Sets Us Apart?
          </h1>
          <div className="[&>div]:flex [&>div]:items-center [&>div]:text-gray-600 [&>div]:gap-2 [&>div]:py-1">
            <div>
              <RiQuestionnaireFill />
              <p>Genuine & Quality Parts</p>
            </div>
            <div>
              <RiQuestionnaireFill />
              <p>Wide Selection</p>
            </div>
            <div>
              <RiQuestionnaireFill />
              <p>Transparency & Trust</p>
            </div>
            <div>
              <RiQuestionnaireFill />
              <p>Customer Support</p>
            </div>
            <div>
              <RiQuestionnaireFill />
              <p>Nationwide research</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold border-b w-fit border-gray-400">
            Our Values
          </h1>
          <div className="[&>div]:flex [&>div]:items-center [&>div]:text-gray-600 [&>div]:gap-2 [&>div]:py-1">
            <div>
              <RiQuestionnaireFill />
              <p>Integrity</p>
            </div>
            <div>
              <RiQuestionnaireFill />
              <p>Customer focus</p>
            </div>
            <div>
              <RiQuestionnaireFill />
              <p>Quality</p>
            </div>
            <div>
              <RiQuestionnaireFill />
              <p>Continuous Improvement</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold border-b w-fit border-gray-400">
            Our Journey
          </h1>
          <div className="[&>div]:flex [&>div]:items-center [&>div]:text-gray-600 [&>div]:gap-2 [&>div]:py-1">
            <div>
              <span className="font-semibold text-gray-800">Started:</span>
              <p>Over 5 years ago</p>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Growth:</span>
              <p>
                From a small local seller to a recognized name on Jiji with many
                satisfied customers
              </p>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Milestones:</span>
              <p>
                Achieved “Verified Seller” status, expanded inventory, broadened
                delivery network
              </p>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
