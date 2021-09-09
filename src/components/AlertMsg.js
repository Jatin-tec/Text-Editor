import React from "react";

export default function AlertMsg(props) {
  return (
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>{props.msg}</strong>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
