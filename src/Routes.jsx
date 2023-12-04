import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePageEveryDayAccount30WebFeelingPage from "pages/HomePageEveryDayAccount30WebFeeling";
const ChatBotPage30WebFeeling = React.lazy(() =>
  import("pages/ChatBotPage30WebFeeling"),
);

const ProjectRoutes = () => { 
  return (
    <React.Suspense fallback={<>Loading2...</>}>
      <Router>
        <Routes>
         
          <Route
            path="/"
            element={<ChatBotPage30WebFeeling />}
          />
        
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
