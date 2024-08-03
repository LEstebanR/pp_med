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
        return vehicle.law[day]
          ? `Placa terminada en ${vehicle.law[day].map(
              (number: number) => number
            )}`
          : "Hoy no hay restricción";
      case "bike":
        return vehicle.law[day]
          ? `Placa inicia en ${vehicle.law[day].map(
              (number: number) => number
            )}`
          : "Hoy no hay restricción";
      case "taxi":
        console.log(vehicle.law[date]);
        return vehicle.law[date] !== undefined
          ? `Placa termina en ${vehicle.law[date]}`
          : "Hoy no hay restricción";
    }
  };
  return (
    <div className="border p-2 rounded flex flex-col items-center">
      <p>{vehicle.emoji}</p>
      <p>{vehicle.copy}</p>
      <p>{getRestriction(day, date)}</p>
    </div>
  );
};

export default Card;
