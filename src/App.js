import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {  Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;


