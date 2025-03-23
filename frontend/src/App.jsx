import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import Problems from "./pages/Problems";
import Easy from "./pages/Easy";
import Medium from "./pages/Medium";
import Hard from "./pages/Hard";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import LiveEditor from "./pages/LiveEditor";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/easy" element={<Easy />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/hard" element={<Hard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/community" element={<Community />} />
        <Route path="/live-editor" element={<LiveEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
