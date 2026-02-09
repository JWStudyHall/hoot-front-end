import { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import { UserContext } from "./contexts/UserContext.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";
import SignInForm from "./components/SignInForm/SignInForm.jsx";
import HootList from "./components/HootList/HootList.jsx";
import HootCreate from "./components/HootCreate/HootCreate.jsx";
import Landing from "./components/Landing/Landing.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import HootDetail from "./components/HootDetail/HootDetail.jsx";
import * as hootService from "./services/hoots.js";

const App = () => {
  const { user } = useContext(UserContext);
  const [hoots, setHoots] = useState([]);

  useEffect(() => {
    const fetchAllHoots = async () => {
      const hootsData = await hootService.getHoots();
    };
    if (user) fetchAllHoots();
  }, [user]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Landing />} />
        <Route path="/hoots" element={<HootList hoots={hoots} />} />
        <Route path="/hoots/:hootId" element={<HootDetail />} />
        <Route path="/hoots/new" element={<HootCreate />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
    </>
  );
};

export default App;
