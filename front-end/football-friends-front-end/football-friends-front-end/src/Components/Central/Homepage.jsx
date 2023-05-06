import { useState } from "react";
import { getAllUsers, getOneUser, createUser, updateUser } from "../../API/UserApiCalls";

export default function Homepage() {

  // const test = getAllUsers().then((res) => res.json())
  // console.log(test)

// const test2 = getOneUser("6454e712e12f643ac6218e6a")
// console.log(test2)

// const test3 = createUser({
//   email: "test frontend email",
//   password: "frontend pass test"
// })
// console.log(test3)

const test4 = updateUser("64567cde27c32f9e4e6f7cc6", {
  email: "updated frontend email"
})
console.log(test4)

  return <h1>Homepage</h1>;
}
