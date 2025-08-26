import React, { useEffect, useMemo, useState } from "react";

// Import your product images from assets
import watch1 from "../../assets/product9.png";
import watch2 from "../../assets/watch1.png";
import watch3 from "../../assets/product10.png";
import promo1 from "../../assets/gift.png";
import promo2 from "../../assets/gift3.jpg";

const TABS = [16, 25, 33];
const DISCOUNT_RANGES = {
  16: [15, 18],
  25: [23, 27],
  33: [31, 36],
};

const HotSaleSection = () => {
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Products with manual imports
  const products = [
    {
      id: 1,
      name: "Luxury Silver Watch",
      price: 120,
      originalPrice: 160,
      image: watch1,
    },
    {
      id: 2,
      name: "Modern Black Watch",
      price: 150,
      originalPrice: 200,
      image: watch2,
    },
    {
      id: 3,
      name: "Classic Leather Watch",
      price: 95,
      originalPrice: 140,
      image: watch3,
    },
  ];

  // countdown (3 days)
  useEffect(() => {
    const end = new Date();
    end.setDate(end.getDate() + 3);

    const tick = () => {
      const now = Date.now();
      const diff = end.getTime() - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const calcDiscount = (p) =>
    Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);

  // filter by tabs
  const filtered = useMemo(() => {
    if (!selectedDiscount) return products;
    const [min, max] = DISCOUNT_RANGES[selectedDiscount];
    return products.filter((p) => {
      const d = calcDiscount(p);
      return d >= min && d <= max;
    });
  }, [selectedDiscount]);

  return (
    <section className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT PROMOS */}
        <div className="col-span-1 space-y-6 border border-yellow-50">
          <div className="bg-white p-6 md:p-8 border-amber-50">
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <p className="text-blue-600 font-bold">Basic Gift Idea</p>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  Mini Two Wheel <br /> Self Balancing Scooter
                </h3>
                <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-3 rounded transition">
                  Go Shop
                </button>
              </div>
              <img src={promo1} alt="Promo 1" className="w-1/2 h-56 object-contain" />
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 border border-amber-50 ">
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <p className="text-blue-600 font-bold">Get 50% Off</p>
                <h3 className="text-2xl font-bold mt-2">
                  New Arrivals in Accessories
                </h3>
                <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-3 rounded transition">
                  Go Shop
                </button>
              </div>
              <img src={promo2} alt="Promo 2" className="w-1/2 h-40 object-contain" />
            </div>
          </div>
        </div>

        {/* RIGHT HOT SALE */}
        <div className="col-span-1 md:col-span-2">
          {/* Header + Tabs */}
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold">Hot Sale</h2>
            <div className="flex items-center gap-8 text-gray-600 font-semibold">
              {TABS.map((d) => {
                const active = selectedDiscount === d;
                return (
                  <button
                    key={d}
                    onClick={() => setSelectedDiscount(d)}
                    className={`relative pb-3 transition ${
                      active ? "text-yellow-500" : "hover:text-gray-800"
                    }`}
                  >
                    {d}% Off
                    {active && (
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[6px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-yellow-500" />
                    )}
                  </button>
                );
              })}
              <button
                onClick={() => setSelectedDiscount(null)}
                className={`relative pb-3 transition ${
                  selectedDiscount === null
                    ? "text-yellow-500"
                    : "hover:text-gray-800"
                }`}
              >
                All
                {selectedDiscount === null && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[6px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-yellow-500" />
                )}
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((p) => {
              const d = calcDiscount(p);
              const sold = Math.max(10, (p.id * 7) % 40);
              const available = Math.max(20, (p.id * 11) % 50);
              const total = sold + available;
              const progress = Math.round((sold / total) * 100);

              return (
                <div key={p.id} className="bg-white p-6 text-center relative hover:brightness-105 transition">
                  {/* Discount badge */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-green-600 text-white flex flex-col items-center justify-center text-[11px] font-bold">
                    <span className="text-base leading-none">{d}%</span>
                    <span>Offer</span>
                  </div>

                  {/* Image */}
                  <div className="h-40 mb-4 flex items-center justify-center">
                    <img src={p.image} alt={p.name} className="h-full object-contain" />
                  </div>

                  {/* Title + price */}
                  <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="text-gray-400 line-through">
                      ${p.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-blue-600 text-xl font-bold">
                      ${p.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Sold / Available */}
                  <div className="text-sm text-gray-600 flex items-center justify-between mb-2">
                    <span>Sold: {sold}</span>
                    <span>Available: {available}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200">
                    <div
                      className="h-2 bg-yellow-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Timer */}
                  {timeLeft.expired ? (
                    <p className="mt-4 text-red-600 font-bold">Deal expired</p>
                  ) : (
                    <div className="mt-5">
                      <p className="text-yellow-500 font-semibold mb-3">
                        Hurry up! Offer ends in:
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <TimeDot value={timeLeft.days} label="DAYS" />
                        <TimeDot value={timeLeft.hours} label="HOURS" />
                        <TimeDot value={timeLeft.minutes} label="MINUTES" />
                        <TimeDot value={timeLeft.seconds} label="SECONDS" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimeDot = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
      {String(value ?? 0).padStart(2, "0")}
    </div>
    <div className="text-[10px] mt-1 tracking-wide text-gray-600">{label}</div>
  </div>
);

export default HotSaleSection;
