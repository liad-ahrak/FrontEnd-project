import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { useEffect, useState, createContext} from "react";
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext({});

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState('dark');
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
      alert('You are offline');
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme} className="container">
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
        <div className="downBar">
          <h5>{isOnline ? '✅ Online' : '❌ Disconnected'}</h5>
          <div className="switchContainer">
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
            <h6>{theme === 'light' ? "Light mode" : "Drak Mode"}</h6>
          </div>
        </div>
        <style jsx>{`        
          .downBar {
            text-align: right;
            padding-right: 1rem;
            display: flex;
            align-items: center;
            justify-content: flex-end; 
          }
          .switchContainer {
            display: flex;
            align-items: center;
          }
          h5 {
            margin-right: 2rem;
          }
        `}</style>
      </div>
    </ThemeContext.Provider>
  );
};


export default App;
