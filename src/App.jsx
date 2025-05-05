import ThemeContextProvider from "./context/ThemeContextProvider";
import ContextWrapper from "./context/ContextWrapper";
import AppContent from "./context/AppContent";

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
