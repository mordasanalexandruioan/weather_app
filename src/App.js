import "./App.css";
import Page from "./Components/Page";
import SettingsContextProvider from "./Context/settingsContext";

function App() {
  return (
    <>
      <SettingsContextProvider>
        <Page />
      </SettingsContextProvider>
    </>
  );
}

export default App;
