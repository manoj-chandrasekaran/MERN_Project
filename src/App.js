import{BrowserRouter, Routes, Route} from "react-router-dom";
import LoginComponent from "./routes/login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginComponent/>} />
      <Route path="/Signup" element={<SignupComponent/>} />
      <Route path="/Home" element={<HomeComponent/>} />
  
     </Routes>
     </BrowserRouter>
    </div>
  );

};
export default App;


