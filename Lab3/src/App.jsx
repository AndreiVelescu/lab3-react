import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { MainPage } from "./pages/MainPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import { Router } from "./components/navigation/Router.jsx";
import { Routes } from "./components/navigation/Routes.jsx";
import { Route } from "./components/navigation/Route.jsx";

function App() {
  return (
    <>
      {/* <Header />
      <MainPage />
      <Footer />
      <LoginPage /> */}
      {/* <RegisterPage /> */}

      <Router>
        <Header />
        <Routes>
          <Route path="/">
            <MainPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
