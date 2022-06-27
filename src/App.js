import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {MainPage} from "./components/MainPage";
import {TendersActive} from "./components/TendersActive";
import {TendersFinished} from "./components/TendersFinished";
import {TenderActiveDetails} from "./components/TenderActiveDetails";
import {TenderFinishedDetails} from "./components/TenderFinishedDetails";
import {OfferAdd} from "./components/OfferAdd";
import {OfferAddSuccess} from "./components/OfferAddSuccess";
import {TenderAdd} from "./components/TenderAdd";
import {TenderAddSuccess} from "./components/TenderAddSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            <Route path='przetargi' element={<TendersActive/>}/>
            <Route path='przetargi/:id' element={<TenderActiveDetails/>}/>
            <Route path='przetargi/zakonczone' element={<TendersFinished/>}/>
            <Route path='przetargi/zakonczone/:id' element={<TenderFinishedDetails/>}/>
            <Route path='przetargi/dodaj' element={<TenderAdd/>}/>
            <Route path='przetargi/dodaj/sukces' element={<TenderAddSuccess/>}/>
            <Route path='oferty/:id' element={<OfferAdd/>}/>
            <Route path='oferty/sukces' element={<OfferAddSuccess/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
