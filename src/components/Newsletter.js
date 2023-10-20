import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import cv from"../assets/cv.pdf";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }
// Data atual
var currentDate = new Date();

// Data alvo (05/12/2023)
var targetDate = new Date('2023-10-20');

// Calcula a diferença em milissegundos
var timeDifference = targetDate - currentDate;

// Calcula a diferença em dias
var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

if (daysDifference < 0 ) {
  daysDifference = daysDifference - daysDifference -daysDifference
}

// Exibe o resultado
console.log("Updated in " + daysDifference + " days");

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp" id="newsletter">
          <Row>
            {/* <Col lg={12} md={6} xl={5}> */}
            <div className="divDownload">
              <h3>Click to download my resume</h3>
              <a href={cv} download className="download">Resume</a>
            </div>
              <h4>Updated {
                daysDifference
                } days ago. - 20/10/2023.</h4>
            {/* </Col> */}
            {/* <Col md={6} xl={7}> */}
            <h3>Or request an updated resume!</h3>
              {/* <form onSubmit={handleSubmit}> */}
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <a href={`mailto:lucas.rocha@fecaf.com.br?subject=Atualização de CV&body=Foi solicitada uma atualização do CV, atualizado pela última vez em ${targetDate}`}>
                    <button >Submit</button>
                  </a>
                  {/* <button type="submit">Submit</button> */}
                </div>
              {/* </form> */}
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            {/* </Col> */}
          </Row>
        </div>
      </Col>
  )
}
