import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import Layout from '../../Components/Layout'
import { StyledText } from './homeComponents';
import ArticleCard from '../../Components/ArticleCard'
import { articles } from '../../Shared/articles'
class Home extends Component {
  render() {
    return (
      <Layout title="VASCO SILVA" subtitle="O meu blog">
        <Container>
          <StyledText>
            Olá! Eu sou um fã de javascript que vive em Portugal.
            Tenho especial gosto pela àrea de desenvolvimento Frontend, contudo, tenho experiência em todo o processo de desenvolvimento web.
            Convido-o a acompanhar alguns dos meus últimos artigos:
        </StyledText>
          <Row className="mt-5 mb-5">
            {articles.map(article =>
              <Col md="4">
                <ArticleCard id="1" title={article.title} subtitle={article.description} img={article.img} />
              </Col>
            )}
          </Row>
        </Container>

      </Layout>
    );
  }
}

export default Home;
