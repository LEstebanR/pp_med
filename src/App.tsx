import Card from "./components/card";
import Footer from "./components/footer";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const vehicles = ["Carros", "Motos", "Taxi"];
const today = new Date();

function App() {
  return (
    <div className="w-full h-screen border flex items-center justify-between flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold underline font-red">
        Pico y placa Medellín
      </h1>
      <p>
        El pico y placa para hoy{" "}
        {format(today, "eeee dd 'de' MMMM", { locale: es })} es:
      </p>
      <div className="flex flex-col md:flex-row gap-2 ">
        {vehicles.map((vehicle) => (
          <Card vehicle={vehicle} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
