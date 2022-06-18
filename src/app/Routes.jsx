import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../features/Home/Home';
import CardBuilder from '../features/cardBuilder/CardBuilder';
import Sets from '../features/Sets/Sets';
import Sets2 from '../features/Sets/Sets2';
import SingleSet from '../features/Sets/SingleSet';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sets">
        <Route index element={<Sets2 />} />
        <Route path=":setId" element={<SingleSet />} />
      </Route>
      <Route path="/cards" element={<CardBuilder />} />
    </Routes>
  </BrowserRouter>
);
export default AppRoutes;
