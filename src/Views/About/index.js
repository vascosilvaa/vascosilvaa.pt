import React from 'react'
import Layout from '../../Components/Layout'
import { Progress, Row, Col, Container } from 'reactstrap';
import './index.css';
import { StyledText, StyledImage, StyledStrong, StyledTitle, StyledExperienceTitle, StyledExperienceSubtitle } from './aboutComponents'

class About extends React.Component {
  render() {
    return (
      <Layout title="VASCO SILVA" subtitle="Competências e percurso académico/profissional">
        <div className="w-100 text-center mt-5">
          <Container>
            <StyledImage src="https://scontent.fopo2-1.fna.fbcdn.net/v/t31.0-8/20901739_1742639349084085_786414273944527815_o.jpg?_nc_cat=0&oh=7576a1e612a10af697d10fefd1a162cd&oe=5B91BD1A" />
            <StyledText>
              Vasco Silva, 22 anos, natural de Vila Nova de Gaia, no Porto.
          <br />
              <StyledStrong>Licenciatura:</StyledStrong> Novas Tecnologias da Comunicação, Universidade de Aveiro
          <br />
              <StyledStrong>Mestrado:</StyledStrong> Comunicação Multimédia - Multimédia Interativa
        </StyledText>
            <StyledTitle>Tecnologias:</StyledTitle>
            <Row className="mt-5 mb-5 pb-5">
              <Col md="6">
                <div className="text-left mb-1">HTML5</div>
                <Progress value={95} className="mb-4" />
                <div className="text-left mb-1">CSS3</div>
                <Progress value={90} className="mb-4" />
                <div className="text-left mb-1">Javascript</div>
                <Progress value={85} className="mb-4" />
                <div className="text-left mb-1">PHP/Laravel</div>
                <Progress value={60} className="mb-4" />
                <div className="text-left mb-1">MySQL</div>
                <Progress value={60} className="mb-4" />
                <div className="text-left mb-1">Styled Components</div>
                <Progress value={80} className="mb-4" />
                <div className="text-left mb-1">GraphQL</div>
                <Progress value={55} className="mb-4" />
              </Col>
              <Col md="6">
                <div className="text-left mb-1">React.js</div>
                <Progress value={80} className="mb-4" />
                <div className="text-left mb-1">Next.js</div>
                <Progress value={65} className="mb-4" />
                <div className="text-left mb-1">React Native</div>
                <Progress value={75} className="mb-4" />
                <div className="text-left mb-1">Angular</div>
                <Progress value={70} className="mb-4" />
                <div className="text-left mb-1">Bootstrap 4</div>
                <Progress value={95} className="mb-4" />
                <div className="text-left mb-1">Node.js</div>
                <Progress value={55} className="mb-4" />
                <div className="text-left mb-1">Design UI&UX</div>
                <Progress value={75} className="mb-4" />
              </Col>
            </Row>
            <StyledTitle>Experiência Profissional:</StyledTitle>
            <Row className="mt-5 mb-4">
              <Col md="12" className="mb-4">
                <StyledExperienceTitle>RTP - Rádio Televisão Portuguesa</StyledExperienceTitle>
                <StyledExperienceSubtitle>Estágio Curricular - Técnico de Eletrónica e Telecomunicações</StyledExperienceSubtitle>
              </Col>
              <Col md="12" className="mb-4">
                <StyledExperienceTitle>Glintt</StyledExperienceTitle>
                <StyledExperienceSubtitle>Frontend Developer</StyledExperienceSubtitle>
              </Col>
              <Col md="12" className="mb-4">
                <StyledExperienceTitle>Bevolun.com - Parceria com Cáritas e Santa Casa da Misericordia de Aveiro</StyledExperienceTitle>
                <StyledExperienceSubtitle>Full Stack Web Developer</StyledExperienceSubtitle>
              </Col>
              <Col md="12" className="mb-4">
                <StyledExperienceTitle>bia.pt</StyledExperienceTitle>
                <StyledExperienceSubtitle>Frontend Developer</StyledExperienceSubtitle>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default About

