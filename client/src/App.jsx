import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ContainersPage from "./pages/ContainersPage";
import ContainerFormPage from "./pages/ContainerFormPage.";
import MenuPage from "./pages/MenuPage";

import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";
import { ContainerProvider } from "./context/ContainerContext";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <ContainerProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/add-task" element={<TaskFormPage />} />
              <Route path="/tasks/:id" element={<TaskFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/containers" element={<ContainersPage />} />
              <Route path="/containers/new" element={<ContainerFormPage />} />
              <Route path="/menu" element={<MenuPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContainerProvider>
    </AuthProvider>
  );
}
