import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={}>
    <Route index element={} />
  </Route>
))

function App() {
  return (
    <RouterProvider router= {router} />
  );
}

export default App;
