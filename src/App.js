import "./App.css"
import { BasicText } from "./Components/BasicText/BasicText";
import DashboardAPI from "./Components/DashboardAPI/DashboardAPI";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PlatformScale from "./Components/PlatformScale/PlatformScale";
import Tables from "./Components/Table/Tables";

function App() {
  return (
    <>
      <Header />
      <Tables />
      <BasicText />
      <PlatformScale />
      <DashboardAPI />
      <Footer />

    </>
  );
}

export default App;
