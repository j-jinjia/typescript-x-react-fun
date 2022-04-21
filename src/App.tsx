import { Navigate, Route, Routes } from "react-router-dom";
import Coach from "./pages/Coach/Coach";
import Coaches from "./pages/Coaches/Coaches";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import "./styles/main.scss";

const App = () => {
  return (
    <Routes>
      {/* Routes here */}
      <Route path="/home" element={<Home />} />
      <Route path="/coaches" element={<Coaches />} />
      <Route path="/coaches/:coachId" element={<Coach />} />

      {/* Any redirects */}
      <Route path="/" element={<Navigate replace to="/home" />} />

      {/* Last is a catch-all route that will show a not found view */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
