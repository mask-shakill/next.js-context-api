"use client";

import { CreateContext } from "@/context/firstContext";
import { useContext } from "react";

const Parents = () => {
  const contextValue = useContext(CreateContext);
  return (
    <div>
      <h1>Parents components</h1>
      <h1>Use Context = {contextValue} </h1>
    </div>
  );
};

export default Parents;
