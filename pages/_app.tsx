import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  
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
  return (
    <div>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
      <h5>{isOnline ? '✅ Online' : '❌ Disconnected'}</h5>
    </div>
  );
};


export default App;
