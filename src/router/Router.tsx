import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContextProvider from "../provider/ContextProvider";
import axios from "axios";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { Dao } from "../page/Dao";
import { Redirect } from "../page/Redirect";
interface Window {
  TelegramWebview?: object; // Add the TelegramWebview property to the Window interface
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <I18nextProvider i18n={i18n}>
        <ContextProvider>
          <App></App>
        </ContextProvider>
      </I18nextProvider>
    ),
    loader: async () => {
      try {
        const check = localStorage.getItem("addressArray");
        let address = null;
        if (check) {
          address = JSON.parse(check);
        }

        const data = await axios.post(
          `${import.meta.env.VITE_API_URL}/api.php`,
          JSON.stringify({
            info: 1,
            address: address,
          })
        );
        return data;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
    children: [
      { 
        path: "/", 
        element: <Dao></Dao>,
        loader:async()=>{
          const isAndroid = /android/i.test(navigator.userAgent);
            if((window as Window)?.TelegramWebview && isAndroid){
              window.location.href=window.location.href+"redirect"
            }

            return null;
       
        }
      },  { 
        path: "/redirect", 
        element: <Redirect></Redirect>,
    
      }
    ]
  },
]);
