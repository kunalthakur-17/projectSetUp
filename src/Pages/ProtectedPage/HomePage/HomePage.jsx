import React, { useState } from "react";
import { set } from "react-hook-form";
import GlobalAddButton from "../../../Components/GlobalButton/GlobalAddButton";

export default function HomePage() {
  const [add, setAdd] = useState(0);

  const addItem = () => {
    setAdd(add + 1)
  }

  const subtractItem = () => {
    setAdd(add - 1)
  }


  return <div>
<div>This is a Home page</div>
    <div style={{ display: "flex" }}> <GlobalAddButton text={"Add"} onClick={addItem} /> {add} <GlobalAddButton text={"Subtract"} onClick={subtractItem} /> </div>
  </div>
}
