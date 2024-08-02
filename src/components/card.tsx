import { FC } from "react";

interface props {
  vehicle: any;
  day: string;
  date: string;
}

const Card: FC<props> = ({ vehicle, day, date }) => {
  const getRestriction = (day: string, date: string) => {
    switch (vehicle.type) {
      case "car":
        return `Placa terminada en ${vehicle.law[day].map(
          (number: number) => number
        )}`;
      case "bike":
        return `Placa inicia en ${vehicle.law[day].map(
          (number: number) => number
        )}`;
      case "taxi":
        console.log(vehicle.law[date]);
        return vehicle.law[date] !== undefined
          ? `Placa termina en ${vehicle.law[date]}`
          : "No hay";
    }
  };
  return (
    <div className="border p-2 rounded flex flex-col items-center">
      <p>{vehicle.emoji}</p>
      <p>{vehicle.copy}</p>
      <p>{getRestriction(day, date)}</p>
      <p>{date}</p>
    </div>
  );
};

export default Card;
