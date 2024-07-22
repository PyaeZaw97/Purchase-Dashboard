import { BrowserRouter, Route, Routes } from "react-router-dom";
import Suppliers from "../../Pages/Suppliers";
import Dashboard from "../../Pages/Dashbaord";
import Requesitions from "../../Pages/Requesitions";
import Orders from "../../Pages/Orders";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/requesitions" element={<Requesitions />}></Route>
      <Route path="/purchase-orders" element={<Orders />}></Route>
      <Route path="/suppliers" element={<Suppliers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
