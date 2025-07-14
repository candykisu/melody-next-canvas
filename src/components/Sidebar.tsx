import { Home, Library, Radio, Video, Heart, Disc, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const navigation = [
  { name: "For you", icon: Home, active: true },
  { name: "Library", icon: Library },
  { name: "Radio Station", icon: Radio },
  { name: "Music Video", icon: Video },
];

const myMusic = [
  { name: "Liked Song", icon: Heart },
  { name: "Albums", icon: Disc },
  { name: "Artists", icon: Disc },
  { name: "Recent", icon: Disc },
];

const playlists = [
  { name: "Hip-hop", icon: Disc },
  { name: "Jazz", icon: Disc },
];

export default function Sidebar() {
  return (
    <div className="w-60 bg-card border-r border-border h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">♪</span>
          </div>
          <span className="font-bold text-lg">ChefMusic</span>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        {/* Recommend Section */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-muted-foreground mb-3 px-2">Recommend</h2>
          <nav className="space-y-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant={item.active ? "default" : "ghost"}
                className={`w-full justify-start gap-3 h-10 ${
                  item.active ? "bg-primary text-primary-foreground shadow-md" : ""
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </Button>
            ))}
          </nav>
        </div>

        {/* My Music Section */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-muted-foreground mb-3 px-2">My music</h2>
          <nav className="space-y-1">
            {myMusic.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start gap-3 h-10"
              >
                <item.icon size={18} />
                {item.name}
              </Button>
            ))}
          </nav>
        </div>

        {/* Playlists Section */}
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-3 px-2">Playlists</h2>
          <nav className="space-y-1">
            {playlists.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start gap-3 h-10"
              >
                <item.icon size={18} />
                {item.name}
              </Button>
            ))}
          </nav>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 h-10 text-muted-foreground mt-2"
          >
            <Plus size={18} />
            New Playlist
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}