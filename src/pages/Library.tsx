import { useState } from "react";
import { Search, Play, Heart, MoreHorizontal, Filter, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";
import MusicPlayer from "@/components/MusicPlayer";
import albumCover from "@/assets/album-cover.jpg";

const songs = [
  {
    id: 1,
    title: "Sleep 4Ever",
    artist: "MAGGIE ANDREW, blackbear",
    album: "Digital Druglord",
    duration: "2:42",
    genre: "Hip-Hop",
    dateAdded: "2 days ago",
    isLiked: true,
    plays: 127,
  },
  {
    id: 2,
    title: "queen of broken hearts",
    artist: "blackbear",
    album: "Digital Druglord",
    duration: "2:51",
    genre: "Hip-Hop",
    dateAdded: "1 week ago",
    isLiked: false,
    plays: 89,
  },
  {
    id: 3,
    title: "if i were u",
    artist: "blackbear, Lauv",
    album: "Anonymous",
    duration: "3:06",
    genre: "Pop",
    dateAdded: "2 weeks ago",
    isLiked: true,
    plays: 203,
  },
  {
    id: 4,
    title: "hot girl boomer",
    artist: "blackbear",
    album: "Everything Means Nothing",
    duration: "3:08",
    genre: "Hip-Hop",
    dateAdded: "3 weeks ago",
    isLiked: false,
    plays: 156,
  },
  {
    id: 5,
    title: "my ex's best friend",
    artist: "Machine Gun Kelly, blackbear",
    album: "Tickets To My Downfall",
    duration: "2:19",
    genre: "Rock",
    dateAdded: "1 month ago",
    isLiked: true,
    plays: 312,
  },
  {
    id: 6,
    title: "idfc",
    artist: "blackbear",
    album: "Help",
    duration: "3:24",
    genre: "Hip-Hop",
    dateAdded: "1 month ago",
    isLiked: false,
    plays: 445,
  },
  {
    id: 7,
    title: "do re mi",
    artist: "blackbear",
    album: "Digital Druglord",
    duration: "3:15",
    genre: "Hip-Hop",
    dateAdded: "2 months ago",
    isLiked: true,
    plays: 567,
  },
  {
    id: 8,
    title: "90210",
    artist: "blackbear",
    album: "Help",
    duration: "2:58",
    genre: "Hip-Hop",
    dateAdded: "2 months ago",
    isLiked: false,
    plays: 234,
  },
];

export default function Library() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [filterGenre, setFilterGenre] = useState("all");

  const filteredSongs = songs.filter(song => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         song.album.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = filterGenre === "all" || song.genre.toLowerCase() === filterGenre.toLowerCase();
    return matchesSearch && matchesGenre;
  });

  const sortedSongs = [...filteredSongs].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title);
      case "artist":
        return a.artist.localeCompare(b.artist);
      case "plays":
        return b.plays - a.plays;
      default:
        return 0;
    }
  });

  return (
    <div className="h-screen bg-muted/30 flex flex-col overflow-hidden">
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        
        <div className="flex-1 bg-background flex flex-col">
          {/* Header */}
          <div className="border-b border-border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold">Your Library</h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
                  <span className="text-sm font-medium">Hello, Alisha</span>
                </div>
              </div>
            </div>
            
            {/* Search and Filters */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Search songs, artists, albums..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted border-0 focus-visible:ring-1"
                />
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SortAsc size={16} className="mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Recently Added</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="artist">Artist</SelectItem>
                  <SelectItem value="plays">Most Played</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterGenre} onValueChange={setFilterGenre}>
                <SelectTrigger className="w-32">
                  <Filter size={16} className="mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="hip-hop">Hip-Hop</SelectItem>
                  <SelectItem value="pop">Pop</SelectItem>
                  <SelectItem value="rock">Rock</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Songs List */}
          <div className="flex-1 overflow-auto p-6">
            <div className="space-y-2">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm font-medium text-muted-foreground border-b border-border">
                <div className="col-span-1">#</div>
                <div className="col-span-4">Title</div>
                <div className="col-span-2">Album</div>
                <div className="col-span-2">Date Added</div>
                <div className="col-span-1">Plays</div>
                <div className="col-span-1">Duration</div>
                <div className="col-span-1"></div>
              </div>

              {/* Song Rows */}
              {sortedSongs.map((song, index) => (
                <Card key={song.id} className="hover:bg-muted/50 transition-colors cursor-pointer group border-0 bg-transparent shadow-none">
                  <div className="grid grid-cols-12 gap-4 px-4 py-3 items-center">
                    <div className="col-span-1 flex items-center">
                      <span className="group-hover:hidden text-muted-foreground">
                        {index + 1}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="hidden group-hover:flex p-0 h-8 w-8"
                      >
                        <Play size={14} />
                      </Button>
                    </div>
                    
                    <div className="col-span-4 flex items-center gap-3">
                      <img
                        src={albumCover}
                        alt={song.title}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-medium truncate">{song.title}</p>
                        <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                      </div>
                      {song.isLiked && (
                        <Heart size={16} className="text-primary fill-current" />
                      )}
                    </div>
                    
                    <div className="col-span-2">
                      <p className="text-sm text-muted-foreground truncate">{song.album}</p>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {song.genre}
                      </Badge>
                    </div>
                    
                    <div className="col-span-2">
                      <p className="text-sm text-muted-foreground">{song.dateAdded}</p>
                    </div>
                    
                    <div className="col-span-1">
                      <p className="text-sm text-muted-foreground">{song.plays}</p>
                    </div>
                    
                    <div className="col-span-1">
                      <p className="text-sm text-muted-foreground">{song.duration}</p>
                    </div>
                    
                    <div className="col-span-1 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-2 h-8 w-8"
                      >
                        <MoreHorizontal size={14} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {sortedSongs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No songs found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
        
        <RightSidebar />
      </div>
      <MusicPlayer />
    </div>
  );
}