import AppRouter from "./router/AppRouter";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";
import Notification from "./components/Notification";

function App() {
  return (
    <>
      <Provider store={store}>
        <Notification />
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
