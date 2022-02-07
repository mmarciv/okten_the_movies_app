import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import MoviesPage from "./pages/MoviesPage";
import NotFound from "./components/NotFound/NotFound";
import SiteLayout from "./layouts/SiteLayout";
import MoviesDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<SiteLayout/>}>
          <Route path={'/'} element={<MoviesPage/>}/>
          <Route path={'/genre/:genreId'} element={<MoviesPage/>}/>
          <Route path={'/movie/:movieId'} element={<MoviesDetailsPage/>}/>
          <Route path={'*'} element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
