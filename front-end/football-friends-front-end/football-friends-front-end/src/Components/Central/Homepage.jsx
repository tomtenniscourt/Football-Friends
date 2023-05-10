import { useState, useEffect } from "react";
import { test } from "../../API/AuthenticationApiCalls";
import { seedUsers } from "../../../../../../Backend/Seed/seed";
// import { getAllUsers, getOneUser, updateUser } from "../../API/UserApiCalls";
// import { createAdmiredPlayer, deleteAdmiredPlayer, updateAdmiredPlayer } from "../../API/PlayersAdmiredApiCalls";
// import { createUser } from "../../API/AuthenticationApiCalls";
export default function Homepage() {
  /**** TBC on what content should go here. Potentially use a third party API to
   * populate this with football news or info on some random football players ****/
  const [message, setMessage] = useState("");
  useEffect(() => {
    test()
      .then((result) => result.message)
      .then((output) => setMessage(output));
  }, []);

  return (
    <div className="homepage">
      <h1 className="logo">
        👍🏻Football Friends
        <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>
          👍🏻
        </span>
      </h1>
      <div className="homepageContent">
        <div className="newUsers">
          <h2>New Football Friends</h2>
        </div>
        <div className="trendingUsers">
          <h2>Trending Football Friends</h2>
        </div>
        <div className="userLikeThis">
          <h2>Football Friends who like XXX</h2>
        </div>
        <div className="localUsers">
          <h2>Football Friends in XXX</h2>
        </div>
      </div>
    </div>
  );
}

// const test = getAllUsers()
// console.log(test)

// const test2 = getOneUser("6454e712e12f643ac6218e6a")
// console.log(test2)

// const test3 = createUser({
//   email: "test frontend email",
//   password: "frontend pass test"
// })
// console.log(test3)

// const test4 = updateUser("64567cde27c32f9e4e6f7cc6", {
//   email: "updated frontend email"
// })
// console.log(test4)

// const test5 = createAdmiredPlayer("64567cde27c32f9e4e6f7cc6", {
//   name: "test 3 name",
//   reasonAdmired: "test 3 test"
// })
// console.log(test5)

// const test6 = deleteAdmiredPlayer("64567cde27c32f9e4e6f7cc6", "64567f7227c32f9e4e6f7ce2")
// console.log(test6)

// const test7 = updateAdmiredPlayer("64567cde27c32f9e4e6f7cc6", "6456803b27c32f9e4e6f7d22", {
//   name: "new test",
//   reasonAdmired: "hi"
// })
// console.log(test7)
