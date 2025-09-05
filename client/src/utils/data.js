import { MdOutlineDashboard, MdLogout,MdFilterListAlt, MdOutlineCreateNewFolder} from "react-icons/md";

export const sidebarItems = [
    {
        "id":1,
        "text":"Dashboard",
        "icon":MdOutlineDashboard,
        "path":"/",
    },
    {
        "id":2,
        "text":"Create Post",
        "icon":MdOutlineCreateNewFolder,
        "path":"/create-post",
    },
    {
        "id":3,
        "text":"My Post",
        "icon":MdFilterListAlt,
        "path":"/my-post",
    },
    {
        "id":4,
        "text":"Log Out",
        "icon":MdLogout,
        "path":"login",
    },
]