import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../src/app/pages/index.jsx";
import Form from "../src/app/pages/form.jsx";
import AppCreate from "./app/pages/create.jsx";
import AppDetail from "./app/pages/detail.jsx";
import AppEdit from "./app/pages/edit.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Index />} />
            <Route path="/form" element={<Form />} />
            <Route path="/create" element={<AppCreate />} />
            <Route path="/detail/:id" element={<AppDetail />} />
            <Route path="/edit/:id" element={<AppEdit />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
