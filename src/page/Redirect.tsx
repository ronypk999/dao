import React, { useState } from "react"

const styles = {
    container: {
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
      textAlign: "center" as const,
      padding: "20px",
    },
    title: {
      fontSize: "2rem",
      color: "#333",
      marginBottom: "20px",
    },
    message: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "30px",
      maxWidth: "600px",
    },
    actions: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };
  


export const Redirect:React.FC = () => {
    const [copied, setCopied] = useState(false);
    const handleClick = ()=>{
        const url = window.location.href.replace("redirect","");
        const intentUrl = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=https;package=com.android.chrome;end;`;
      
        window.open(intentUrl,"_blank");
    };

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset the message after 2 seconds
        });
      };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Web3 Not Supported</h1>
      <p style={styles.message}>
        Your telegram in-app browser does not support Web3 functionality. To continue, please open this link in an external browser app like dapp browser,chrome,safari,firefox or copy the link to use in other browser.
      </p>

      <div style={styles.actions}>
        <button style={styles.button} onClick={handleClick}>
          Open in External Browser
        </button>

        <button style={styles.button} onClick={copyLink}>
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  )
}
