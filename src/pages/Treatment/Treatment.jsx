import React from 'react'
import "./Treatment.css"
import { Col, Container, Row } from "react-bootstrap"
import { CardComponent } from '../../Components/Card/Card'
import implante from '../../assets/implante.jpg'
import implante1 from '../../assets/implante1.jpg'
import implante2 from '../../assets/implante2.jpg'
import implante3 from '../../assets/implante3.jpg'
import implante5 from '../../assets/implante5.jpg'

export const Treatment = () => {
    return (
        <>
            
            <div className='r'>
            <Container>
                <Row className='flex-row d-flex container-all-card'>
                    <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={implante1}
                            showButton={true} 
                            title= "Brackets"
                            text="Los brackets son uno de los tratamientos de ortodoncia más utilizados en la actualidad con ciertas ventajas respecto a otros tratamientos..."
                            />
                    </Col>
                    <Col md={6} lg={6} xl={4} xxl={4}className="card-container" >
                        <CardComponent 
                            image={implante3}
                            showButton={true} 
                            title= "Ortodoncia invisible"
                            text="La ortodoncia invisible es un tratamiento compuesto por alineadores transparentes, removibles y fabricados a medida..."
                        />
                    </Col>
                    <Col md={12} lg={12} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={implante5}
                            showButton={true} 
                            title= "Ortodoncia infantil"
                            text="La ortodoncia infantil está dirigida a los niños que desarrollan en su infancia temprana cualquier tipo de afección respiratoria..."
                        />
                    </Col>        
                </Row>
            </Container>
            <Container>
                <Row className='flex-row d-flex container-all-card '>
                    <Col md={6} lg={6} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={implante}
                            showButton={true} 
                            title= "Odontología conservadora"
                            text="Engloba todos aquellos tratamientos orientados a salvar y mantener en la boca los dientes naturales del paciente..."
                            />
                    </Col>
                    <Col md={6} lg={6} xl={4} xxl={4}className="card-container" >
                        <CardComponent 
                            image={implante1}
                            showButton={true} 
                            title= "Periodoncia"
                            text="La Periodoncia es la especialidad de la Odontología encargada del cuidado de las encías, muy importante en caso de tener encías sensibles..."
                        />
                    </Col>
                    <Col md={12} lg={12} xl={4} xxl={4} className="card-container">
                        <CardComponent 
                            image={implante2}
                            showButton={true} 
                            title= "Endodoncia"
                            text="Se trata de desvitalizar el diente, conocido coloquialmente como matar el nervio, siendo un tratatamiento menos agresivo que la periodoncia..."
                        />
                    </Col>        
                </Row>
            </Container>
            </div>
        </>
    )
}