import { Search, MoreHorizontal, Play, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import albumCover from "@/assets/album-cover.jpg";

const tracks = [
  {
    id: 1,
    title: "Sleep 4Ever",
    artist: "MAGGIE ANDREW, blackbear",
    duration: "2:42",
    active: true,
  },
  {
    id: 2,
    title: "queen of broken hearts",
    artist: "blackbear",
    duration: "2:51",
  },
  {
    id: 3,
    title: "if i were u",
    artist: "blackbear, Lauv",
    duration: "3:06",
  },
  {
    id: 4,
    title: "hot girl boomer",
    artist: "blackbear",
    duration: "3:08",
  },
  {
    id: 5,
    title: "my ex's best friend",
    artist: "Machine Gun Kelly, blackbear",
    duration: "2:19",
  },
];

const recentAlbums = [
  {
    title: "Come Over When You're Sober, Pt. 1",
    artist: "Lil Peep",
    cover: albumCover,
  },
  {
    title: "IGOR",
    artist: "Tyler, The Creator",
    cover: albumCover,
  },
  {
    title: "Princess Bubblegum",
    artist: "TOMMY",
    cover: albumCover,
  },
  {
    title: "JACKBOYS",
    artist: "JACKBOYS, Travis Scott",
    cover: albumCover,
  },
  {
    title: "cybersex",
    artist: "blackbear",
    cover: albumCover,
  },
];

export default function MainContent() {
  return (
    <div className="flex-1 bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Search"
              className="pl-10 bg-muted border-0 focus-visible:ring-1"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
              <span className="text-sm font-medium">Hello, Alisha</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Releases for You */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-6">Releases for You</h1>
          
          <div className="flex gap-6">
            {/* Album Cover */}
            <div className="w-80 h-80 relative group cursor-pointer">
              <img
                src={albumCover}
                alt="Sleep 4Ever Album"
                className="w-full h-full object-cover rounded-xl shadow-card"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                <Button size="lg" className="rounded-full w-16 h-16 shadow-elegant">
                  <Play size={24} fill="currentColor" />
                </Button>
              </div>
            </div>

            {/* Track List */}
            <div className="flex-1">
              <div className="space-y-2">
                {tracks.map((track, index) => (
                  <div
                    key={track.id}
                    className={`flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer ${
                      track.active ? "bg-accent/20" : ""
                    }`}
                  >
                    <span className="w-6 text-sm text-muted-foreground">
                      {track.active ? <Play size={14} className="text-primary" /> : index + 1}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2 h-8 w-8"
                    >
                      <Heart size={14} />
                    </Button>
                    <div className="flex-1">
                      <div className={`font-medium ${track.active ? "text-primary" : ""}`}>
                        {track.title}
                      </div>
                      <div className="text-sm text-muted-foreground">{track.artist}</div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2 h-8 w-8"
                    >
                      <MoreHorizontal size={14} />
                    </Button>
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {track.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recently Played */}
        <div>
          <h2 className="text-xl font-bold mb-4">Recently Played</h2>
          <div className="grid grid-cols-5 gap-4">
            {recentAlbums.map((album, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-card transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" className="rounded-full w-12 h-12">
                      <Play size={16} fill="currentColor" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-1 truncate">{album.title}</h3>
                  <p className="text-xs text-muted-foreground truncate">{album.artist}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}