import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.header 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-extrabold text-green-800 mb-4"
          >
            About Eko Sharr
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 max-w-xl mx-auto"
          >
            Celebrating the true taste of gluten — handmade, wholesome, and undeniably delicious.
          </motion.p>
        </motion.header>

        <motion.section
          className="space-y-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold text-green-700 border-b-2 border-blue-400 pb-2"
          >
            Our Story
          </motion.h2>
          <motion.p variants={itemVariants}>
            Ekosharr is a company that exists since 1999, and in this short period of operation it has achieved an upward trend in growth.
            In the past period it has been constantly active on the market with a tendency
            to become an active export oriented company.
          </motion.p>
          <motion.p variants={itemVariants}>
            Today, our kitchen crafts everything from rustic breads to flaky croissants and fresh pasta,
            all baked to perfection with a touch of tradition.
          </motion.p>
          <motion.div variants={itemVariants} className="text-gray-700 leading-relaxed whitespace-pre-line">
            {`Ekosharr is a leader in milk and dairy production in
the Shar and Pelagonija region, which are regarded as ecologically clean environments and as such they
guarantee product quality.
Ekosharr has earned an award for quality meat and dairy products from the dairy product industry. Its products are constantly examined by all relevant institutions in the Republic of Macedonia such as: the Faculty of Veterinary Medicine in Skopje, Land O'Lakes Inc laboratory and the Institute of Veterinary Medicine in Skopje. Five Ekosharr products are awarded with a quality label. Each one of them is examined and checked 180 times on annual basis or a total of 900 annual checks.
The Ekosharr products are distributed in many retail objects through the biggest distribution centres. Ekosharr is a leader in processing dairy products in Shar Mountain region. In addition, the company has an established cooperation with 550 milk
partners.`}
          </motion.div>
        </motion.section>

        <motion.section
          className="space-y-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold text-green-700 border-b-2 border-blue-400 pb-2"
          >
            What Sets Us Apart
          </motion.h2>
          <motion.ul
            variants={itemVariants}
            className="list-disc list-inside space-y-3 text-gray-700"
          >
            <li>🌾 <strong>Locally Sourced Grains:</strong> Partnering with trusted farmers for premium wheat.</li>
            <li>🧑‍🍳 <strong>Small Batch Craftsmanship:</strong> Every product receives dedicated attention.</li>
            <li>✅ <strong>Clean Ingredients:</strong> No preservatives, just real food.</li>
            <li>🚚 <strong>Fresh Delivery:</strong> From our oven straight to your doorstep.</li>
          </motion.ul>
        </motion.section>

        <motion.section
          className="text-center mt-14"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold text-green-700 mb-3"
          >
            Join Our Community
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            Whether you’re a bread connoisseur, pasta lover, or just seeking genuine quality — welcome to Eko Sharr.
            Taste the tradition, enjoy purity, and savor the difference.
          </motion.p>
        </motion.section>

        <motion.footer
          className="text-center pt-10 border-t border-gray-200 mt-20 text-gray-500 italic text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          From Our Oven to Your Table — Crafted with care, baked with purpose.
        </motion.footer>
      </div>
    </div>
  );
};

export default AboutPage;
