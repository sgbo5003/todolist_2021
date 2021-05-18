import logo from "./logo.svg";
import "./App.css";
import { TextField, Typography } from "@material-ui/core";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      startDate: null,
      startTime: null,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header">TODO LIST</div>
        <div className="input_area">
          <TextField
            label="제목"
            size="normal"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="상세내용"
            size="normal"
            margin="normal"
            fullWidth
            multiline
          />
          <KeyboardDatePicker
            disableToolbarx
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
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright ⓒ 박상준 " + new Date().getFullYear() + "."}
        </Typography>
      </div>
    );
  }
}

export default App;
