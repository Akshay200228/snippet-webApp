import React from 'react';
import { motion } from 'framer-motion';
import { card } from '../assets';

const Overview = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={card}
          alt="Overview Image"
          className="w-full h-64 rounded-full shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Overview;
