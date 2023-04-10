import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import Notification from "./components/Notification";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

// export const ThemeOptions = {
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#5893df",
//     },
//     secondary: {
//       main: "#2ec5d3",
//     },
//     background: {
//       default: "#192231",
//       paper: "#24344d",
//     },
//   },
// };

// const theme = createTheme(ThemeOptions);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <Notification />
        {/* <ThemeProvider theme={theme}> */}
        <AppRouter />
        {/* </ThemeProvider> */}
      </Provider>
    </>
  );
}

export default App;
