import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import Cart from './components/Cart';
import { Login } from './components/Login';
import db, {auth} from './firebase/firebase';

function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [cartItems, setCartItems] = useState([]);
    const getCartItems = () => {
        db.collection('cart').onSnapshot(snapshot => {
            const items = snapshot.docs.map(doc => ({
                id: doc.id,
                product: doc.data()
            }));
            setCartItems(items);
        })
    };
    useEffect(() => {
        getCartItems();
    }, [])
    const getCount = () => {
        let count = 0;
        cartItems.forEach(item => {
            count += (item.product.quantity);
        });
        return count;
    };
    const signOut = () => {
        auth.signOut().then(() => {
            setUser(null);
            localStorage.removeItem('user');
        });
    };
    return (
        <>
            {!user
                ? (<Login setUser={setUser} />)
                : (
                    <div className="App">
                        <Header user={user} signOut={signOut} cartItemsCount={getCount} />
                        <Routes>
                            <Route path="/cart" element={<Cart cartItems={cartItems} cartItemsCount={getCount} />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                )
            }
        </>
    );
}

export default App;
