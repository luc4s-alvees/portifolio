import React from 'react';

export const CourseCard = ({ nome, tipo, plataforma, tecnologia, data_conclusao, horas, certificado }) => {
  return (
    // <div classNameName="course-card">
    //   <h3>{nome}</h3>
    //   <p>Tipo: {tipo}</p>
    //   <p>Plataforma: {plataforma}</p>
    //   <p>Tecnologia: {tecnologia ? tecnologia : "N/A"}</p>
    //   <p>Data de Conclusão: {data_conclusao}</p>
    //   <p>Horas: {horas} horas</p>
    //   <a href={certificado} target="_blank" rel="noopener noreferrer">Certificado</a>
    // </div>
    <div className="container-certificados_card">
    <h3 className="container-certificados_card__title"><img src={certificado} width="150px"/></h3>
    <div className="container-certificados_card__bar">
      <div className="container-certificados_card__emptybar"></div>
      <div className="container-certificados_card__filledbar"></div>
    </div>
    <div className="container-certificados_card__descricao">
      <h4>{nome}</h4>
      <h5>{plataforma}</h5>
      <h6>{data_conclusao}</h6>
    </div>
    </div>
  );
}


