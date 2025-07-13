import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaEnvelope className="text-green-700 text-4xl" />,
    title: "Email",
    link: "mailto:info@ekosharr.com",
    text: "info@ekosharr.com",
  },
  {
    icon: <FaPhone className="text-green-700 text-4xl" />,
    title: "Phone",
    link: "tel:+1234567890",
    text: "+1 (234) 567-890",
  },
  {
    icon: <FaFacebookF className="text-green-700 text-4xl" />,
    title: "Facebook",
    link: "https://facebook.com/ekosharr",
    text: "facebook.com/ekosharr",
  },
  {
    icon: <FaInstagram className="text-green-700 text-4xl" />,
    title: "Instagram",
    link: "https://instagram.com/ekosharr",
    text: "@ekosharr",
  },
  {
    icon: <FaTwitter className="text-green-700 text-4xl" />,
    title: "Twitter",
    link: "https://twitter.com/ekosharr",
    text: "@ekosharr",
    fullWidth: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.5,
      ease: "easeOut",
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-extrabold text-green-800 mb-3"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-700 max-w-lg mx-auto"
          >
            Have questions or want to connect? Here’s how you can reach us.
          </motion.p>
        </header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactItems.map(({ icon, title, link, text, fullWidth }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col items-center space-y-3 p-6 border border-blue-300 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer ${
                fullWidth ? "sm:col-span-2" : ""
              }`}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
              onClick={() => window.open(link, "_blank")}
            >
              {icon}
              <h2 className="text-xl font-semibold text-green-800">{title}</h2>
              <span className="text-blue-600 hover:underline">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
