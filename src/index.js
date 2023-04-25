import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { FilterProvider } from 'contexts/filterContext';
import { TaskProvider } from 'contexts/taskContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </FilterProvider>
  </React.StrictMode>
);
