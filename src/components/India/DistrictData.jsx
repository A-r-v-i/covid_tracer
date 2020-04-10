import React from "react";
import styles from "./statespicker.module.css";

const DistrictData = ({ data, show }) => {
  //console.log(data);
  const sortedData = data.sort(function (a, b) {
    return b.confirmed - a.confirmed;
  });
  let temp = 0;
  const total = sortedData.map((tot) => {
    temp = tot.confirmed + temp;
    return temp;
  });
  const totConfirmed = total[total.length-1];
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
          {sortedData.map((i, key) => {
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
  return (
  <div>
  {totConfirmed ? 
  (<h5>
    Total active cases in :{totConfirmed}
  </h5>) : null}
  {data ? table : null}</div>
  );
};

export default DistrictData;
