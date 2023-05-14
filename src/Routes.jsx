import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Uploaded = React.lazy(() => import("pages/Uploaded"));
const Uploading = React.lazy(() => import("pages/Uploading"));
const AIblendOne = React.lazy(() => import("pages/AIblendOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<AIblendOne />} />
          <Route path="*" element={<AIblendOne />} />
          <Route path="/result-render" element={<AIblendOne isOpenResultPopUpModal="true" />} />
          <Route path="/aiblendone" element={<AIblendOne />} />
          <Route path="/uploading" element={<Uploading />} />
          <Route path="/uploaded" element={<Uploaded />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
