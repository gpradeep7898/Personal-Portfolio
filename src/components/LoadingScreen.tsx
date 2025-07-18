import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-netflix-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Netflix-style logo animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl font-bold text-netflix-red">
            PRADEEP GATTI
          </h1>
          <p className="text-xl text-netflix-gray mt-2">
            Data Analyst Portfolio
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-netflix-red rounded-full max-w-md mx-auto"
        />

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-netflix-gray mt-4 text-lg"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen; 