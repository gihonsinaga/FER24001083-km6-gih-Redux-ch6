import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import Figures from "./Components/Figures.jsx";
import FiguresDetail from "./Components/FiguresDetail.jsx";
import Cards from "./Components/Cards.jsx";
import CardsDetail from "./Components/CardsDetail.jsx";
import Series from "./Components/Series.jsx";
import Games from "./Components/Games.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Profile from "./profile.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./Home.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="252576261993-3h0h8j9nno8n0ho3o83phfhomccr7u0i.apps.googleusercontent.com">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="Figures" element={<Figures />} />
            <Route path="FiguresDetail" element={<FiguresDetail />} />
            <Route path="Cards" element={<Cards />} />
            <Route path="CardsDetail" element={<CardsDetail />} />
            <Route path="Series" element={<Series />} />
            <Route path="Games" element={<Games />} />
            <Route path="Profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </GoogleOAuthProvider>
);
