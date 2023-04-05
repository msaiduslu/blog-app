import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import Notification from "./components/Notification";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <Notification />
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
