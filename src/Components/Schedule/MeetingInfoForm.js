import styles from "./MeetingInfoForm.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useRef } from "react";

const MeetingInfoForm = (props) => {
  const { details, show, onHide, updateScheduleArr } = props;
  const { hour, meridiem, mentorId, date } = details;

  const nameRef = useRef();
  const reasonRef = useRef();

  const SaveMeetingHandler = async () => {
    const studentName = nameRef.current.value;
    const reason = reasonRef.current.value;
    if (studentName.trim() === "" || reason.trim() === "") {
      alert("Please provide Valid inputs");
      return;
    }
    const meetingInfoObj = {
      hour,
      meridiem,
      studentName,
      reason,
    };
    try {
      const response = await fetch(
        `https://bookacall-f539e-default-rtdb.asia-southeast1.firebasedatabase.app/mentors/${mentorId}/${date}.json`,
        {
          method: "POST",
          body: JSON.stringify(meetingInfoObj),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error(response.status);
      }
      updateScheduleArr(meetingInfoObj);
      onHide();
    } catch (e) {
      alert(e);
      console(e);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.header}
        >
          Schedule Call
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Your Name
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            ref={nameRef}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Reason of Meeting
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            ref={reasonRef}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={SaveMeetingHandler}>
          Confirm Call
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default MeetingInfoForm;
