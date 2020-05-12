import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MenHome from "./components/MenHome/MenHome";
import WomenHome from "./components/WomenHome/WomenHome";
import KidsHome from "./components/KidsHome/KidsHome";
import ClientAccount from "./components/ClientAccount/ClientAccount";
import RegisterAccount from "./components/RegisterAccount/RegisterAccount";
import MenTShirtsContainer from "./components/MenTShirts/MenTShirtsContainer";
import { Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <main className='app-wrapper-content'>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/men-home' render={() => <MenHome />} />
        <Route path='/men-home/t-shirt' render={() => <MenTShirtsContainer />} />
        <Route path='/women-home' render={() => <WomenHome />} />
        <Route path='/kids-home' render={() => <KidsHome />} />
        <Route path='/client-account/login' render={() => <ClientAccount />} />
        <Route path='/client-account/register' render={() => <RegisterAccount />} />
        <Route path='/cart' render={() => <Cart />} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
  