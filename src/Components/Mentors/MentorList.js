import Mentor from "./Mentor";
import MainDiv from "../UI/MainDiv";
// import styles from "./MentorList.module.css";
const MentorsArray = [
  {
    id: "m1",
    name: "Muhammad Hamza",
    expertise: "Mathematics",
  },
  {
    id: "m2",
    name: "Usman Gauher Khan",
    expertise: "Science",
  },
  {
    id: "m3",
    name: "Basil Gilani",
    expertise: "Artificial Intelligence",
  },
];

const MentorList = () => {
  return (
    <MainDiv>
      <h1>Available Mentors</h1>
      {MentorsArray.map((mentor, index) => {
        return <Mentor key={index} mentorInfo={mentor} />;
      })}
    </MainDiv>
  );
};
export default MentorList;
