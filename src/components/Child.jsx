"use client";
import { CreateContext } from "@/context/firstContext";
import React, { useContext, useState } from "react";

const Child = () => {
  const [childStateValue, setChildStateValue] = useState("10");
  const { setChildValue } = useContext(CreateContext);

  const handleChange = (e) => {
    setChildStateValue(e.target.value);
  };

  const handleClick = () => {
    setChildValue(childStateValue);
  };

  return (
    <div>
      <h1>Child Component</h1>
      <input type="text" value={childStateValue} onChange={handleChange} />
      <button onClick={handleClick}>Update Context Value</button>
    </div>
  );
};

export default Child;
