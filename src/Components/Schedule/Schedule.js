// import style from './Schedule.module.css';
import { useEffect, useState, useCallback } from "react";
import Button from "react-bootstrap/Button";

import ScheduleBox from "./ScheduleBox";

const timings = [
  { hour: 12, meridiem: "am" },
  { hour: 1, meridiem: "am" },
  { hour: 2, meridiem: "am" },
  { hour: 3, meridiem: "am" },
  { hour: 4, meridiem: "am" },
  { hour: 5, meridiem: "am" },
  { hour: 6, meridiem: "am" },
  { hour: 7, meridiem: "am" },
  { hour: 8, meridiem: "am" },
  { hour: 9, meridiem: "am" },
  { hour: 10, meridiem: "am" },
  { hour: 11, meridiem: "am" },
  { hour: 12, meridiem: "pm" },
  { hour: 1, meridiem: "pm" },
  { hour: 2, meridiem: "pm" },
  { hour: 3, meridiem: "pm" },
  { hour: 4, meridiem: "pm" },
  { hour: 5, meridiem: "pm" },
  { hour: 6, meridiem: "pm" },
  { hour: 7, meridiem: "pm" },
  { hour: 8, meridiem: "pm" },
  { hour: 9, meridiem: "pm" },
  { hour: 10, meridiem: "pm" },
  { hour: 11, meridiem: "pm" },
];

const Schedule = (props) => {
  const { date, mentorId } = props.data;
  const closeSchedules = props.closeSchedules;

  const [schedulesArr, setSchedulesArr] = useState([]);

  const fetchingSchedules = useCallback(async () => {
    try {
      const response = await fetch(
        `https://bookacall-f539e-default-rtdb.asia-southeast1.firebasedatabase.app/mentors/${mentorId}/${date}.json`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      const data = await response.json();
      if (!data) {
        setSchedulesArr([]);
        return;
      }
      const keysArr = Object.keys(data);
      const fetchedSchedulesArr = keysArr.map((key) => {
        return data[key];
      });
      setSchedulesArr(fetchedSchedulesArr);
      return;
    } catch (e) {
      alert(e);
    }
  }, [mentorId, date]);

  const updateScheduleArrHandler = (newScheduleObj) => {
    setSchedulesArr((state) => [...state, newScheduleObj]);
  };

  useEffect(() => {
    fetchingSchedules();
  }, [fetchingSchedules]);

  return (
    <div>
      {timings.map((time, index) => {
        const foundDetials = schedulesArr.find((ScheduleObj) => {
          return (
            ScheduleObj.hour === time.hour &&
            ScheduleObj.meridiem === time.meridiem
          );
        });
        return (
          <ScheduleBox
            key={index}
            info={{
              mentorId: mentorId,
              date: date,
              time,
              details: foundDetials ? foundDetials : {},
            }}
            updateScheduleArr={updateScheduleArrHandler}
          />
        );
      })}
      <Button onClick={() => closeSchedules()}>Back</Button>
    </div>
  );
};
export default Schedule;
