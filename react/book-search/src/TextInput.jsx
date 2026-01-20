import React from "react";

export default function TextInput({ label, ...delegated }) {
  const generatedId = React.useId();

  return (
    <>
      <label htmlFor={generatedId}>{label}</label>
      <input id={generatedId} type="search" {...delegated} />
    </>
  )
}
