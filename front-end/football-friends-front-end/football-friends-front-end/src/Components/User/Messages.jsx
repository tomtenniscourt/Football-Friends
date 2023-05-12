import { useState } from "react";
export default function Messages() {
  /** TBC exactly how this will work, not required for MVP but defo good to have once
   * we work out how we would actually store 'messages' in the backend and how two users
   * would actually send a message to eachother
   * Currently this functionality would rely on a user being able to login and our
   * backend being able to recognise requests coming from a specific user
   * The thinking on this can be done ahead of the authentication functionality being
   * complete
   */

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "330px",
          height: "330px",
          overflow: "hidden",
          borderRadius: "50%",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto", 
        }}
      >
        <img
          src="https://i.imgur.com/AGm0oCR.png"
          alt="your-image-description"
          className="img-fluid"
          style={{
            width: "100%",
            height: "auto",
            clipPath: "circle(38% at 50% 50%)",
          }}
        />
      </div>
<h1 className="text-center" style={{ marginTop: "30px" }}>Messages</h1>;    </div>
  );

}
