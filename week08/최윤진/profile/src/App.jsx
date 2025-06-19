import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import LikesSection from "./components/LikesSection";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <main className="font-sans">
      <Header />
      <ProfileSection />
      <LikesSection />
      <Footer />
    </main>
  );
}

export default App;
