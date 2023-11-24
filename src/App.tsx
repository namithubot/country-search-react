import React from "react";
import './App.css';
import Search from './modules/search/Search';
import { ConfigProvider, Space, theme } from "antd";

/**
 * Root Application component
 * @returns {JSX.Element} Root App React component
 */
function App() {
  return (
    <><ConfigProvider
      theme={{
        // 1. Use dark algorithm
        algorithm: theme.darkAlgorithm,
        // 2. Combine dark algorithm and compact algorithm
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >
    <Space>
    <div className="App">
        <header className="App-header">
          Search Your Country
        </header>
        <div className="app-body">
          <Search />
        </div>
      </div>
    </Space>
    </ConfigProvider>
    </>
  );
}

export default App;
