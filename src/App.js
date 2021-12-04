import logo from './logo.svg';
import './App.css';
import Loading from './loading';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import React from 'react';
import Header from './header';
const Home = React.lazy(() => import("./home"));
const User = React.lazy(() => import("./Users"));
// const Loading = React.lazy(() => import('./loading'));
const NotFound = React.lazy(() => import('./notfound'));

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route
          path="/"
          element={
            <React.Suspense fallback={<><Loading /></>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="users"
          element={
            <React.Suspense fallback={<><Loading /></>}>
              <User />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<><Loading /></>}>
              <NotFound />
            </React.Suspense>
          }
        />
        {/* <Route path="*" element={} /> */}
      </Routes>
    </div >
  );
}

export default App;
