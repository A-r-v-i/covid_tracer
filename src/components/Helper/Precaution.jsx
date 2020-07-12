import React from "react";
import { Container, Row, Col } from "reactstrap";
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
            <p>
              Clean your hands often. Use soap and water, or an alcohol-based
              hand rub.
            </p>
          </li>
          <li>
            <p>
              Maintain a safe distance from anyone who is coughing or sneezing.
            </p>
          </li>
          <li>
            <p>Wear a mask when physical distancing is not possible.</p>
          </li>
          <li>
            <p>Don’t touch your eyes, nose or mouth.</p>
          </li>
          <li>
            <p>
              Cover your nose and mouth with your bent elbow or a tissue when
              you cough or sneeze.
            </p>
          </li>
          <li>
            <p>Stay home if you feel unwell.</p>
          </li>
          <li>
            <p>
              If you have a fever, cough and difficulty breathing, seek medical
              attention.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.symbolic}>
        <Container className={styles.symbolicContainer}>
          <Row className={styles.row}>
            <Col className={styles.col} xs="12" sm="4" md="3">
              <img
                src="https://img.icons8.com/doodle/48/000000/wash-your-hands.png"
                alt="handwash"
              />
              <p>Sanitize your hands</p>
            </Col>
            <Col className={styles.col} xs="12" sm="4" md="3">
              <img
                src="https://img.icons8.com/flat_round/50/000000/protection-mask.png"
                alt="mask"
              />
              <p>Wear mask</p>
            </Col>
            <Col className={styles.col} xs="12" sm="4" md="3">
              <img
                src="https://img.icons8.com/bubbles/50/000000/couple-earth-globe.png"
                alt="distance"
              />
              <p>Maintain distance</p>
            </Col>
            <Col className={styles.col} xs="12" sm="4" md="3">
              <img
                src="https://img.icons8.com/fluent/50/000000/trust.png"
                alt="help"
              />
              <p>Help eachothers</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.quotes}>
        <code>This too shall pass</code>
        <br />
        <code>#believe #help</code>
      </div>
    </div>
  );
}
