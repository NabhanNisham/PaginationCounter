import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Counter from "./components/Counter";
import { Header, Footer } from "./auth/Home";
import { Provider } from "react-redux";
import store from "./Redux/store";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { authInstance } from "./auth/firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = authInstance.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/PaginationCounter" element={<SignIn />} />
            <Route path="/PaginationCounter/SignUp" element={<SignUp />} />
            <Route
              path="/PaginationCounter/counter"
              element={
                <div>
                  <Header user={user} />
                  <Counter />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/PaginationCounter/product"
              element={
                <div>
                  <Header user={user} />
                  <ProductList />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/PaginationCounter/product/:id/"
              element={
                <div>
                  <Header user={user} />
                  <ProductDetails />
                  <Footer />
                </div>
              }
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
