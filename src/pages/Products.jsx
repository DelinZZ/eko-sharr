import React, { useState } from "react";
import { motion } from "framer-motion";

const cheeseProducts = [
  {
    id: 1,
    name: "Sharsko Cow Milk White Cheese",
    description: "Traditional white cheese made from cow's milk.",
    weightOptions: "0.5kg/1kg/2kg/4kg/8kg/15kg",
    image: "/images/cheese/cow-milk-white.jpg",
    nutrition: {
      energy: "1263KJ/302kcal",
      proteins: "16.9g",
      carbs: "1.4g",
      fat: "24.7g",
      vitaminA: "1450U",
      vitaminB1: "0.01mg",
      vitaminB2: "0.04mg",
      niacin: "0.1mg",
    },
    fatDryMatter: "45%",
    waterContent: "50%",
    salt: "3.5%",
  },
  {
    id: 2,
    name: "Sharsko Mixed Milk White Cheese",
    description: "White cheese made from a blend of different milks.",
    weightOptions: "0.5kg/1kg/2kg/4kg/8kg/15kg",
    image: "/images/cheese/mixed-milk-white.jpg",
    nutrition: {
      energy: "1318KJ/315kcal",
      proteins: "17.0g",
      carbs: "1.3g",
      fat: "25.8g",
      vitaminA: "950U",
      vitaminB1: "0.02mg",
      vitaminB2: "0.61mg",
      niacin: "0.1mg",
    },
    fatDryMatter: "45%",
    waterContent: "50%",
    salt: "3.5%",
  },
  {
    id: 3,
    name: "Sharsko Sheep Milk White Cheese",
    description: "Rich white cheese made from sheep's milk.",
    weightOptions: "0.5kg/1kg/2kg/4kg/8kg/15kg",
    image: "/images/cheese/sheep-milk-white.jpg",
    nutrition: {
      energy: "1364KJ/326kcal",
      proteins: "17.1g",
      carbs: "1.1g",
      fat: "27.0g",
      vitaminA: "950U",
      vitaminB1: "0.02mg",
      vitaminB2: "0.61mg",
      niacin: "0.1mg",
    },
    fatDryMatter: "50%",
    waterContent: "50%",
    salt: "3.5%",
  },
  {
    id: 4,
    name: "Hard Cheese",
    description: "Aged hard cheese with robust flavor.",
    weightOptions: "0.2kg/0.5kg",
    image: "/images/cheese/hard-cheese.jpg",
    nutrition: {
      energy: "1318KJ/315kcal",
      proteins: "14g",
      carbs: "1.9g",
      fat: "20.5g",
      vitaminA: "800U",
      vitaminB1: "0.02mg",
      vitaminB2: "0.83mg",
      niacin: "0.1mg",
    },
    fatDryMatter: "45%",
    waterContent: "50%",
    salt: "6%",
  },
  {
    id: 9,
    name: "Sharsko Curd Cheese",
    description: "Fresh and creamy curd cheese.",
    image: "/images/cheese/curd-cheese.jpg",
    nutrition: {
      energy: "640KJ/153kcal",
      proteins: "14.2g",
      carbs: "2.6g",
      fat: "9.0g",
      vitaminA: "300U",
      vitaminB1: "0.04mg",
      vitaminB2: "0.5mg",
      niacin: "0.1mg",
    },
    fatDryMatter: "20%",
    waterContent: "90%",
    salt: "1.2%",
  },
  {
    id: 10,
    name: "Feteko",
    description: "Traditional cheese variety.",
    weightOptions: "0.5kg/1kg/2kg/16kg",
    image: "/images/cheese/feteko.jpg",
    nutrition: {
      energy: "1180KJ/285kcal",
      proteins: "10.0g",
      carbs: "5.0g",
      fat: "25.0g",
      vitaminA: "300U",
      vitaminB1: "0.04mg",
      vitaminB2: "0.5mg",
      niacin: "0.1mg",
    },
    skinMilk: "<15%",
    dryMatter: "40%",
    salt: "2%",
  },
  {
    id: 11,
    name: "Edamer",
    description: "Classic Edamer cheese.",
    weightOptions: "0.5kg/3kg",
    image: "/images/cheese/edamer.jpg",
    nutrition: {
      energy: "1389KJ/334kcal",
      proteins: "25.0g",
      carbs: "0.1g",
      fat: "26.0g",
    },
  },
  {
    id: 12,
    name: "Goldi",
    description: "Premium cheese selection.",
    weightOptions: "3kg",
    image: "/images/cheese/goldi.jpg",
    nutrition: {
      energy: "1041KJ/250kcal",
      proteins: "18.7g",
      carbs: "0.08g",
      fat: "19.5g",
    },
  },
  {
    id: 13,
    name: "Smoked Cheese",
    description: "Richly flavored smoked cheese.",
    weightOptions: "0.5kg",
    image: "/images/cheese/smoked-cheese.jpg",
    nutrition: {
      energy: "1625KJ/390kcal",
      proteins: "25.0g",
      carbs: "1.7g",
      fat: "31.0g",
      vitaminA: "1490U",
      vitaminB1: "0.01mg",
      vitaminB2: "0.52mg",
      niacin: "0.1mg",
    },
    fatDryMatter: "35%",
    waterContent: "50%",
    salt: "2.5%",
  },
];

const kashkavalProducts = [
  {
    id: 5,
    name: "Sharsko Cow Milk Yellow Cheese Kashkaval",
    description: "Yellow cheese made from cow's milk.",
    weightOptions: "0.5kg/1kg/3kg",
    image: "/images/kashkaval/cow-milk-yellow.jpg",
    nutrition: {
      energy: "1625KJ/390kcal",
      proteins: "25.0g",
      carbs: "1.7g",
      fat: "31.0g",
      vitaminA: "1400U",
      vitaminB1: "0.01mg",
      vitaminB2: "0.45mg",
      niacin: "0.1mg",
    },
    fatDryMatter: "45%",
    waterContent: "40%",
    salt: "2.5%",
  },
  {
    id: 6,
    name: "Sharsko Mixed Milk Yellow Cheese Kashkaval",
    description: "Yellow cheese made from mixed milk.",
    weightOptions: "0.5kg/1kg",
    image: "/images/kashkaval/mixed-milk-yellow.jpg",
    nutrition: {
      energy: "1785KJ/428kcal",
      proteins: "27.8g",
      carbs: "1.8g",
      fat: "34.2g",
      vitaminA: "1490U",
      vitaminB1: "0.01mg",
      vitaminB2: "0.52mg",
      niacin: "0.1mg",
    },
    fatDryMatter: "50%",
    waterContent: "40%",
    salt: "2.5%",
  },
  {
    id: 7,
    name: "Sharsko Sheep Milk Yellow Cheese Kashkaval",
    description: "Premium yellow cheese made from sheep's milk.",
    weightOptions: "0.5kg/1kg",
    image: "/images/kashkaval/sheep-milk-yellow.jpg",
    nutrition: {
      energy: "1785KJ/428kcal",
      proteins: "27.8g",
      carbs: "1.8g",
      fat: "32.2g",
      vitaminA: "1490U",
      vitaminB1: "0.1mg",
      vitaminB2: "0.52mg",
      niacin: "0.1mg",
    },
    fatDryMatter: "55%",
    waterContent: "40%",
    salt: "2.5%",
  },
  {
    id: 8,
    name: "Sharsko Premium Yellow Cheese Kashkaval",
    description: "Our highest quality yellow cheese.",
    weightOptions: "0.5kg/1kg",
    image: "/images/kashkaval/premium-yellow.jpg",
    nutrition: {
      energy: "1625KJ/390kcal",
      proteins: "25.0g",
      carbs: "1.7g",
      fat: "31.0g",
    },
    fatDryMatter: "45%",
    waterContent: "40%",
    salt: "2.5%",
  },
];

const oliveProducts = [
  {
    id: 14,
    name: "Black Olives 121-140",
    description: "Premium quality black olives.",
    weightOptions: "500g/720g/2kg/3kg/8kg",
    image: "/images/olives/black-121-140.jpg",
  },
  {
    id: 15,
    name: "Kalamata Olives 101-110",
    description: "Authentic Kalamata olives.",
    weightOptions: "500g/720g/2kg/3kg/8kg",
    image: "/images/olives/kalamata-101-110.jpg",
  },
  {
    id: 16,
    name: "Green Olives 81-90",
    description: "Fresh green olives.",
    weightOptions: "500g/720g/2kg/3kg/8kg",
    image: "/images/olives/green-81-90.jpg",
  },
  {
    id: 17,
    name: "Green Olives 121-140",
    description: "Large green olives.",
    weightOptions: "500g/720g/2kg/3kg/8kg",
    image: "/images/olives/green-121-140.jpg",
  },
  {
    id: 18,
    name: "Brown Olives 101-110",
    description: "Unique brown olives.",
    weightOptions: "500g/720g/2kg/3kg/8kg",
    image: "/images/olives/brown-101-110.jpg",
  },
  {
    id: 19,
    name: "Pepper Stuffed Olives 101-110",
    description: "Green olives stuffed with pepper.",
    weightOptions: "500g/720g/2kg/3kg/8kg",
    image: "/images/olives/pepper-stuffed.jpg",
  },
  {
    id: 20,
    name: "Chopped Olives",
    description: "Convenient chopped olives.",
    weightOptions: "250g/500g/8kg",
    image: "/images/olives/chopped.jpg",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const headerFadeIn = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const tabVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const ProductCard = ({ product }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="border-2 border-blue-300 rounded-3xl shadow-md overflow-hidden bg-white cursor-pointer
        hover:shadow-xl hover:border-green-600 hover:scale-[1.03] transition-transform duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110"
        onError={(e) => {
          e.target.src = "/images/placeholder.jpg";
        }}
      />
      <div className="p-6 space-y-3">
        <h2 className="text-xl font-semibold text-green-700">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        {product.weightOptions && (
          <p className="text-sm text-gray-500">
            <span className="font-medium">Available in:</span> {product.weightOptions}
          </p>
        )}
        {product.nutrition && (
          <div className="mt-3">
            <h3 className="font-medium text-gray-700">Nutrition per 100g:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Energy: {product.nutrition.energy}</li>
              <li>Proteins: {product.nutrition.proteins}</li>
              <li>Carbs: {product.nutrition.carbs}</li>
              <li>Fat: {product.nutrition.fat}</li>
              {product.nutrition.vitaminA && <li>Vitamin A: {product.nutrition.vitaminA}</li>}
              {product.nutrition.vitaminB1 && <li>Vitamin B1: {product.nutrition.vitaminB1}</li>}
              {product.nutrition.vitaminB2 && <li>Vitamin B2: {product.nutrition.vitaminB2}</li>}
              {product.nutrition.niacin && <li>Niacin (PP): {product.nutrition.niacin}</li>}
            </ul>
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
          {product.fatDryMatter && (
            <p className="text-gray-600">
              <span className="font-medium">Fat in dry matter:</span> {product.fatDryMatter}
            </p>
          )}
          {product.waterContent && (
            <p className="text-gray-600">
              <span className="font-medium">Water content:</span> {product.waterContent}
            </p>
          )}
          {product.salt && (
            <p className="text-gray-600">
              <span className="font-medium">Salt:</span> {product.salt}
            </p>
          )}
          {product.skinMilk && (
            <p className="text-gray-600">
              <span className="font-medium">Skin milk:</span> {product.skinMilk}
            </p>
          )}
          {product.dryMatter && (
            <p className="text-gray-600">
              <span className="font-medium">Dry matter:</span> {product.dryMatter}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ children }) => {
  return (
    <motion.h2
      variants={headerFadeIn}
      className="text-3xl font-bold text-green-700 mb-8 text-center"
    >
      {children}
    </motion.h2>
  );
};

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState("cheese");

  const tabs = [
    { id: "cheese", label: "Cheese", products: cheeseProducts },
    { id: "kashkaval", label: "Kashkaval", products: kashkavalProducts },
    { id: "olives", label: "Olives", products: oliveProducts },
  ];

  const activeProducts = tabs.find(tab => tab.id === activeTab)?.products || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl font-extrabold text-green-800 mb-3"
          >
            Our Dairy & Olive Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-700 text-lg max-w-xl mx-auto"
          >
            Premium quality products - traditional recipes with natural ingredients.
          </motion.p>
        </header>

        {/* Category Tabs */}
        <motion.div 
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-1 bg-green-100 p-1 rounded-xl shadow-inner">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                variants={tabVariants}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  activeTab === tab.id
                    ? "bg-green-600 text-white shadow-md"
                    : "text-green-700 hover:bg-green-200"
                }`}
              >
                {tab.label} ({tab.products.length})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Active Products Section */}
        <motion.section
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <SectionHeader>
            {tabs.find(tab => tab.id === activeTab)?.label} Selection
          </SectionHeader>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {activeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProductsPage;