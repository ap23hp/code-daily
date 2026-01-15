import React from "react";
async function sendMessageToServer(name, msg) {
  if (!name || !msg) {
    return "Name and message are required";
  }

  // pretend server delay
  await new Promise((res) => setTimeout(res, 1000));

  return null; // no error
}

export default function ContactForm() {
  const [error, submitAction, isPending] = React.useActionState(
    async (previousState, formData) => {
      const name = formData.get("name");
      const msg = formData.get("message")

      const error = await sendMessageToServer(name, msg);

      if (error) {
        return error;
      }

   console.log("Form submitted successfully");

      return null;
    },
    null,
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <textarea type="text" name="message" />
      <button type="submit" disabled={isPending}>Update</button>
      {error && <p>{error}</p>}
    </form>
  );
}