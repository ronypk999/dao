import { useEffect } from "react";

import eth from "../assetsDao/ethereum.png";

import Timer from "../components/Timer";
import { ToastContainer } from "react-toastify";
import { useInfoContext } from "../hook/ContextHook";
import { useTranslation } from "react-i18next";
import saleLogo from '../assetsDao/logo.svg';
import bnbIcon from '../assetsDao/bnb-logo.webp';
import ethIcon from '../assetsDao/eth-logo.webp';
import ethLogo from '../assetsDao/eth-logo.webp';
import bnbLogo from '../assetsDao/bnb-logo.webp';
import presaleImage from '../assetsDao/presale.webp';
const MainConnect = () => {
  const {
    dxePrice,
    setAmountSender,
    selectedCoin,
    setSelectedCoin,
    setAmount,
    usdPrice,
    collectedDXE,
    targetDXE,
    coins,
    amount,
    myPurchase,
    sendCoinRef,
    widget,
  } = useInfoContext();
  const { t } = useTranslation();

  const handleSelectCoin = (selectedName: string) => {
    const coin = coins.find(({ name }) => name === selectedName);
    if (coin) {
      setSelectedCoin(coin);
    } else {
      console.log("coin find error");
    }
  };

  const updateDXE = () => {
    if (selectedCoin.price && dxePrice && sendCoinRef.current) {
      const val =
        typeof sendCoinRef.current.value === "string"
          ? parseFloat(sendCoinRef.current.value) || 0
          : sendCoinRef.current.value || 0;

      const amountInUSD = val * selectedCoin.price;

      const newAmountDxe = amountInUSD * dxePrice;

      setAmount(
        newAmountDxe.toString().length > 8
          ? parseFloat(newAmountDxe.toFixed(8))
          : newAmountDxe
      );
      setAmountSender(val);
    }
  };

  useEffect(() => {
    updateDXE();
  }, [selectedCoin]);

  // const format = (am: number) => {
  //   return Number(am).toFixed(2);
  // };

  const formatUSD = (am: number) => {
    return am.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <section className="hero-info-section">
      <div className="hero-card">
        <div className="left-content">
          <img src={presaleImage} alt="MetaVirus" className="hero-image" />
        </div>
        <div className="right-content">
          <div className="tabs">
            <button className="tab">Offerings</button>
            <button className="tab">Key Metrics</button>
            <button className="tab">Unlocks</button>
          </div>
          <div className="countdown">
            <p>MetaVirus PRE-Sale ends in:</p>
            
             <div className="countdown-timer">
            <Timer></Timer>
             </div>
            <button onClick={()=>{
             
          
            document.getElementById("modalBuy12")?.classList.remove("hidden");
             
           
               
            }} className="join-button">Join Pre-Sale</button>
          </div>

          <div className="countdown">
            <p>My purchased tokens</p>
            
             <div className="countdown-timer">
          <div>{myPurchase || 0} $coin</div>
             </div>
            <button onClick={()=>{
             
          
            document.getElementById("modalBuy12")?.classList.remove("hidden");
             
           
               
            }} className="join-button">Withdraw</button>
          </div>

        </div>
      </div>
    </section>

      <div id="modalBuy12" className="i-modal-overlay hidden">
      <div className="i-modal-content">
        <div className="i-close-modal-container">
          <button className="i-close-modal" onClick={()=>document.getElementById("modalBuy12")?.classList.add("hidden")}>X</button>
        </div>

        {/* Sale Ticket Section */}
        <div className="i-sale-ticket">
          <div className="i-logo-container">
            <img src={saleLogo} alt="Logo" className="i-sale-logo" />
          </div>
          <h2 className="i-h2">Public Sale Ticket</h2>

          {/* Status Row */}
          <div className="i-ticket-item">
            <span>Status:</span>
            <span id="status" className="i-status-right">Verifying</span>
          </div>

          <hr className="i-separator" />

          {/* Price Row */}
          <div className="i-ticket-item">
            <span>Private Price:</span>
            <span id="private-price">$0.02</span>
          </div>
          <hr className="i-separator" />

          <div className="i-ticket-item">
            <span>Listing Price:</span>
            <span><span className="i-highlight">min</span> <span id="listing-price">$0.18</span></span>
          </div>
          <hr className="i-separator" />

          <div className="i-ticket-item">
            <span>Individual Allocation:</span>
            <span><span className="i-highlight">max</span> <span id="individual-allocation">$122,930</span></span>
          </div>
          <hr className="i-separator" />

          <div className="i-ticket-item">
            <span>Blockchain Network:</span>
            <span>
              <img src={ethIcon} alt="ETH Logo" className="i-token-logo" />
              <span className="i-highlight"></span>
              <img src={bnbIcon} alt="BSC Logo" className="i-token-logo" />
            </span>
          </div>
          <hr className="i-separator" />

          <div className="i-ticket-item">
            <span>Sale End:</span>
            <Timer></Timer>
          </div>
          <hr className="i-separator" />

          <div className="i-ticket-item">
            <span>Minimal Alocation:</span>
            <span>
              <img src={ethIcon} alt="ETH Logo" className="i-token-logo" /> 0.1
              or
              <img src={bnbIcon} alt="BSC Logo" className="i-token-logo" /> 0.5
            </span>
          </div>
        </div>

        {/* ETH/BNB Dropdown and Amount Input */}

        <div className="i-amount-input-container">
          <label className="i-label" htmlFor="donation-amount">From:</label>
          <div className="i-input-with-dropdown">
            <div className="hidden">
              <img id="selected-token-icon" src={selectedCoin.icon} alt="Token Icon" className="i-token-logo" />
              <select id="crypto-type" className="i-select"> {/* Controlled input */}
                <option value="ETH" data-icon={ethIcon}>ETH</option>
                <option value="BNB" data-icon={bnbIcon}>BNB</option>
              </select>
            </div>
            <div className="network-dropdown">
              <div className="network-dropdown_box">
                <button className="network-button">
                  <img
                    src={selectedCoin.icon}
                   
                    className="network-icon"
                  />
                  
                </button>
                <div className="network-options">
                  <div onClick={() => handleSelectCoin("ETH")} className="network-option">
                    <img src={ethLogo} alt="Ethereum" className="network-icon network-option_image" />  ETH
                  </div>
                  <div onClick={() => handleSelectCoin("BNB")} className="network-option">
                    <img src={bnbLogo} alt="Binance" className="network-icon network-option_image" />  BSC
                  </div>
                </div>
              </div>
            </div>
            <input id="donation-amount" className="i-input" type="number" placeholder="Enter amount"  onChange={updateDXE}
                ref={sendCoinRef}/>
          </div>
        </div>

        {/* MVT Amount Section */}
        <div className="i-amount-input-container">
          <label className="i-label" htmlFor="mvt-amount">To:</label>
          <div className="i-input-with-output">
            <input className="i-input" type="text" id="mvt-amount" name="mvt-amount" placeholder="MVT amount" disabled value={amount} />
          </div>
        </div>

        <div>{selectedCoin?.wallet}</div>
      
      </div>
    </div>
    </>
  );
};

export default MainConnect;
