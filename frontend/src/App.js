import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";

// User Components:
import UserChatComponent from "./Components/user/UserChatComponent";
import RoutesWithUserChatComponent from "./Components/user/RoutesWithUserChatComponent"


//publicly available pages
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ProductListPage from "./Pages/ProductListPage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/RegisterPage";

import ProtectedRoutesComponent from "./Components/ProtectedRoutesComponent";

//Protected user pages:
import UserProfilePage from "./Pages/User/UserProfilePage";
import UserOrderDetailsPage from "./Pages/User/UserOrderDetailsPage";
import UserCartDetailsPage from "./Pages/User/UserOrderDetailsPage";
import UserOrdersPage from "./Pages/User/UserOrdersPage";

//protected admin pages:
import AdminUsersPage from "./Pages/Admin/AdminUsersPage";
import AdminProductsPage from "./Pages/Admin/AdminProductsPage";
import AdminOrdersPage from "./Pages/Admin/AdminOrdersPage";
import AdminOrdersDetailsPage from "./Pages/Admin/AdminOrdersDetailsPage";
import AdminEditUserPage from "./Pages/Admin/AdminEditUserPage";
import AdminEditProductPage from "./Pages/Admin/AdminEditProductPage";
import AdminCreateProductPage from "./Pages/Admin/AdminCreateProductPage";
import AdminChatsPage from "./Pages/Admin/AdminChatsPage";
import AdminAnalyticsPage from "./Pages/Admin/AdminAnalyticsPage";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          {/*Publicily avalibles Routes: */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not exists 404" />
          </Route>
          {/*User protected routes:*/}
          <Route element={<ProtectedRoutesComponent admin={false} />}>
            <Route path="/user" element={<UserProfilePage />} />
            <Route path="/user/my-orders" element={<UserOrdersPage />} />
            <Route
              path="/user/cart-details"
              element={<UserCartDetailsPage />}
            />
            <Route
              path="/user/order-details"
              element={<UserOrderDetailsPage />}
            />
          </Route>
        {/*Admin protected routes:*/}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
