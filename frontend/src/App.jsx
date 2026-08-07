import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from"./pages/Profile";
import Upload from "./pages/Upload";
import VideoPlayer from"./pages/VideoPlayer";
import Search from"./pages/Search";
import Settings from "./pages/Settings";
import CategoryPage from"./pages/CategoryPage";

import HelpCenter from "./pages/HelpCenter";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upload" element={<Upload />} />
        <Route path ="/watch/:id" element={<VideoPlayer/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path ="/category/:category" element={<CategoryPage/>} />


        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;