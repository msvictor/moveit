import { useContext } from "react";
import { ChallangesContext } from "../../hooks/Challenges/context";
import styles from "../../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallangesContext);
  
  return (
    <div className={styles.profileConatiner}>
      <img src="https://github.com/msvictor.png" alt="Victor Gabriel" />
      <div>
        <strong>Victor Gabriel</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          level {level}
        </p>
      </div>
    </div>
  );
}
