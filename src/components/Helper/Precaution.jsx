import React from "react";
import {Container, Row, Col} from 'reactstrap';
import styles from "./helper.module.css";
export default function Precaution() {
  return (
    <div className={styles.precautionContainer}>
      <div className={styles.primaryPrecaution}>
        <code>***Precaution is better than Isolation/Ventilators***</code>
        <span className={styles.warningIcon}>
          <img
            src="https://img.icons8.com/color/64/000000/warning-shield.png"
            alt="warning"
          />
        </span>
        <ul className={styles.precautionList}>
          <li>
            Clean your hands often. Use soap and water, or an alcohol-based hand
            rub.
          </li>
          <li>
            Maintain a safe distance from anyone who is coughing or sneezing.
          </li>
          <li>Wear a mask when physical distancing is not possible.</li>
          <li>Don’t touch your eyes, nose or mouth.</li>
          <li>
            Cover your nose and mouth with your bent elbow or a tissue when you
            cough or sneeze.
          </li>
          <li>Stay home if you feel unwell.</li>
          <li>
            If you have a fever, cough and difficulty breathing, seek medical
            attention.
          </li>
        </ul>
      </div>
      <div className={styles.symbolic}>
        <Container>
          <Row>
            <Col xs="6" sm="4" md="3"><img src="https://img.icons8.com/doodle/48/000000/wash-your-hands.png" alt="handwash" /></Col>
            <Col xs="6" sm="4" md="3"><img src="https://img.icons8.com/doodle/48/000000/wash-your-hands.png" alt="handwash" /></Col>
            <Col xs="6" sm="4" md="3"><img src="https://img.icons8.com/doodle/48/000000/wash-your-hands.png" alt="handwash" /></Col>
            <Col xs="6" sm="4" md="3"><img src="https://img.icons8.com/doodle/48/000000/wash-your-hands.png" alt="handwash" /></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
