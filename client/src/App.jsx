import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/Users/RegisterPage";
import LoginPage from "./pages/Users/LoginPage";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/Users/ProfilePage";
import MenuPage from "./pages/MenuPage";

import ContainersPage from "./pages/Containers/ContainersPage";
import ContainerFormPage from "./pages/Containers/ContainerFormPage";
import ContainerInfoPage from "./pages/Containers/ContainerInfoPage";
import EditContainerPage from "./pages/Containers/EditContainerPage";

import TransactionPage from "./pages/Containers/TransactionPage";

import ItemsPage from "./pages/Items/ItemsPage";
import ItemFormPage from "./pages/Items/ItemFormPage";
import EditItemPage from "./pages/Items/EditItemPage";

import CustomersPage from "./pages/Customers/CustomersPage";
import CustomerFormPage from "./pages/Customers/CustomersFormPage";
import EditCustomerPage from "./pages/Customers/EditCustomerPage";

import CommodatumPage from "./pages/Commodatum/CommodatumPage";
import CommodatumInfoPage from "./pages/Commodatum/CommodatumInfoPage";

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
                    <Route path="/containers/:id" element={<ContainerInfoPage />} />
                    <Route path="/containers/edit/:id" element={<EditContainerPage />} />
                    <Route path="/transaction/:id/:number" element={<TransactionPage />} />

                    <Route path="/items" element={<ItemsPage />} />
                    <Route path="/items/new" element={<ItemFormPage />} />
                    <Route path="/items/edit/:id" element={<EditItemPage />} />

                    <Route path="/customers" element={<CustomersPage />} />
                    <Route path="/customers/new" element={<CustomerFormPage />} />
                    <Route path="/customers/edit/:id" element={<EditCustomerPage />} />

                    <Route path="/commodatums" element={<CommodatumPage />} />
                    <Route path="/commodatums/:id" element={<CommodatumInfoPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </CommodatumProvider>
          </ItemProvider>
        </CustomerProvider>
      </ContainerProvider>
    </AuthProvider>
  );
}
