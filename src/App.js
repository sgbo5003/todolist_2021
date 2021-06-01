import logo from "./logo.svg";
import "./App.css";
import {
  TextField,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
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
      endDate: null,
      endTime: null,
    };
  }

  checkValidate() {
    const { title, content, startDate, startTime, endDate, endTime } =
      this.state;
    if (!title || !content || !startDate || !endDate || !endTime) {
      return false;
    }
    return true;
  }

  checkDateValidate() {
    const { startDate, endDate } = this.state;
    if (startDate > endDate) {
      alert("시작 예정일이 종료 예정일보다 늦습니다. 다시 설정해주세요.");
      this.setState({ startDate: null, endDate: null });
    } else {
      return true;
    }
  }

  checkTimeValidate() {
    const { startTime, endTime } = this.state;
    if (endTime < startTime) {
      alert("시작 시간이 종료 시간보다 늦습니다. 다시 설정해주세요.");
      this.setState({ startTime: null, endTime: null });
    } else {
      return true;
    }
  }

  saveTodoList() {
    if (this.checkValidate()) {
      const {
        todoList,
        title,
        content,
        startDate,
        startTime,
        endDate,
        endTime,
      } = this.state;
      todoList.push({
        title: title.trim(),
        content: content.trim(),
        startDate,
        startTime,
        endDate,
        endTime,
      });
      this.setState({
        todoList,
        // title: "",
        // content: "",
        // startDate: null,
        // startTime: null,
        // endDate: null,
        // endTime: null,
      });
    } else {
      alert("입력값을 확인해주세요");
    }
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
          <KeyboardDatePicker
            disableToolbarx
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="종료 예정일"
            onChange={(value) => console.log(value)}
            style={{ width: "50%" }}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            value={this.state.endDate}
            onChange={(value) => {
              const { startDate } = this.state;
              this.setState({ endDate: value });
              this.checkDateValidate();
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            label="종료시간"
            variant="inline"
            onChange={(value) => console.log(value)}
            style={{ width: "50%" }}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
            value={this.state.endTime}
            onChange={(value) => {
              this.setState({ endTime: value });
              this.checkTimeValidate();
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
        <div className="list_area">
          <List>
            {this.state.todoList.map((todoItem, idx) => {
              const { title, content, startDate, startTime, endDate, endTime } =
                todoItem;
              return (
                <ListItem key={idx} role={undefined} dense button>
                  <ListItemText
                    primary={title}
                    secondary={
                      startDate?.format("yyyy-MM-DD") +
                      " " +
                      startTime?.format("HH:MM") +
                      " ~ " +
                      endDate?.format("yyyy-MM-DD") +
                      " " +
                      endTime?.format("HH:MM")
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright ⓒ 박상준 " + new Date().getFullYear() + "."}
        </Typography>
      </div>
    );
  }
}

export default App;
