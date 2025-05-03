import ThemeContextProvider from "../utilities/context/ThemeContextProvider";
import ContextWrapper from "../utilities/context/ContextWrapper";
import AppContent from "../utilities/context/AppContent";

function App() {
  return (
        <ThemeContextProvider>
          <ContextWrapper>
            <AppContent />
          </ContextWrapper>
        </ThemeContextProvider>
  );
}

export default App;
