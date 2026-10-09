import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/admin/auth" element={<LogIn />} />
      <Route element={<Layout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
