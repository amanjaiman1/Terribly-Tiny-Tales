import React, { useState } from "react";
import Histogram from "./Histogram";
import React from "react";

export default function SubmitButtonComponent() {
  const [isLoading, setIsLoading] = useState(false);

  const loadHandle = () => {
    setIsLoading(!isLoading);
  };

  return (
    <div>
      {isLoading ? <Histogram /> : <button onClick={loadHandle}>Submit</button>}
    </div>
  );
}
