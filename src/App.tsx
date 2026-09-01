import { useEffect, useState } from "react";
import { Loader } from "./components/Loader/Loader";
import AppRoutes from "./routes/AppRoutes";


function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const temporizador = window.setTimeout(() => {
      setCargando(false);
    }, 1800);

    return () => window.clearTimeout(temporizador);
  }, []);

  if (cargando) {
    return <Loader />;
  }

  return <AppRoutes />;
}

export default App;