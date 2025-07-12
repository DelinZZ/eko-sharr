import React from "react";
import factoryVideo from "../assets/factoryvideo.mp4";
import secondPartImage from "../assets/secondpart.jpg";
import thirdPartImage from "../assets/thirdpart.jpg";
import BestSeller1 from "../assets/BestSeller1.png";
import BestSeller2 from "../assets/BestSeller2.png";

const Home = () => {
  return (
    <div className="text-gray-800 relative">
      {/* Hero Video Background */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={factoryVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white bg-opacity-80 p-6 rounded shadow text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800">
              Welcome to Eko Sharr
            </h1>
            <p className="text-sm md:text-base text-gray-700 mt-2">
              Taste the tradition of the Sharr mountains
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-gray-700">
  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-700">
    Cheese and Milk Throughout History
  </h2>

  {/* Full-width top text block */}
  <div className="mb-12 leading-relaxed text-justify">
    <p>
      The Ancient civilizations indulged themselves in milk, cheese and
      dairy products. In the year 2000 B.C. not only did the Greeks use
      the milk and dairy products, but they also offered them as gifts to
      the Gods. Aristotle, the Greek philosopher, and the Great Homer both
      wrote about milk and dairy products and the animals which produced
      milk. Milk and cheese was consumed by the Romans as well.
      Diocletian wrote a book on the rules, regulations and price of
      cheese in the year 300 BC. Cheese was considered such delicate and
      precious food, so the Roman soldiers passed down the secret of
      cheese making throughout the numerous provinces under the Roman
      Empire. In the early Middle Ages, the barbarian tribes (Huns, Goths,
      Franks and the Germanic tribes) fed on milk, cheese and meat. In the
      late Middle Ages, a great number of monasteries became centers for
      milk and cheese production, and these centers were main suppliers
      for the King's castles and towns. The ancient records provide
      information that each priest was allowed to consume a kilogram of
      cheese on a weekly basis. In the Holy Quran, in the chapters
      dedicated to milk, it is said that the milk and blood travel through
      the same blood vessels, however the milk is white and the blood is
      red, therefore each believer should ask himself/herself the question
      why that is. In the Islamic culture, from the early age, milk and
      dairy products were consumed as main food products and were
      considered as an elixir for well-being and strength.
    </p>
  </div>

  {/* Two-column layout */}
  <div className="flex flex-col md:flex-row gap-10">
    {/* LEFT column - text blocks */}
    <div className="md:w-1/2 flex flex-col leading-relaxed text-justify">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-green-700">
          The Year 1822
        </h3>
        <p>
          The year 1822 is worth mentioning when discussing the history of
          milk. It is the year when Louis Pasteur discovered the process
          of pasteurization, by which milk became accessible to the wider
          classes of the society. Later in 1915, a new innovative milk
          packaging method, Pure Pak was invented.
        </p>
      </div>

      <div className="mt-20"> {/* <-- increased spacing to align with 2nd image */}
        <h3 className="text-xl font-semibold mb-2 text-green-700">
          Shar Region Traditions
        </h3>
        <p>
          The stories and notes about milk and dairy products passed down
          from generation to generation in our Shar region can be added to
          the world's history and tradition of milk and dairy product
          production. Those stories tell that Shar Mountains are the only
          mountains in the Balkans covered in snow all year-round.
        </p>
      </div>
    </div>

    {/* RIGHT column - images */}
    <div className="md:w-1/2 flex flex-col leading-relaxed">
      <img
        src={secondPartImage}
        alt="Louis Pasteur and Pasteurization"
        className="rounded shadow object-cover w-full h-48 md:h-64"
      />
      <img
        src={thirdPartImage}
        alt="Shar Mountains Covered in Snow"
        className="rounded shadow object-cover w-full h-48 md:h-64 mt-20"
      />
    </div>
  </div>
</section>


      {/* Best Seller Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-800 text-center mb-10">
            Our Best Seller
          </h2>

          {/* First Image Row - Left Side */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-10">
            <img
              src={BestSeller1}
              alt="Best Seller Cheese 1"
              className="w-full md:w-1/2 rounded shadow"
            />
            <div className="w-full md:w-1/2" />
          </div>

          {/* Second Image Row - Right Side */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2" />
            <img
              src={BestSeller2}
              alt="Best Seller Cheese 2"
              className="w-full md:w-1/2 rounded shadow"
            />
          </div>
        </div>
      </section>

      {/* Cheese Info */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-gray-700">
  <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-700">
    Our Values
  </h2>

  <div className="space-y-8 leading-relaxed text-justify">
    <div>
      <h3 className="text-xl font-semibold mb-2">Tradition and Eco-Culture</h3>
      <p>
        The art in cheesemaking by the old trusted recipes using the natural products from our region such as: the untouched nature, abundant pastures and wellsprings, gives us the right to be proud of and believe it is a unique compound offering great advantages.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">Mastery and Technology</h3>
      <p>
        The modern and advanced technologies as well as the skills of our hard-working cheese makers make our products a precious gift for each table.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">Trust and Responsibility</h3>
      <p>
        We keep our promises and are responsible towards our partners and consumers. We help the community and protect the working environment.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-2">Open-mindedness and Tolerance</h3>
      <p>
        We highly respect the views and opinions of others and we are open for cooperation and experience exchange. Moreover, we respect having various lifestyles, culture and tradition. We support toleration and understanding.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
