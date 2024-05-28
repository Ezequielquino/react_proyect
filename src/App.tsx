import { useEffect } from "react"
import { AppConfig } from "./core/config/app_config";
import AppRouter from "./app/routes/App_router";

function App() {

  useEffect(() => {
    AppConfig.initialize();
  }, []);

  return (
    <div className="greenLight text-foreground bg-background">
      <AppRouter />
    </div>
  )
}

export default App
