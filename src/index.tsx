import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { IsClickedProvider } from './Context/IsClickedContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <IsClickedProvider>
            <App />
        </IsClickedProvider>
    </BrowserRouter>
);

reportWebVitals();
