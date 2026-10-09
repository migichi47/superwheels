import { IoIosAlert } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export const dashboardCards = [
  {
    icon: <MdCategory />,
    data: "242",
    dataName: "Total products",
  },
  {
    icon: <IoAnalytics />,
    data: "$24k",
    dataName: "Total revenue",
  },
  {
    icon: <IoIosAlert />,
    data: "10",
    dataName: "Low stock",
  },
  {
    icon: <TiTick />,
    data: "233",
    dataName: "Products in stock",
  },
];
