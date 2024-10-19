import { Size, Guest, Bed } from "../../assets/assets";

const RoomCard = ({ room, onClick }) => (
  <div
    className="flex p-4 items-center gap-7 cursor-pointer rounded-[12px] border border-[#e7e7e7e]"
    onClick={onClick}
  >
    <img
      src={room.image}
      alt={room.type}
      className="w-[180px] h-full object-cover rounded-lg mr-4"
    />

    <div className="flex flex-col items-start gap-4 flex-1">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <span className="text-customBlack text-[24px] font-bold leading-[110%] tracking-[0.48px]">
            {room.type}
          </span>
          <div className="text-customBlack text-[12px] flex gap-[17px] font-normal leading-[140%]">
            <span className="flex gap-1.5">
              <Size />
              {room.size}
            </span>
            <span className="flex gap-1.5">
              <Bed />
              {room.beds}
            </span>
            <span className="flex gap-1.5">
              <Guest />
              {room.guests}
            </span>
          </div>
        </div>
        <span
          className={`text-black font-lato h-fit rounded-md text-[12px] px-2 py-1 font-medium leading-[140%]
              ${
                room.status === "Available"
                  ? "bg-customBlue"
                  : "bg-customLightYellow"
              }
              `}
        >
          {room.status}
        </span>
      </div>
      <p className="overflow-hidden w-full text-customGray font-lato text-[12px] font-normal leading-[140%]">
        {room.description}
      </p>
      <div className="flex justify-between items-center w-full">
        <span className="text-customGray text-[12px] font-normal ">
          Available:
          <span className="text-customBlack ml-1">
            ${room.price}/night
          </span>
        </span>
        <span className="text-customBlack text-[20px] font-semibold leading-[120%]">
          ${room.price}
          <span className="text-customGray text-[12px] font-normal">
            /night
          </span>
        </span>
      </div>
    </div>
  </div>
);

export default RoomCard;
