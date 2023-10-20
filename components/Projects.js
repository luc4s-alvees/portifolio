import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/calendarioAcad.png";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import dadosCursos from "../cursos.json"
import { CourseCard } from "./CourseCard";
import "../cursos.css"
import { useState } from "react";

export const Projects = () => {

  const projects = [
    {
      
      description: "Calendário Acadêmico",
      imgUrl: projImg1,
    },
    {
      description: "",
      imgUrl: projImg2,
    },
    {
      description: "",
      imgUrl: projImg3,
    },
    {
      description: "",
      imgUrl: projImg4,
    },
    {
      description: "",
      imgUrl: projImg5,
    },
    {
      description: "",
      imgUrl: projImg6,
    },
  ];
  function buscarCursos(filtro) {
    // Suponhamos que você já tenha o JSON de cursos carregado.
    // Neste exemplo, vamos supor que ele esteja armazenado em uma variável chamada "dadosCursos".
    // Substitua "dadosCursos" pelo nome da variável onde você armazenou os dados reais.
  
    // Verifique se o JSON de cursos está disponível.
    if (!dadosCursos || !dadosCursos.cursos) {
      return [];
    }
  
    // Aplique os filtros
    const cursosFiltrados = dadosCursos.cursos.filter(curso => {
      // Verifica se o campo "nome" existe no filtro e se o nome do curso inclui o filtro (case-insensitive).
      if (filtro.nome && !curso.nome.toLowerCase().includes(filtro.nome.toLowerCase())) {
        return false;
      }
  
      // Verifica se o campo "plataforma" existe no filtro e se a plataforma do curso corresponde ao filtro.
      if (filtro.plataforma && curso.plataforma !== filtro.plataforma) {
        return false;
      }
  
      // Verifica se o campo "tipo" existe no filtro e se o tipo do curso corresponde ao filtro.
      if (filtro.tipo && curso.tipo !== filtro.tipo) {
        return false;
      }
  
      return true;
    });
  
    return cursosFiltrados;
  }
  
  // Exemplo de uso:
  // const filtro = {
  //   nome: "React",
  //   // Você pode deixar campos em branco, nulos ou undefined para não aplicar esse filtro.
  //   plataforma: "Udemy",
  //   tipo: "Frontend"
  // };
  
  // const cursosFiltrados = buscarCursos(filtro);
  
  // Exibe os cursos filtrados
  // console.log(cursosFiltrados);
  // function ordenarPorNome() {
  //   const cursosOrdenados = cursosFiltrados.cursos.sort((a, b) => a.nome.localeCompare(b.nome));
  //   // Atualize seu estado ou renderize a lista de cursos ordenada
  //   console.log(cursosOrdenados)
  // }

  const [cursosFiltrados2, setCursosFiltrados] = useState(dadosCursos.cursos.map((curso, index) => {
    return (
      <CourseCard
        key={index}
        {...curso}
        />
    )
  }),[])
// console.log(`Cursos filtrados`, cursosFiltrados2)


function Frontend(  ) {
  const cursosFrontend = {cursos : dadosCursos.cursos.filter((curso) => curso.tipo == `Frontend`)};
  setCursosFiltrados(cursosFrontend.cursos.map((curso, index) => {
    return (
      <CourseCard
        key={index}
        {...curso}
        />
    )
  }))
}
function Backend(  ) {
  const cursosBackend = {cursos : dadosCursos.cursos.filter((curso) => curso.tipo == `Backend`)};
  setCursosFiltrados(cursosBackend.cursos.map((curso, index) => {
    return (
      <CourseCard
        key={index}
        {...curso}
        />
    )
  }))
}

function Backend(  ) {
  const cursosBackend = {cursos : dadosCursos.cursos.filter((curso) => curso.tipo == `Backend`)};
  setCursosFiltrados(cursosBackend.cursos.map((curso, index) => {
    return (
      <CourseCard
        key={index}
        {...curso}
        />
    )
  }))
}

function Data(  ) {
  const cursosData = {cursos : dadosCursos.cursos.filter((curso) => curso.tipo == `Data`)};
  setCursosFiltrados(cursosData.cursos.map((curso, index) => {
    return (
      <CourseCard
        key={index}
        {...curso}
        />
    )
  }))
}

function Gestao(  ) {
  const cursosGestao = {cursos : dadosCursos.cursos.filter((curso) => curso.tipo == `Gestão`)};
  setCursosFiltrados(cursosGestao.cursos.map((curso, index) => {
    return (
      <CourseCard
        key={index}
        {...curso}
        />
    )
  }))
}

function DevOps(  ) {
  const cursosDevOps = {cursos : dadosCursos.cursos.filter((curso) => curso.tipo == `DevOps`)};
  setCursosFiltrados(cursosDevOps.cursos.map((curso, index) => {
    return (
      <CourseCard
        key={index}
        {...curso}
        />
    )
  }))
}

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I show you to all the big and small websites I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Extracurricular Course</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="third">
                      <Row>
                        

                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="first">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <button className="download" onClick={Frontend}>Frontend</button>
                      <button className="download" onClick={Backend}>Backend</button>
                      <button className="download" onClick={Data}>Data</button>
                      <button className="download" onClick={Gestao}>Gestão</button>
                      <button className="download" onClick={DevOps}>DevOps</button>
                    <div class="container-certificados">
                    {
                         cursosFiltrados2
                        }
                        </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
