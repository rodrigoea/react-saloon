import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import storeConfig from "./store/store.config";

/** Routes */
import routes from "./routes";
import { MenuAppBar, ThemeProvider, SnackbarProvider } from "./components";

const store = storeConfig();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <SnackbarProvider>
          <Router>
            <MenuAppBar />
            {routes()}
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
