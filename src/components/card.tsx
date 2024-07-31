import { FC } from "react";

interface props {
  vehicle: any;
  day: string;
}

const Card: FC<props> = ({ vehicle, day }) => {
  const getRestriction = (day: string) => {
    console.log(vehicle.type);
    switch (vehicle.type) {
      case "car":
        return `Placa terminada en ${vehicle.law[day].map(
          (number: number) => number
        )}`;
      case "bike":
        return `Placa inicia en ${vehicle.law[day].map(
          (number: number) => number
        )}`;
    }
  };
  return (
    <div className="border p-2 rounded flex flex-col items-center">
      <p>{vehicle.emoji}</p>
      <p>{vehicle.copy}</p>
      <p>{getRestriction(day)}</p>
    </div>
  );
};

export default Card;
