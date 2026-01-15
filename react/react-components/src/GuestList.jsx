import React from 'react';

export default function GuestList({ addNewGuest }) {
  const [label, setLabel] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addNewGuest(label);   // parent ko data bhejna
    setLabel('');         // input clear
  }

  return (
    <div className="new-list-item-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-list-form-input">
          New Guest:
        </label>

        <div className="row">
          <input
            required
            id="new-list-form-input"
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
