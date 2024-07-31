import { FC } from "react";

interface props {
  vehicle: string;
}

const Card: FC<props> = ({ vehicle }) => {
  return (
    <div className="border p-2 rounded flex felx-col">
      <p>{vehicle}</p>
    </div>
  );
};

export default Card;
