import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import WishesPage from "./pages/WishesPage.jsx";
import WishFormPage from "./pages/WishFormPage.jsx";
import MyWishesPage from "./pages/MyWishesPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { WishProvider } from "./context/WishContext.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <AuthProvider>
      <WishProvider>
        <BrowserRouter>
          <main className='container mx-auto px-10'>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/wishes" element={<WishesPage />} />
                <Route path="/mywishes" element={<MyWishesPage />} />
                <Route path="/add-wish" element={<WishFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </WishProvider>
    </AuthProvider>
  );
}

export default App;
