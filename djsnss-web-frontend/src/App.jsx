import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here if needed */}
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
