import Router from "./Router";
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <>
      <Router />
      {/* GLOBAL FLASH MESSAGE COMPONENT INSTANCE */}
      <FlashMessage position="top" />
    </>
  );
}
