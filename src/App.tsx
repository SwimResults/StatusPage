import React from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import ProgressSection from "./sections/ProgressSection";
import { useEffect } from "react";

function App() {

    useEffect(() => {
        document.title = "Status | SwimResults"
    }, []);

  return (
      <>
        <Helmet>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#204988" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
        </Helmet>

        <div className="App">
          <h1>SwimResults - Status</h1>
          <h2>Entwicklungsfortschritt</h2>
          <ProgressSection />
          <footer>
            &copy; 2023 - SwimResults
          </footer>
        </div>
    </>
  );
}

export default App;
