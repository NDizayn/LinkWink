import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Large1440dp = React.lazy(() => import("pages/Large1440dp"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/large1440dp" element={<Large1440dp />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
