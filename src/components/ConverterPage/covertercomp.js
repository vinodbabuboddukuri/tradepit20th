import React from "react";
//import Form from 'react-bootstrap/Form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function Converter(props) {
  // const firstData = props.data.filter((rate) => {
  //   return rate !== props.secondInput;
  // });
  // const secData = props.data.filter((rate) => {
  //   return rate !== props.firstInput;
  // });
  return (
    <div className="conveter_container">
      <p style={{ fontSize: 30 }}>
        {props.fromAmount} {props.firstInput} is equals to
      </p>
      <h3 style={{ fontSize: 40 }}><center>
        {props.toAmount} {props.secondInput}</center>
      </h3>
      <div>
        <center>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <TextField id="outlined-basic" label="Outlined" variant="outlined" type="number"
          value={props.fromAmount}
          onChange={props.onMoneyChangeFrom}
          min="1"
          style={{width: "400px",height:"30px"}} />
          <FormControl sx={{ m: 1, minWidth: 80 }}h>
        <InputLabel id="demo-simple-select-label">INR</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.firstInput}
          label="tocurrency"
          onChange={props.handleFromCurrency}
        >
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
           {props.data.map((rate) => {
            return (
              <MenuItem key={rate} value={rate}>
                {rate}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
         </Box>
         </center>
        {/* <input
          type="number"
          value={props.fromAmount}
          onChange={props.onMoneyChangeFrom}
          min="1"
          style={{width: "400px",height:"30px"}}
        /> */}
    
        {/* <select value={props.firstInput} onChange={props.handleFromCurreny}>
          {props.data.map((rate) => {
            return (
              <option key={rate} value={rate}>
                {rate}
              </option>
            );
          })}
        </select> */}

      <br></br>
      </div>
      <div>
        <center>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
         <TextField id="outlined-basic" label="Outlined" variant="outlined" type="number"
              value={props.toAmount}
              onChange={props.onMoneyChangeTo}
              min="1"
          style={{color:"orange",width: "400px",height:"30px"}} />

<FormControl sx={{ m: 1, minWidth: 20 }}h>
        <InputLabel id="demo-simple-select-label">Second</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.secondInput}
          label="tocurrency"
          onChange={props.handleToCurrency}
        >
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
           {props.data.map((rate) => {
            return (
              <MenuItem key={rate} value={rate}>
                {rate}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
         </Box>
        {/* <input
          type="number"
          value={props.toAmount}
          onChange={props.onMoneyChangeTo}
          min="1"
          style={{width: "400px",height:"30px"}}
        /> */}
        {/* <select value={props.secondInput} onChange={props.handleToCurrency}
        >
          {props.data.map((rate) => {
            return (
              <option key={rate} value={rate}>
                {rate}
              </option>
            );
          })}
        </select> */}



        </center>
        
      </div>
      
    </div>
  
  );
}
export default Converter;
