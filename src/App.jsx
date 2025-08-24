import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Scene = ({ text }) => (
  <div className="flex items-center justify-center h-screen bg-black">
    <motion.h1
      className="text-6xl font-bold text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      {text}
    </motion.h1>
  </div>
);

export default function App() {
  const [scene, setScene] = useState("starting");

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "1") setScene("starting");
      if (e.key === "2") setScene("brb");
      if (e.key === "3") setScene("ending");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {scene === "starting" && <Scene text="Stream Starting Soon" />}
      {scene === "brb" && <Scene text="Be Right Back" />}
      {scene === "ending" && <Scene text="Stream Ending" />}
    </>
  );
}
