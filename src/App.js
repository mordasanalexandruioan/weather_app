import "./App.css";
import Page from "./Components/Page";
import SelectPrecipitation from "./Components/SelectPrecipitation/selectPrecipitation";
import SelectTemperature from "./Components/SelectTemperature/selectTemperature";
import SelectWind from "./Components/SelectWind/selectWind";
import SettingsContextProvider from "./Context/settingsContext";

function App() {
  return (
    <>
      <SettingsContextProvider>
        <SelectTemperature />
        <SelectWind />
        <SelectPrecipitation />
        <Page />
      </SettingsContextProvider>
    </>
  );
}

export default App;
