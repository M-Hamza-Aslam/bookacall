import { Fragment, useState } from "react";

import MeetingInfoForm from "./MeetingInfoForm";
import styles from "./ScheduleBox.module.css";

const ScheduleBox = (props) => {
  const { date, mentorId, time, details } = props.info;
  const { meridiem, hour } = time;
  const { studentName, reason } = details;
  const updateScheduleArr = props.updateScheduleArr;

  const [showForm, setShowForm] = useState(false);

  const scheduleMeetingHandler = () => {
    if (studentName && reason) {
      alert("A meeting is already scheduled at this hour!");
      return;
    }
    setShowForm(true);
  };

  return (
    <Fragment>
      {showForm && (
        <MeetingInfoForm
          details={{ mentorId, date, hour, meridiem }}
          show={showForm}
          onHide={() => setShowForm(false)}
          updateScheduleArr={updateScheduleArr}
        />
      )}

      <div onClick={scheduleMeetingHandler} className={styles.mainScheduleBox}>
        <div className={styles.scheduleTime}>
          <p>{hour}</p>
          <p>{meridiem}</p>
        </div>
        <div className={styles.scheduleDetails}>
          <h6>{studentName}</h6>
          <p>{reason}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default ScheduleBox;
