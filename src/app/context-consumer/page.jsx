"use client";
import { CreateContext } from "@/context/firstContext";
import React, { useContext } from "react";

const ContextConsumer = () => {
  const contextValue = useContext(CreateContext);
  return (
    <div>
      <h1>Am From Context Consumer </h1>
      <h1>Context view == {contextValue}</h1>
    </div>
  );
};

export default ContextConsumer;
