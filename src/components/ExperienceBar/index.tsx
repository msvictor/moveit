import { useContext } from "react";
import { ChallangesContext } from "../../hooks/Challenges/context";
import styles from "../../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, expirienceToNextLevel } = useContext(
    ChallangesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / expirienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{expirienceToNextLevel} xp</span>
    </header>
  );
}
