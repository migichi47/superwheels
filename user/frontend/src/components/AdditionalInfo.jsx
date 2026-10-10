import { Phone } from 'lucide-react'

const AdditionalInfo = () => {
  return (
    <>
        <div className="mb-20 px-10 mx-auto max-w-300 space-y-8">
          <div className="space-y-1">
            <h1 className="uppercase text-primary text-[11px] font-bold">
              A simpler way to shop
            </h1>
            <h2 className="text-2xl">Why choose Superwheels?</h2>
          </div>

          <div
            className="border grid sm:grid-cols-2 md:grid-cols-4 border-gray-200 [&>div]:border-b [&>div]:space-y-3
        [&>div]:border-gray-200 rounded-lg [&>div]:p-6 [&>div]:sm:border-r [&>div]:h-40 [&>div]:flex [&>div]:flex-col
        [&>div]:justify-center [&>div]:[&>span]:text-primary [&>div]:[&>span]:font-bold [&>div]:[&>span]:text-xs [&>div]:[&>h1]:text-sm
        [&>div]:[&>p]:text-xs [&>div]:[&>p]:text-gray-500"
          >
            <div>
              <span>01</span>
              <h1>Easy product discovery</h1>
              <p>Search by part, category, vehicle make or model.</p>
            </div>
            <div>
              <span>02</span>
              <h1>Vehicle-specific parts</h1>
              <p>Clear compatibility details help you compare options.</p>
            </div>
            <div>
              <span>03</span>
              <h1>Convenient ordering</h1>
              <p>Build your cart or continue your order via WhatsApp.</p>
            </div>
            <div className="border-none">
              <span>04</span>
              <h1>Helpful support</h1>
              <p>Ask our team when you are unsure about a part.</p>
            </div>
          </div>
        </div>
        <div className="bg-secondary">
          <div className="max-w-300 mx-auto px-5 py-20 text-white flex flex-col sm:flex-row gap-5 sm:gap-20 sm:items-center
          sm:justify-between ">
            <div className="space-y-5">
              <h1 className="uppercase text-amber-200 text-xs font-bold">
                Here when you need us
              </h1>
              <div className="space-y-1">
                <h1 className="text-2xl">Not sure which part you need?</h1>
                <p className="text-gray-300 text-xs">
                  Tell us your vehicle model and what you are looking for. Our
                  team can help you identify the right option.
                </p>
              </div>
            </div>
            <button className="bg-primary px-3 w-60 min-w-60 rounded-lg text-black font-bold text-xs flex items-center justify-center gap-2 h-12">
              <Phone className="w-4" /> Chat with us on WhatsApp
            </button>
          </div>
        </div>
      </>
  )
}

export default AdditionalInfo
