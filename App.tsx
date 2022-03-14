import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import useCachedResources from "./src/hooks/use-cached-resources";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store, persistor } from "./src/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NativeBaseProvider>
              <Navigation />
            </NativeBaseProvider>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
