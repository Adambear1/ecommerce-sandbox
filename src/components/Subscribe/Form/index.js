import React from "react";

function Form() {
  return (
    <div class="form-group" className="mt-5 mx-5">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text text-muted">
        We'll never share your email with anyone else.
      </small>
    </div>
  );
}

export default Form;
