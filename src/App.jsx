import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import ReadPost from "./pages/ReadPost";
import EditPost from "./pages/EditPost";
import { AuthProvider } from "./AuthContext";

function App() {

  return (
    <AuthProvider>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <div>
                  <Home />
                </div>
              }
            />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route path="/create" element={<CreatePost />} />

            <Route path="/post/:id" element={<ReadPost />} />

            <Route path="/edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </AuthProvider>
  );
}

export default App;
