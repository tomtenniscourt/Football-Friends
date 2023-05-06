import { useState } from "react";
import { getAllUsers } from "../../API/UserApiCalls";

export default function Homepage() {

  const test = getAllUsers().then((res) => res.json())
  
  console.log(test)

  return <h1>Homepage</h1>;
}
