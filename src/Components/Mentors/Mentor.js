import { Fragment, useState } from "react";
import "react-calendar/dist/Calendar.css";
import Button from "react-bootstrap/Button";

import styles from "./Mentor.module.css";
import DropDown from "../UI/DropDown";
import Calendar from "react-calendar";
import Schedule from "../Schedule/Schedule";

const Mentor = (props) => {
  const today = new Date();
  const name = props.mentorInfo.name;
  const id = props.mentorInfo.id;
  const [calenderValue, setCalenderValue] = useState(today);
  const [isShowSchedule, setIsShowSchedule] = useState(false);

  const scheduleHandler = () => {
    setIsShowSchedule(true);
  };
  return (
    <DropDown heading={name}>
      {isShowSchedule ? (
        <Schedule
          data={{
            mentorId: id,
            date: calenderValue.toDateString(),
          }}
          closeSchedules={() => setIsShowSchedule(false)}
        />
      ) : (
        <Fragment>
          <Calendar
            minDate={today}
            value={calenderValue}
            onChange={(e) => setCalenderValue(e)}
            className={styles.calender}
          />
          <Button className={styles.buttonTag} onClick={scheduleHandler}>
            Show Schedule
          </Button>
        </Fragment>
      )}
    </DropDown>
  );
};
export default Mentor;
