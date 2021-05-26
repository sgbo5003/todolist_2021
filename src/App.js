import logo from "./logo.svg";
import "./App.css";
import { TextField, Typography, Button } from "@material-ui/core";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import SaveIcon from "@material-ui/icons/Save";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      title: "",
      content: "",
      startDate: null,
      startTime: null,
    };
  }

  saveTodoList() {
    const { todoList, title, content, startDate, startTime } = this.state;
    todoList.push({ title, content, startDate, startTime });
    this.setState({
      todoList,
      title: "",
      content: "",
      startDate: null,
      startTime: null,
    });
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
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <TextField
            label="상세내용"
            size="normal"
            margin="normal"
            fullWidth
            multiline
            value={this.state.content}
            onChange={(e) => this.setState({ content: e.target.value })}
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
            value={this.state.startDate}
            onChange={(value) => {
              this.setState({ startDate: value });
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
            value={this.state.startTime}
            onChange={(value) => {
              this.setState({ startTime: value });
            }}
          />
          <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            style={{ float: "right" }}
            onClick={() => this.saveTodoList()}
          >
            Save
          </Button>
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
