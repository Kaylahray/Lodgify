import RoomCard from "./RoomCard";
import { rooms } from "./rooms";
const RoomList = ({ onSelectRoom }) => (
  <div className="gap-4 flex flex-col">
    {/* Room Cards */}
    {rooms.map((room) => (
      <RoomCard
        key={room.id}
        room={room}
        onClick={() => onSelectRoom(room)}
      />
    ))}
  </div>
);

export default RoomList;
