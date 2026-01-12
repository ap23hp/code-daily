import GreendotHidden from "./greendotHidden";
export default function FriendList({ name, isOnline }) {
  return (
    <ul
      className="friends-list"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "32px",
      }}
    >
      <li
        className="friend"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "16px",
          borderRadius: "8px",
          background: "white",
        }}
      >
       {isOnline && <GreendotHidden>(online)</GreendotHidden>} 
       {isOnline &&  <div className="green-dot"></div>}
        {name}
      </li>
    </ul>
  );
}
