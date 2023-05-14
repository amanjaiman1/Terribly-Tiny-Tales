import React, { useState } from "react";
import Histogram from "./Histogram";
import { motion } from 'framer-motion';

import { slideAnimation } from "../config/motion";


export default function SubmitButtonComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const loadHandle = () => {
    setIsLoading(!isLoading);
  };

  return (
    <motion.div
    {...slideAnimation('up')}
    >
      {isLoading ? <Histogram /> : <button className="custom-btn buttonofmotion" onClick={loadHandle}>Submit</button>}
    </motion.div>
  );
}
