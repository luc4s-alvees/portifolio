  import { useState, useEffect } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  // import headerImg from "../assets/img/lucas.png";
  import headerImg from "../assets/img/0032_Col_IMG_3763 (1).png";
  import { ArrowRightCircle } from 'react-bootstrap-icons';
  import 'animate.css';
  import TrackVisibility from 'react-on-screen';
  import aesthetic from "../assets/img/aesthetic.png"
  import elegance from "../assets/img/elegance.png"
  import performance from "../assets/img/performance.png"
  import modern from "../assets/img/modern.png"

  export const Inicio = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Fullstack Developer" ];
    const period = 2000;

    

    // useEffect(() => {
    //   let ticker = setInterval(() => {
    //     tick();
    //   }, delta);

    //   return () => { clearInterval(ticker) };
    // }, [text])

    // const tick = () => {
    //   let i = loopNum % toRotate.length;
    //   let fullText = toRotate[i];
    //   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    //   setText(updatedText);

    //   if (isDeleting) {
    //     setDelta(prevDelta => prevDelta / 2);
    //   }

    //   if (!isDeleting && updatedText === fullText) {
    //     setIsDeleting(true);
    //     setIndex(prevIndex => prevIndex - 1);
    //     setDelta(period);
    //   } else if (isDeleting && updatedText === '') {
    //     setIsDeleting(false);
    //     setLoopNum(loopNum + 1);
    //     setIndex(1);
    //     setDelta(500);
    //   } else {
    //     setIndex(prevIndex => prevIndex + 1);
    //   }
    // }
    const modernity = <div className="glitch-wrapper">
    <div className="glitch" data-text="Glitch Text">Glitch Text</div>
 </div>;
    const phrases = ["Aesthetic", "Performance", "Elegance", "Modernity"];
    const images = [
      aesthetic, performance, elegance, modern];
    let currentIndex = 0;
    
    function updateBanner() {
      
      document.getElementById("bannerText").textContent = phrases[currentIndex];

        const textElement = document.getElementById("bannerText");
        const imageElement = document.getElementById("bannerImage");
        imageElement.style.opacity = 0;
        textElement.style.opacity = 0;
        
        // setTimeout(() => {
            textElement.textContent = phrases[currentIndex];
            imageElement.src = images[currentIndex];
            imageElement.style.opacity = 1;
            textElement.style.opacity = 1;
        // }, 300);
    
        currentIndex = (currentIndex + 1) % phrases.length;
    }
    
    setInterval(updateBanner, 3000);
  //   updateBanner();
    
    return (
      <section className=" bodyInicio" id="inicio">
        {/* <Container> */}
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>   
              <TrackVisibility>
                {({ isVisible }) =>

                
                  <div className="bannerInicio">
                
                <div className="textInicio">
                    <h1>What do you expect from a website?</h1>
                    <p id="bannerText">Aesthetic</p>
                </div>
                
                <div className="imageInicio">
                  <div className="fundoImg">
                    <img id="bannerImage" src={aesthetic} alt="Banner Image"/>
                    </div>
                </div>
              </div>
                }
              </TrackVisibility>
            </Col>
          </Row>
        {/* </Container> */}
      </section>
    )
  }
