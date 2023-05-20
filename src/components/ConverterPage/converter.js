import React from "react";
import Leftbar from "../Elements/leftbar";
import Topbar from "../Elements/topbar";
import {relDiff} from "../helpers.js";
import Loader from "../Elements/Loader";
import { useEffect, useRef, useState } from "react";
import Converter from "./covertercomp";
// import { IconButton } from "rsuite";
// import { Admin, Menu, Reload, Resize, Search } from '@rsuite/icons';
// // Import the default CSS
// import "rsuite/dist/rsuite.min.css"

export default function App() {
    const [firstInput, setFirstInput] = useState();
    const [secondInput, setSecondInput] = useState();
    const [data, setData] = useState([]);
    const [money, setMoney] = useState(1);
    const [moneyFrom, setMoneyFrom] = useState(true);
    const [exchangeRate, setExchangeRate] = useState();
    function useFirstPrevious(value) {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    }
    function useSecondPrevious(value) {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    }
  
    useEffect(() => {
      fetch(
        `https://v6.exchangerate-api.com/v6/7cc8565835b9b47e14685f57/latest/inr`
      )
        .then((response) => response.json())
        .then((responsedata) => {
          const firstCurr = Object.keys(responsedata.conversion_rates)[145];
          setData([...Object.keys(responsedata.conversion_rates)]);
          setFirstInput(responsedata.base_code);
          setSecondInput(Object.keys(responsedata.conversion_rates)[145]);
          setExchangeRate(responsedata.conversion_rates[firstCurr]);
        });
    }, []);
    const first = useFirstPrevious(firstInput);
    const second = useSecondPrevious(secondInput);
    useEffect(() => {
      // if (firstInput === secondInput) {
      //   setFirstInput(second);
      //   setSecondInput(first);
      // }
      if (firstInput === secondInput) {
        setFirstInput(second);
        setSecondInput(first);
      }
      if (firstInput != null && secondInput != null) {
        fetch(
          `https://v6.exchangerate-api.com/v6/7cc8565835b9b47e14685f57/pair/${firstInput}/${secondInput}`
        )
          .then((response) => response.json())
          .then((responseData) => {
            setExchangeRate(responseData.conversion_rate);
          });
      }
    }, [firstInput, secondInput, first, second]);
    let toAmount = 0,
      fromAmount = 1;
    if (moneyFrom) {
      fromAmount = money;
      toAmount = fromAmount * exchangeRate || 0;
      toAmount = toAmount.toFixed(2);
    } else {
      toAmount = money;
      fromAmount = toAmount / exchangeRate;
      fromAmount = fromAmount.toFixed(2);
    }
  
    function onMoneyChangeFrom(e) {
      const value = e.target.value;
      setMoney(value);
      setMoneyFrom(true);
    }
    function onMoneyChangeTo(e) {
      const value = e.target.value;
      setMoney(value);
      setMoneyFrom(false);
    }
    function handleFromCurrency(e) {
      if (firstInput === secondInput) {
        setFirstInput(second);
      } else setFirstInput(e.target.value);
    }
    function handleToCurrency(e) {
      if (firstInput === secondInput) {
        setSecondInput(first);
      } else setSecondInput(e.target.value);
    }
  
    return (
      <div className="portfolio">
        <Leftbar/>
        <div className="portfolio__container">
            <Topbar/>
        <center><h1>Currency Converter</h1></center>
        <Converter
          data={data}
          money={money}
          onMoneyChangeFrom={onMoneyChangeFrom}
          onMoneyChangeTo={onMoneyChangeTo}
          firstInput={firstInput}
          secondInput={secondInput}
          toAmount={toAmount}
          fromAmount={fromAmount}
          handleFromCurreny={handleFromCurrency}
          handleToCurrency={handleToCurrency}
        />
        </div>
      </div>
    );
  }




// class appy extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={

//         }
//     }
// render(){
// const [firstInput, setFirstInput] = useState();
//   const [secondInput, setSecondInput] = useState();
//   const [data, setData] = useState([]);
//   const [money, setMoney] = useState(1);
//   const [moneyFrom, setMoneyFrom] = useState(true);
//   const [exchangeRate, setExchangeRate] = useState();
//   function useFirstPrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
//   }
//   function useSecondPrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
//   }

//   useEffect(() => {
//     fetch(
//       `https://v6.exchangerate-api.com/v6/7cc8565835b9b47e14685f57/latest/inr`
//     )
//       .then((response) => response.json())
//       .then((responsedata) => {
//         const firstCurr = Object.keys(responsedata.conversion_rates)[145];
//         setData([...Object.keys(responsedata.conversion_rates)]);
//         setFirstInput(responsedata.base_code);
//         setSecondInput(Object.keys(responsedata.conversion_rates)[145]);
//         setExchangeRate(responsedata.conversion_rates[firstCurr]);
//       });
//   }, []);
//   const first = useFirstPrevious(firstInput);
//   const second = useSecondPrevious(secondInput);
//   useEffect(() => {
//     // if (firstInput === secondInput) {
//     //   setFirstInput(second);
//     //   setSecondInput(first);
//     // }
//     if (firstInput === secondInput) {
//       setFirstInput(second);
//       setSecondInput(first);
//     }
//     if (firstInput != null && secondInput != null) {
//       fetch(
//         `https://v6.exchangerate-api.com/v6/7cc8565835b9b47e14685f57/pair/${firstInput}/${secondInput}`
//       )
//         .then((response) => response.json())
//         .then((responseData) => {
//           setExchangeRate(responseData.conversion_rate);
//         });
//     }
//   }, [firstInput, secondInput, first, second]);
//   let toAmount = 0,
//     fromAmount = 1;
//   if (moneyFrom) {
//     fromAmount = money;
//     toAmount = fromAmount * exchangeRate || 0;
//     toAmount = toAmount.toFixed(2);
//   } else {
//     toAmount = money;
//     fromAmount = toAmount / exchangeRate;
//     fromAmount = fromAmount.toFixed(2);
//   }

//   function onMoneyChangeFrom(e) {
//     const value = e.target.value;
//     setMoney(value);
//     setMoneyFrom(true);
//   }
//   function onMoneyChangeTo(e) {
//     const value = e.target.value;
//     setMoney(value);
//     setMoneyFrom(false);
//   }
//   function handleFromCurrency(e) {
//     if (firstInput === secondInput) {
//       setFirstInput(second);
//     } else setFirstInput(e.target.value);
//   }
//   function handleToCurrency(e) {
//     if (firstInput === secondInput) {
//       setSecondInput(first);
//     } else setSecondInput(e.target.value);
//   }

//     return(<div className="portfolio">
        
//         <Leftbar/>
//         <div className="portfolio__container">
//             <Topbar/>
//              </div>
//              <h1>Currency Converter</h1>
//       <Converter
//         data={data}
//         money={money}
//         onMoneyChangeFrom={onMoneyChangeFrom}
//         onMoneyChangeTo={onMoneyChangeTo}
//         firstInput={firstInput}
//         secondInput={secondInput}
//         toAmount={toAmount}
//         fromAmount={fromAmount}
//         handleFromCurreny={handleFromCurrency}
//         handleToCurrency={handleToCurrency}
//       />
        
//     </div>);
// }
// }
// export default appy;