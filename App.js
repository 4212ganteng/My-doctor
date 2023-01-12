import Router from "./Router";
import FlashMessage from "react-native-flash-message";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
import { useState } from "react";
import LoadingComp from "./src/utils/LoadingComp";

const MainApp = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Router />
      <FlashMessage position="top" />
      {loading && <LoadingComp />}
    </>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
