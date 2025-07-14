import { MoreHorizontal, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const friendsActivity = [
  {
    name: "Sofi",
    activity: "Lil Peep",
    time: "2h",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
  },
  {
    name: "Daniel",
    activity: "Travis Scott",
    time: "4h",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
  },
  {
    name: "nekichetire",
    activity: "Listening 3h ago",
    time: "",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face",
  },
  {
    name: "Tolik",
    activity: "Listening 5h ago",
    time: "",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  },
  {
    name: "Kostia",
    activity: "Listening 8h ago",
    time: "",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
  },
  {
    name: "Dima V.",
    activity: "Listening 15h ago",
    time: "",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=32&h=32&fit=crop&crop=face",
  },
];

const yourActivity = [
  {
    artist: "blackbear",
    type: "Artists",
    avatar: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=32&h=32&fit=crop&crop=face",
  },
  {
    artist: "Deep End",
    type: "Foushee",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
  },
  {
    artist: "Lil Peep",
    type: "Artists",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=32&h=32&fit=crop&crop=face",
  },
  {
    artist: "Gimme Love",
    type: "Joji",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=32&h=32&fit=crop&crop=face",
  },
  {
    artist: "Oliver Tree",
    type: "Artists",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=32&h=32&fit=crop&crop=face",
  },
];

export default function RightSidebar() {
  return (
    <div className="w-72 bg-card border-l border-border h-full flex flex-col">
      <div className="p-6">
        {/* Friends Activity */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Friends Activity</h2>
            <Activity size={20} className="text-muted-foreground" />
          </div>
          
          <ScrollArea className="h-48">
            <div className="space-y-3">
              {friendsActivity.map((friend, index) => (
                <div key={index} className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-lg transition-colors cursor-pointer">
                  <img
                    src={friend.avatar}
                    alt={friend.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{friend.name}</span>
                      {friend.time && (
                        <span className="text-xs text-muted-foreground">{friend.time}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{friend.activity}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-6 w-6"
                  >
                    <MoreHorizontal size={12} />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Your Activity */}
        <div>
          <h2 className="font-semibold mb-4">Your Activity</h2>
          
          <ScrollArea className="h-48">
            <div className="space-y-3">
              {yourActivity.map((item, index) => (
                <div key={index} className="flex items-center gap-3 hover:bg-muted/50 p-2 rounded-lg transition-colors cursor-pointer group">
                  <img
                    src={item.avatar}
                    alt={item.artist}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.artist}</p>
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-6 w-6"
                  >
                    <MoreHorizontal size={12} />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}