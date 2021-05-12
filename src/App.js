import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">TODO LIST</div>
        <div className="input_area">
          <TextField label="제목" size="normal" fullWidth required />
          <TextField label="상세내용" size="normal" fullWidth multiline />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            onChange={(value) => console.log(value)}
            style={{ width: "50%" }}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="시작시간"
            variant="inline"
            onChange={(value) => console.log(value)}
            style={{ width: "50%" }}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </div>
        <div className="list_area"> 리스트 영역</div>
      </div>
    );
  }
}

export default App;
