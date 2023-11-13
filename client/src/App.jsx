import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/Users/RegisterPage";
import LoginPage from "./pages/Users/LoginPage";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/Users/ProfilePage";
import MenuPage from "./pages/MenuPage";

import ContainersPage from "./pages/Containers/ContainersPage";
import ContainerFormPage from "./pages/Containers/ContainerFormPage";

import ItemsPage from "./pages/Items/ItemsPage";
import ItemFormPage from "./pages/Items/ItemFormPage";

import CustomersPage from "./pages/Customers/CustomersPage";
import CustomerFormPage from "./pages/Customers/CustomersFormPage";

import CommodatumPage from "./pages/Commodatum/CommodatumPage";

import { AuthProvider } from "./context/AuthContext";
import { ContainerProvider } from "./context/ContainerContext";
import { ItemProvider } from "./context/ItemsContext";
import { CustomerProvider } from "./context/CustomerContext";
import { CommodatumProvider } from "./context/CommodatumContext";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <AuthProvider>
      <ContainerProvider>
        <CustomerProvider>
          <ItemProvider>
            <ContainerProvider>
              <CommodatumProvider>
                <BrowserRouter>
                  <Navbar />
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    <Route element={<ProtectedRoute />}>
                      <Route path="/menu" element={<MenuPage />} />
                      <Route path="/profile" element={<ProfilePage />} />

                      <Route path="/containers" element={<ContainersPage />} />
                      <Route path="/containers/new" element={<ContainerFormPage />} />
                      
                      <Route path="/items" element={<ItemsPage />} />
                      <Route path="/items/new" element={<ItemFormPage />} />
                      
                      <Route path="/customers" element={<CustomersPage />} />
                      <Route path="/customers/new" element={<CustomerFormPage />} />

                      <Route path="/commodatums" element={<CommodatumPage />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </CommodatumProvider>
            </ContainerProvider>
          </ItemProvider>
        </CustomerProvider>
      </ContainerProvider>
    </AuthProvider>
  );
}
