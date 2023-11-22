import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./views/Home";
import Profiles from "./views/Profiles";

export default function App() {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </DashboardLayout>
    </>
  );
}
