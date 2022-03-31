import "../card-item/card-item.style.css";

export const Card = ({ user }) => {
  return (
    <div className="card-container">
      <img src={`https://i.pravatar.cc/180?img=${user.id}`} alt={user.name} />
      <h2> {user.name} </h2>
      <p>{user.email}</p>
    </div>
  );
};