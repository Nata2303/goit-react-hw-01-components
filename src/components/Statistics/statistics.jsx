
import React from "react";
import PropTypes from "prop-types";
import styles from "./statistics.module.css";

const Statistics = ({ title, stats }) => {
  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const statItems = [
    { label: ".docx", percentage: "4%" },
    { label: ".mp3", percentage: "14%" },
    { label: ".pdf", percentage: "41%" },
    { label: ".mp4", percentage: "12%" },
  ];

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {statItems.map((stat, index) => (
          <li
            className={styles.item}
            key={index}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
