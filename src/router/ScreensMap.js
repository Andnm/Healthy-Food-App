import Ionicons from "../components/common/VectorIcons/Ionicons";

import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import { ScreensName } from "./ScreensName";

// Liệt kê các màn hình của pj
export const ScreensMap = [
  {
    name: ScreensName.signup,
    component: Signup,
    options: {
      tabBarButton: () => null, // ẩn màn hình này trên tabbar
    },
    hiddenBottomTab: true, // ẩn tabbar ở màn hình này
  },
  {
    name: ScreensName.signin, // Tên màn hình (bắt buộc)
    component: Signin, // component màn hình (bắt buộc)
    options: {
      tabBarButton: () => null,
    },
    hiddenBottomTab: true,

    // options: {
    //   // liệt kê các options của màn hình này
    //   tabBarIcon: (
    //     { color, focused } // Màn hình này có dưới tabbar và declare icon của nó
    //   ) => <Ionicons name="home-outline" size={32} color={color} />,
    // },
  },
];
