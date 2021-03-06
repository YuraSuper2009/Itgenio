import React from "react";
import MenuItem from "./item/task-item.component";
import "./task-list.style.css";
import TaskPage from "../../task-page/task-page.react.component";
import { Link } from "react-router-dom";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          name: "Name",
          type: "Type",
          points: "Points",
          date: "00/00/2020 22:00",
          url: "/task",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.tasks.map(({ name, ...otherSectionProps }) => (
            <a target="_blank" href="https://www.google.com"><MenuItem key={name} {...otherSectionProps}></MenuItem></a>
        ))}
      </div>
    );
  }
}

export default TaskList;
