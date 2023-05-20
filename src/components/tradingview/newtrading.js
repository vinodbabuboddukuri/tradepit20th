import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
/* import TechnicalAnalysis, {
  THEMES,
  INTERVALS
} from "react-tradingview-technical-analysis"; */
import {
  MarketOverview,
  TechnicalAnalysis
} from "react-ts-tradingview-widgets";
import Leftbar from "../Elements/leftbar";
import Topbar from "../Elements/topbar";

export default function App() {
    return (
      <div className="App">


<div className="portfolio">
  <Leftbar />
  
        <div className="portfolio__container">
      
          <Topbar />
          <Stack direction="row" spacing={2}>
      <Button href="/learn">Learn</Button>
      <Button href="/converter">Calculator</Button>
      <Button href="/dashboard"> Go Home</Button>
    </Stack>
        <div style={{ height: 500 ,width:1400}}>
    
          <TradingViewWidget
            symbol="NASDAQ:AAPL"
            theme={Themes.LIGHT}
            locale="th"
            autosize
          />
        
        </div>
       
  <br>
  </br>
        <TechnicalAnalysis symbol={"NASDAQ:AAPL"} dark locale="en" />
        <br></br>
  
        <MarketOverview locale="en" />
      
      </div>
      </div>
      </div>
    );
  }