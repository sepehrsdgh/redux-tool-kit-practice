import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
function App() {
  const isAuthenciated = useSelector((state) => state.auth.isAuthenciated);
  return (
    <>
      <Header />
      {!isAuthenciated && <Auth />}
      {isAuthenciated && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
