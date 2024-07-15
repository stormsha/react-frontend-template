// import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ModuleScss from "@/pages/StyleIsolation/ModuleScss";
// import StyledComponents from "@/pages/StyleIsolation/StyledComponents";
// import AntdButton from "@/pages/TestAntd/AntdButton";
// import AntdIcons from "@/pages/TestAntd/AntdIcons";
import React from "react";
import { useRoutes } from "react-router-dom";
import router from "@/router";

function App() {
  // const [count, setCount] = useState(0)
  const dom = useRoutes(router);
  return (
    <>
      <div className="App">
        <React.Suspense fallback={<div> Loading... </div>}>
          {dom}
        </React.Suspense>
      </div>
    </>
  );
}

export default App;
