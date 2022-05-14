import { useEffect } from "react";
import { animation } from "./utils/initDroneLayer";

function App() {
  useEffect(() => {
    animation();
  }, []);
  return (
    <div className="App">
      <div className="hero">
        <h1 className="title">page_title</h1>
        <p className="text">secondary_text</p>
        <p>
          <button className="btn">English</button>
          <button className="btn">Russian</button>
        </p>
      </div>

      <div className="pricing">
        <h1>our_packages</h1>
        <div className="pricing-table">
          <div className="pricing-card">
            <p className="title">text_basic</p>
            <p className="info">card_text</p>
            <button className="btn">text_buy</button>
          </div>
          <div className="pricing-card">
            <p className="title">text_standard</p>
            <p className="info">card_text</p>
            <button className="btn">text_buy</button>
          </div>
          <div className="pricing-card">
            <p className="title">text_premium</p>
            <p className="info">card_text</p>
            <button className="btn">text_buy</button>
          </div>
          <div className="pricing-card">
            <p className="title">text_pro</p>
            <p className="info">card_text</p>
            <button className="btn">text_buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
