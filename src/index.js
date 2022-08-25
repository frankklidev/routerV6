import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
     <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
        <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
            path="*"
            element={
            <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
            </main>
        }
    />
      </Route>
    </Routes>
  </BrowserRouter>
);
