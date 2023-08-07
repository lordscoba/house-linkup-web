import { Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Property, Services } from './screens';
import Layout from './component/AppLayout';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/property" element={<Property />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
