import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import MenuManagement from "./pages/MenuManagement";
import Login from "./pages/Login";

import OrderManagement from "./pages/OrderManagement";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";

import ReviewsPage from "./pages/ReviewsPage";
import DeliveryTrackingPage from "./pages/DeliveryTrackingPage";

import NotFound from "./pages/NotFound";

import ProtectedRoute from "./routes/ProtectedRoute";

import { OrderProvider } from "./context/OrderContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      {/* ThemeProvider sits outside OrderProvider so dark mode works everywhere */}
      <ThemeProvider>
        <OrderProvider>
          <Routes>

            {/* Login — public route, no protection needed */}
            <Route path="/login" element={<Login />} />

            {/* All other routes are protected */}
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/menu" element={<ProtectedRoute><MenuManagement /></ProtectedRoute>} />
            <Route path="/orders" element={<ProtectedRoute><OrderManagement /></ProtectedRoute>} />
            <Route path="/orders/history" element={<ProtectedRoute><OrderHistoryPage /></ProtectedRoute>} />
            <Route path="/orders/:id" element={<ProtectedRoute><OrderDetailsPage /></ProtectedRoute>} />
            <Route path="/reviews" element={<ProtectedRoute><ReviewsPage /></ProtectedRoute>} />
            <Route path="/delivery" element={<ProtectedRoute><DeliveryTrackingPage /></ProtectedRoute>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </OrderProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;