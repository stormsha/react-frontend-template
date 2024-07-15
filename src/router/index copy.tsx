import App from "../App";
import Top from "@/pages/Layout/Top";
import About from "@/pages/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const baseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* Navigate 重定向 home / 默认访问 home 组件 */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Top />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default baseRouter;
