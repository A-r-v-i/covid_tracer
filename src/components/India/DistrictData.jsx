import React from "react";
import styles from "./statespicker.module.css";

const DistrictData = ({ data, show }) => {
  const table = show ? (
    <div className={styles.table}>
      <table className={styles.district}>
        <thead>
          <tr>
            <th>District</th>
            <th>No. of Cases</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, key) => {
            return (
              <tr key={i.district}>
                <td>{i.district}</td>
                <td>{i.confirmed}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : null;
  return <div>{data ? table : null}</div>;
};

export default DistrictData;
