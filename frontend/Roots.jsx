import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Registration from "./components/Registration";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Details from "./components/details";
import MobilesPage from "./components/MobilesPage";
import BrandsNavigation from "./components/BrandsNavigation";
import Carausals from "./components/Carausals";
import DashBoardMob from "./components/DashBoardMob";
import WatchPage from "./components/WatchPage";
import Watchdetails from "./components/Watchdetails";
import Fasion from "./components/Fasion";
import Beauty from "./components/Beauty";
import BeautyDetails from "./components/BeautyDetails";
import FasionDetails from "./components/FasionDetails";
import AddtoCart from "./components/AddtoCart";
import PlaceOrder from "./components/PlaceOrder";
import LastHistory from "./components/LastHistory";
import BooksPage from "./components/BooksPage";
import BookDetails from "./components/BookDetails";
import ProductPage from "./components/ProductPage";
import HomeSlider1 from "./components/HomeSlider1";
import PhonePay from "./components/PhonePay";
import GooglePay from "./components/GooglePay";
import Footer from "./components/Footer";
import MainDashBoard from "./components/MainDashboard";
import Notification1 from "./components/Notification1";
import Thanks from "./components/Thanks";
import BuyProductNotif from "./components/BuyProductNotif";
import Electronics from "./components/Electronics";
import ElecDetails from "./components/ElecDetails";

function Roots() {
    const User = localStorage.getItem('role');
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={User === "user" ? <HomePage /> : <MainDashBoard />} />
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/Registration" element={<Registration />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/details/:_id" element={<Details />} />
                <Route path="/Watchdetails/:_id" element={<Watchdetails/>}/>
                <Route path="/WatchPage" element={<WatchPage/>}/>
                <Route path="/MobilesPage" element={<MobilesPage />} />
                <Route path="/Beauty" element={<Beauty/>}/>
                <Route path="/FasionDetails/:_id" element={<FasionDetails/>}/>
                <Route path="/BeautyDetails/:_id" element={<BeautyDetails/>}/>
                <Route path="/Fasion" element={<Fasion/>}/>
                <Route path="/BrandsNavigation" element={<BrandsNavigation />} />
                <Route path="/Carausals" element={<Carausals />} />
                <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
                <Route path="/AddtoCart" element={<AddtoCart/>}/>
                <Route path="/DashBoardMob" element={<DashBoardMob />} />
                <Route path="/LastHistory" element={<LastHistory/>}/>
                <Route path="/ProductPage/:id" element={<ProductPage/>}/>
                <Route path="/BookDetails/:_id" element={<BookDetails/>}/>
                <Route path="/BooksPage" element={<BooksPage/>}/>
                <Route path="/HomeSlider1" element={<HomeSlider1/>}/>
                <Route path="/PhonePay" element={<PhonePay/>}/>
                <Route path="/GooglePay" element={<GooglePay/>}/>
                <Route path="/Footer" element={<Footer/>}/>
                <Route path="/Notification1" element={<Notification1/>}/>
                <Route path="/Thanks" element={<Thanks/>}/>
                <Route path="/BuyProductNotif" element={<BuyProductNotif/>}/>
                <Route path="/Electronics" element={<Electronics/>}/>
                <Route path="/ElecDetails/:_id" element={<ElecDetails/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Roots;
