import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import MenuPage from "./pages/MenuPage";

import ContainersPage from "./pages/ContainersPage";
import ContainerFormPage from "./pages/ContainerFormPage";

import ItemsPage from "./pages/ItemsPage";
import ItemFormPage from "./pages/ItemFormPage";

import CustomersPage from "./pages/CustomersPage";
import CustomerFormPage from "./pages/CustomersFormPage";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TasksContext";
import { ContainerProvider } from "./context/ContainerContext";
import { ItemProvider } from "./context/ItemsContext";
import { CustomerProvider } from "./context/CustomerContext";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <ContainerProvider>
          <CustomerProvider>
            <ItemProvider>
              <ContainerProvider>
                <BrowserRouter>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    <Route element={<ProtectedRoute />}>
                      <Route path="/menu" element={<MenuPage />} />
                      <Route path="/profile" element={<ProfilePage />} />

                      <Route path="/tasks" element={<TasksPage />} />
                      <Route path="/add-task" element={<TaskFormPage />} />
                      <Route path="/tasks/:id" element={<TaskFormPage />} />

                      <Route path="/containers" element={<ContainersPage />} />
                      <Route
                        path="/containers/new"
                        element={<ContainerFormPage />}
                      />
                      <Route
                        path="/customers/new"
                        element={<CustomerFormPage />}
                      />
                      <Route path="/items" element={<ItemsPage />} />
                      <Route path="/items/new" element={<ItemFormPage />} />
                      <Route path="/customers" element={<CustomersPage />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </ContainerProvider>
            </ItemProvider>
          </CustomerProvider>
        </ContainerProvider>
      </TaskProvider>
    </AuthProvider>
  );
}
