import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-16">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-green-800 mb-4">
            About Eko Sharr
          </h1>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Celebrating the true taste of gluten — handmade, wholesome, and undeniably delicious.
          </p>
        </header>

        <section className="space-y-5 animate-fadeInUp">
          <h2 className="text-2xl font-semibold text-green-700 border-b-2 border-blue-400 pb-2">
            Our Story
          </h2>
          <p>
            Eko Sharr was born from a passion for traditional baking and a belief that authentic food
            starts with the finest ingredients and time-tested craftsmanship. We set out to bring back
            the rich, satisfying flavors of gluten-based products made with care and love.
          </p>
          <p>
            Today, our kitchen crafts everything from rustic breads to flaky croissants and fresh pasta,
            all baked to perfection with a touch of tradition.
          </p>
        </section>

        <section className="space-y-5 animate-fadeInUp delay-100">
          <h2 className="text-2xl font-semibold text-green-700 border-b-2 border-blue-400 pb-2">
            What Sets Us Apart
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>🌾 <strong>Locally Sourced Grains:</strong> Partnering with trusted farmers for premium wheat.</li>
            <li>🧑‍🍳 <strong>Small Batch Craftsmanship:</strong> Every product receives dedicated attention.</li>
            <li>✅ <strong>Clean Ingredients:</strong> No preservatives, just real food.</li>
            <li>🚚 <strong>Fresh Delivery:</strong> From our oven straight to your doorstep.</li>
          </ul>
        </section>

        <section className="space-y-5 animate-fadeInUp delay-200">
          <h2 className="text-2xl font-semibold text-green-700 border-b-2 border-blue-400 pb-2">
            Why Gluten?
          </h2>
          <p>
            Gluten gives bread its perfect rise, pasta its ideal texture, and pastries their flakiness.
            While many trends change, we proudly honor the enduring quality and flavor that gluten brings
            when handled with care.
          </p>
        </section>

        <section className="text-center mt-14 animate-fadeInUp delay-300">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Join Our Community</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Whether you’re a bread connoisseur, pasta lover, or just seeking genuine quality — welcome to Eko Sharr.
            Taste the tradition, enjoy purity, and savor the difference.
          </p>
        </section>

        <footer className="text-center pt-10 border-t border-gray-200 mt-20 text-gray-500 italic text-sm">
          From Our Oven to Your Table — Crafted with care, baked with purpose.
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
