import { NavLink } from "react-router-dom";

const NavItem = ({ item, subnav, showSubnav }) => {
  return (
    <li className="flex justify-between flex-col">
      {item.isButton ? (
        <button
          onClick={item.subNav && showSubnav}
          className="flex gap-2 rounded-lg items-center py-[10px] px-2 text-[#A3A3A3] text-sm font-semibold leading-[1] tracking-[0.14px]"
        >
          <item.icon />
          {item.name}

          {item.subNav && subnav ? (
            <item.iconOpen width={10} height={10} />
          ) : item.subNav ? (
            <item.iconClosed width={10} height={10} />
          ) : null}
        </button>
      ) : (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "flex gap-2 items-center py-[10px] rounded-lg bg-[#E7F68E] px-2 text-sm font-semibold"
              : "flex gap-2 rounded-lg items-center py-[10px] px-2 text-[#A3A3A3] text-sm font-semibold"
          }
        >
          <item.icon />
          {item.name}
        </NavLink>
      )}
      {subnav &&
        item.subNav?.map((subItem, index) => (
          <NavLink
            key={index}
            to={subItem.path}
            className={({ isActive }) =>
              isActive
                ? "py-[10px] rounded-lg bg-[#E7F68E] px-2 text-center text-sm font-semibold"
                : "rounded-lg text-center py-[10px] px-2 text-[#A3A3A3] text-sm font-semibold"
            }
          >
            {subItem.name}
          </NavLink>
        ))}
    </li>
  );
};

export default NavItem;
