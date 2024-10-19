import {
  Coffee,
  Wifi,
  Wind,
  Monitor,
  Vault,
  SnowFlake,
  Size,
  Guest,
  Bed,
} from "../../assets/assets";
import DetailsFeatures from "./DetailsFeatures";
import SingleFeature from "./SingleFeature";
const RoomDetail = ({ room, onBack }) => (
  <div className="flex flex-col w-full">
    {/* <button onClick={onBack} className="mb-4 text-blue-500">
        Back to Room List
      </button> */}
    <div className="flex justify-between w-full">
      <span className="text-[#0D0E0D]  text-base font-medium leading-5">
        Room Details
      </span>
      <button className="text-[#0D0E0D] text-center  text-xs font-medium leading-[110%] tracking-[0.12px] flex justify-center items-center px-3 py-1.5 rounded-md bg-[#E7F68E]">
        Edit
      </button>
    </div>

    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="text-[#0D0E0D] font-lato text-2xl font-semibold leading-[110%]">
          {room.type}
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
        <p>
          Occupied:
          <span>${room.price}/night</span>
        </p>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        {/* Room Image */}
        <div className="w-full">
          <img
            src={room.image}
            alt={room.type}
            className="w-[369px] h-[282px] object-cover rounded-lg"
          />
        </div>
        <div className="grid gap-3">
          <img
            src={room.image}
            alt={room.type}
            className="w-[75px] h-[58px] object-cover rounded-lg"
          />{" "}
          <img
            src={room.image}
            alt={room.type}
            className="w-[75px] h-[58px]  object-cover rounded-lg"
          />{" "}
          <img
            src={room.image}
            alt={room.type}
            className="w-[75px] h-[58px] object-cover rounded-lg"
          />
          <button className=" w-[75px] h-[58px] flex items-center justify-center text-nowrap bg-[#E7F68E]">
            View All
          </button>
        </div>
      </div>
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
      <p className="overflow-hidden w-full text-customGray font-lato text-[12px] font-normal leading-[140%]">
        {room.description}
      </p>
      <DetailsFeatures title="Features">
        <SingleFeature
          text="Private balcony (where applicable)"
          check={true}
        />
        <SingleFeature
          text="Work desk with ergonomic chair"
          check={true}
        />
        <SingleFeature
          text="Spacious layout with a modern design"
          check={true}
        />
        <SingleFeature
          text="Large windows offering city or garden views"
          check={true}
        />
      </DetailsFeatures>
      <DetailsFeatures title="Facilities" threeCol={true}>
        <SingleFeature
          text="High-speed Wi-Fi"
          others={true}
          icon={<Wifi />}
        />{" "}
        <SingleFeature
          text="In-room safe"
          others={true}
          icon={<Vault />}
        />{" "}
        <SingleFeature
          text="Mini-fridge"
          others={true}
          icon={<SnowFlake />}
        />{" "}
        <SingleFeature
          text="Flat-screen TV"
          others={true}
          icon={<Monitor />}
        />{" "}
        <SingleFeature
          text="Air conditioning"
          others={true}
          icon={<Wind />}
        />{" "}
        <SingleFeature
          text="Coffee/tea maker"
          others={true}
          icon={<Coffee />}
        />{" "}
      </DetailsFeatures>
      <DetailsFeatures title="Amenities">
        <SingleFeature
          text="Complimentary bottled water"
          check={true}
        />{" "}
        <SingleFeature text="Luxury toiletries" check={true} />{" "}
        <SingleFeature
          text="Coffee and tea making facilities"
          check={true}
        />{" "}
        <SingleFeature text="Hairdryer" check={true} />{" "}
        <SingleFeature
          text="Premium bedding and linens"
          check={true}
        />{" "}
        <SingleFeature text="Bathrobe and slippers" check={true} />{" "}
        <SingleFeature
          text="Ensuite bathroom with shower and bathtub"
          check={true}
        />{" "}
        <SingleFeature text="24-hour room service" check={true} />
      </DetailsFeatures>
    </div>
  </div>
);

export default RoomDetail;
