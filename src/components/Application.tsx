import React from "react";

const Application = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Fill the below form</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />

        <label>
          <input type="checkbox" />I agree to T&C
        </label>

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Application;
