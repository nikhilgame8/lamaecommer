import React, {useState, useEffect, createContext} from 'react';
import Announcement from '../components/Announcement';
import HomeListing from '../components/HomeListing';
import NavbarMain from '../components/Navbar';
import Footer from '../components/Footer';
import NewLaunches from './NewLaunches';
import TopWear from './TopWear';
import BottomWear from './BottomWear'
import ItemDetail from '../components/ItemDetail';
import ViewCart from '../components/ViewCart';
import WinterWear from './WinterWear';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

const FetchedData = createContext();

const Home = () => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartUpdate, setCartUpdate] = useState(false);
  const [pages, setPages] = useState({start: 1, end: 20, sortby: "", sortdir: "", keyType: "top-wear-kurtas"});

  useEffect(() => {
    
    (async () => {
      let response = await fetch(`https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=2&url_key=${pages.keyType}&page=${pages.start}&count=${pages.end}&sort_by=${pages.sortby}&sort_dir=${pages.sortdir}&filter=`);
      let objList = await response.json();
      setItems(objList.result.products);
      setLoading(true);
  })();
  }, [pages])

  return (
    <div>
      <FetchedData.Provider value={{items, loading, cartUpdate, setCartUpdate, pages, setPages}} >
      <Router>
      <Announcement />
      <NavbarMain cartUpdate={cartUpdate} />
      <Routes>
        <Route exact path="/" element={<HomeListing key="homePage" />} />
        <Route exact path={`/:id`} element={ <ItemDetail key="itemPage" />} />
        <Route exact path="/newlaunches" element={ <NewLaunches key="newlaunches" />} />
        <Route exact path="/topwear" element={ <TopWear key="topwear" />} />
        <Route exact path="/bottomwear" element={<BottomWear key="bottomwear" />} />
        <Route exact path="/itemDetail" element={<ItemDetail key="itemDetail" />} />
        <Route exact path="/viewCart" element={<ViewCart key="viewCart" />} />
        <Route exact path="/winterwear" element={<WinterWear key="winterwear" />} />
      </Routes>
      <Footer />
      </Router>
      </FetchedData.Provider>
    </div>
  )
}

export { FetchedData };
export default Home
