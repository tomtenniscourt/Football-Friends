import { useState } from "react";
import { getAllUsers, getOneUser, createUser } from "../../API/UserApiCalls";

export default function Homepage() {

  // const test = getAllUsers().then((res) => res.json())
  // console.log(test)

// const test2 = getOneUser("6454e712e12f643ac6218e6a")
// console.log(test2)

const test3 = createUser({
  email: "test frontend email",
  password: "frontend pass test"
})
console.log(test3)

  return <h1>Homepage</h1>;
}
