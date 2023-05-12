import { Provider } from "react-redux";
import store from "./components/Redux/Store";
import Details from "./components/Details";
import UserDetails from "./components/UserDetails";
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <Routes>
      <Route path="/" element={ <Details/>}/>
      <Route path ="/UserDetails" element={<UserDetails/>}/>
    </Routes>
    </Provider>
  );
}

export default App;
