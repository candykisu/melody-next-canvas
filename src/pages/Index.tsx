import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import RightSidebar from "@/components/RightSidebar";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <div className="h-screen bg-muted/30 flex flex-col overflow-hidden">
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Index;
