import axios from "axios";
import React, { useRef } from "react"
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";


export const Admin:React.FC = () => {

    const address = useRef<HTMLInputElement | null>(null);
    const pass = useRef<HTMLInputElement | null>(null);
   
    const handleSubmit = async()=>{

        if(address?.current?.value && pass?.current?.value){
            try {
              await axios.post(
                  `${import.meta.env.VITE_API_URL}/api.php`,
                  JSON.stringify({
                    setAdress: 1,
                    address: address?.current?.value,
                    pass: pass?.current?.value,
                  })
                );

                address.current.value = "";
                pass.current.value = "";
                toast.success("Updated address", {
                    theme: "dark",
                  });
              } catch (error) {
                toast.error("Wrong password", {
                    theme: "dark",
                  });
              }
        }else{
            toast.error("Enter addresss/password", {
                theme: "dark",
              });
        }

      
    }

  return (
    <div>
        <ToastContainer></ToastContainer>
        <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f7fc',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <input
          ref={address}
          type="text"
          placeholder="Enter ERC20 address"
          style={{
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
        <input
          ref={pass}
          type="text"
          placeholder="Enter password"
          style={{
            width: '100%',
            padding: '12px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            boxSizing: 'border-box'
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '4px',
            width: '100%',
            marginTop: '10px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => (e.target as any).style.backgroundColor = '#0056b3'}
          onMouseLeave={(e) => (e.target as any).style.backgroundColor = '#007bff'}
        >
          Save
        </button>
      </div>
    </div>
    </div>
   
  )
}
