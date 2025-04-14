import ThemeContextProvider from "../utilities/ThemeContextProvider";
import ContextWrapper from "../utilities/ContextWrapper";
import AppContent from "../utilities/AppContent";

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
