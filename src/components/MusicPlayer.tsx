import { Heart, Shuffle, SkipBack, Play, SkipForward, Repeat, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import albumCover from "@/assets/album-cover.jpg";

export default function MusicPlayer() {
  return (
    <div className="h-20 bg-card border-t border-border flex items-center px-6">
      {/* Currently Playing */}
      <div className="flex items-center gap-4 w-72">
        <img
          src={albumCover}
          alt="Sleep 4Ever"
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="min-w-0 flex-1">
          <p className="font-medium text-sm truncate">Sleep 4Ever</p>
          <p className="text-xs text-muted-foreground truncate">MAGGIE ANDREW, blackbear</p>
        </div>
        <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
          <Heart size={16} />
        </Button>
      </div>

      {/* Player Controls */}
      <div className="flex-1 flex flex-col items-center gap-2 px-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
            <Shuffle size={16} />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
            <SkipBack size={16} />
          </Button>
          <Button size="sm" className="rounded-full w-10 h-10 shadow-md">
            <Play size={18} fill="currentColor" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
            <SkipForward size={16} />
          </Button>
          <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
            <Repeat size={16} />
          </Button>
        </div>
        
        <div className="flex items-center gap-3 w-full max-w-md">
          <span className="text-xs text-muted-foreground">1:23</span>
          <Slider 
            value={[35]} 
            max={100} 
            step={1} 
            className="flex-1"
          />
          <span className="text-xs text-muted-foreground">2:42</span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center gap-3 w-32">
        <Button variant="ghost" size="sm" className="p-2 h-8 w-8">
          <Volume2 size={16} />
        </Button>
        <Slider 
          value={[75]} 
          max={100} 
          step={1} 
          className="flex-1"
        />
      </div>
    </div>
  );
}