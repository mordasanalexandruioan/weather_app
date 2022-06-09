import "./App.css";
import Page from "./Components/Page";
import SelectPrecipitation from "./Components/SelectPrecipitation/selectPrecipitation";
import SelectPressure from "./Components/SelectPressure/selectPressure";
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
        <SelectPressure />
        <Page />
      </SettingsContextProvider>
    </>
  );
}

export default App;
