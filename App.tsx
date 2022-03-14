import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import useCachedResources from "./src/hooks/use-cached-resources";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}
