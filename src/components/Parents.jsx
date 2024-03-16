"use client";

import { CreateContext } from "@/context/firstContext";
import { useContext } from "react";

const Parents = () => {
  const { contextValue, childValue } = useContext(CreateContext);

  return (
    <div>
      <h1>Parents components</h1>
      <h1>Use Context = {contextValue} </h1>
      <h1>Given from child {childValue}</h1>
    </div>
  );
};

export default Parents;
