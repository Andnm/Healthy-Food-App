import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/redux/store";
import Navigator from "./src/router/Navigator";

// Component App chính của ứng dụng
export default function App() {
  return (
    // Provider bao bọc toàn bộ ứng dụng để các component con có thể truy cập Redux store
    <Provider store={store}>
      {/* NavigationContainer bao bọc navigation system của ứng dụng */}
      <NavigationContainer>
        {/* Component Navigator chứa cấu hình các màn hình và route */}
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
