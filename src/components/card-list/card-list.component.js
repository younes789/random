import { Card } from "../card-item/card-item.component";
import "./card-list.style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.users.map((user) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};