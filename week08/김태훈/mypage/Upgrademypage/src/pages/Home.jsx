import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import ProfileSection from '../components/ProfileSection';
import LifeTimeline from '../components/LifeTimeline';
import Hobbies from '../components/Hobbies';

export default function Home() {
  return (
    <div className="bg-blue-200 min-h-screen">
      <NavBar />
      <SideBar />
      <main className="pt-24">
        <ProfileSection />
        <LifeTimeline />
        <Hobbies />
      </main>
    </div>
  );
}