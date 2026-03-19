import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Onboarding pages
import Splash from "./pages/onboarding/Splash";
import Onboarding1 from "./pages/onboarding/Onboarding1";
import Onboarding2 from "./pages/onboarding/Onboarding2";
import Onboarding3 from "./pages/onboarding/Onboarding3";

// Authentication pages
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Verification from "./pages/auth/Verification";

// Farmer pages
import Choice from "./pages/farmer/Choice";
import FarmerDashboard from "./pages/farmer/FarmerDashboard";
import Discover from "./pages/farmer/Discover";
import DiscoverMap from "./pages/farmer/DiscoverMap";
import HubDetails from "./pages/farmer/HubDetails";
import Booking from "./pages/farmer/Booking";
import Pay1 from "./pages/farmer/Pay1";
import Pay2 from "./pages/farmer/Pay2";
import Pay3 from "./pages/farmer/Pay3";
import BookingConfirmed from "./pages/farmer/BookingConfirmed";
import FarmerBookings1 from "./pages/farmer/FarmerBookings1";
import FarmerBookings2 from "./pages/farmer/FarmerBookings2";
import FarmerProfile from "./pages/farmer/FarmerProfile";
import NewFarmerEntry from "./pages/farmer/NewFarmerEntry";

// Operator pages
import OperatorDashboard from "./pages/operator/OperatorDashboard";
import Monitoring from "./pages/operator/Monitoring";
import OperatorBookings1 from "./pages/operator/OperatorBookings1";
import OperatorBookings2 from "./pages/operator/OperatorBookings2";
import OperatorBookings3 from "./pages/operator/OperatorBookings3";
import OperatorAlert from "./pages/operator/OperatorAlert";
import NewOperatorDashboard from "./pages/operator/NewOperatorDashboard";
import OperatorProfile from "./pages/operator/OperatorProfile";
import OperatorsAlert from "./pages/operator/OperatorsAlert";
import OperatorsProfile from "./pages/operator/OperatorsProfile";
import OperatorsViewBookings1 from "./pages/operator/OperatorsViewBookings1";
import OperatorsViewBookings2 from "./pages/operator/OperatorsViewBookings2";
import OperatorsViewBookings3 from "./pages/operator/OperatorsViewBookings3";

// Alert pages
import AIAlert from "./pages/alerts/AIAlert";

function App() {
  return (
    <Router>
      <div className="App" style={{ width: '100%', height: '100%', minHeight: '100vh' }}>
        <Routes>
          {/* Onboarding routes */}
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding1" element={<Onboarding1 />} />
          <Route path="/onboarding2" element={<Onboarding2 />} />
          <Route path="/onboarding3" element={<Onboarding3 />} />

          {/* Authentication routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verification />} />

          {/* Farmer routes */}
          <Route path="/choice" element={<Choice />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/discover-map" element={<DiscoverMap />} />
          <Route path="/hub-details" element={<HubDetails />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/pay1" element={<Pay1 />} />
          <Route path="/pay2" element={<Pay2 />} />
          <Route path="/pay3" element={<Pay3 />} />
          <Route path="/booking-confirmed" element={<BookingConfirmed />} />
          <Route path="/farmer-bookings1" element={<FarmerBookings1 />} />
          <Route path="/farmer-bookings2" element={<FarmerBookings2 />} />
          <Route path="/farmer-profile" element={<FarmerProfile />} />
          <Route path="/new-farmer" element={<NewFarmerEntry />} />

          {/* Operator routes */}
          <Route path="/operator" element={<OperatorDashboard />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/op-bookings1" element={<OperatorBookings1 />} />
          <Route path="/op-bookings2" element={<OperatorBookings2 />} />
          <Route path="/op-bookings3" element={<OperatorBookings3 />} />
          <Route path="/op-alert" element={<OperatorAlert />} />
          <Route path="/new-operator" element={<NewOperatorDashboard />} />
          <Route path="/op-profile" element={<OperatorProfile />} />
          <Route path="/operators-alert" element={<OperatorsAlert />} />
          <Route path="/operators-profile" element={<OperatorsProfile />} />
          <Route path="/operators-view-bookings1" element={<OperatorsViewBookings1 />} />
          <Route path="/operators-view-bookings2" element={<OperatorsViewBookings2 />} />
          <Route path="/operators-view-bookings3" element={<OperatorsViewBookings3 />} />

          {/* Alert routes */}
          <Route path="/ai-alert" element={<AIAlert />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;