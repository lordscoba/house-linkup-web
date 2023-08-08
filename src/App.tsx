import { Routes, Route } from 'react-router-dom';
import {
  About,
  Contact,
  HomeScreen,
  Property,
  Services,
  SingleHouseScreen,
} from './Pages';
import Layout from './component/AppLayout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/property" element={<Property />} />
          <Route path="/services" element={<Services />} />
          <Route path="/property/:id" element={<SingleHouseScreen />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
