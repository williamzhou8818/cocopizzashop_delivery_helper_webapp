import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import DeliveryCards from './components/DeliveryCards/DeliveryCards';

function App() {
  return (
    <>
        <Layout>
            <DeliveryCards />
        </Layout>
    </>
  );
}

export default App;
