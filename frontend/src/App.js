import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import CreateCategorie from "./components/create/CreateCategorie";
import PrivateRoute from "./components/PrivateRoute";
import { UserProvider } from "./contexts/UserContext";
import BoardScreen from "./pages/BoardScreen";
import CreateBoardScreen from "./pages/CreateBoardScreen";
import CreateTaskScreen from "./pages/CreateTaskScreen";
import HomeScreen from "./pages/HomeScreen";
import JoinBoardScreen from "./pages/JoinBoard";
import SignInScreen from "./pages/SignInScreen";
import SignUpScreen from "./pages/SignUpScreen";
import UserInfoUpdateScreen from "./pages/UserInfoUpdateScreen";
import WelcomeScreen from "./pages/WelcomeScreen";
import "./assets/styles/reset.css"

function App() {
  return (
    <>
    <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomeScreen/>}/>
            <Route path="/sign-in" element={<SignInScreen />} />
            <Route path="/sign-up" element={<SignUpScreen />} />
            <Route path="/home" element={<PrivateRoute> <HomeScreen /> </PrivateRoute>} />
            <Route path="/board">
              <Route path="create" element={<PrivateRoute> <CreateBoardScreen /> </PrivateRoute>} />
              <Route path="join" element={<PrivateRoute> <JoinBoardScreen /> </PrivateRoute>}/>
              <Route path=":boardId" element={<PrivateRoute> <BoardScreen /> </PrivateRoute>}/>
              <Route path="create">
                  <Route path="task" element={<PrivateRoute> <CreateTaskScreen /> </PrivateRoute>}/>
                  <Route path="categorie" element={<PrivateRoute> <CreateCategorie /> </PrivateRoute>}/>
                  <Route path="user-info" element={<PrivateRoute> <UserInfoUpdateScreen /> </PrivateRoute>}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
