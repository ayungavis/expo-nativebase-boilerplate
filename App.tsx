import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import useCachedResources from "./src/hooks/use-cached-resources";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/store/store";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <NativeBaseProvider>
            <Navigation />
          </NativeBaseProvider>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
