import { useContext } from "react";
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
import { HootEdit } from "./components/HootEdit/HootEdit.jsx";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Landing />} />
        <Route path="/hoots" element={<HootList />} />
        <Route path="/hoots/:hootId" element={<HootDetail />} />
        <Route path="/hoots/new" element={<HootCreate />} />
        <Route path="/hoots/:hootId/edit" element={<HootEdit />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
    </>
  );
};

export default App;
