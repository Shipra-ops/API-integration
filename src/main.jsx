import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StudentProvider } from "./context/StudentContext.jsx";

createRoot(document.getElementById('root')).render(
  <StudentProvider>
    <App />
  </StudentProvider>
)
