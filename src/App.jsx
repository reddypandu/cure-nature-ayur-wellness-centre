// Defines the application shell and explicit page routes.
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollTop } from "./components/ScrollTop";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { YogaTherapy } from "./pages/services/YogaTherapy";
import { MassageTherapy } from "./pages/services/MassageTherapy";
import { MeditationTherapy } from "./pages/services/MeditationTherapy";
import { NabhiTherapy } from "./pages/services/NabhiTherapy";
import { ShiroDharaTherapy } from "./pages/services/ShiroDharaTherapy";

export function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ScrollTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/yoga-therapy" element={<YogaTherapy />} />
          <Route
            path="/services/massage-therapy"
            element={<MassageTherapy />}
          />
          <Route
            path="/services/meditation-therapy"
            element={<MeditationTherapy />}
          />
          <Route path="/services/nabhi-therapy" element={<NabhiTherapy />} />
          <Route
            path="/services/shiro-dhara-therapy"
            element={<ShiroDharaTherapy />}
          />
          <Route
            path="/therapies"
            element={<Navigate to="/services" replace />}
          />
          <Route
            path="/therapies/:slug"
            element={<Navigate to="/services" replace />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
