import React from 'react'
import Layout from '../../Components/Layout'
import { Container } from 'reactstrap'
import { StyledContent } from "./articleComponents"
import { articles } from '../../Shared/articles';

class Article extends React.Component {
  render() {
    const { id } = this.props.match.params;
    const article = articles.find(article => article.id === parseInt(id, 10));
    return (
      article ?
        <Layout title={article.title} subtitle={article.subtitle}>
          <Container>
            <StyledContent>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </StyledContent>
          </Container>
        </Layout>
        :
        <Layout title={"Erro: 404 not found"} subtitle={"O artigo que está à procura não existe."}>
          <Container>
            <StyledContent>
              <p><strong>O típico 404 not found.</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis auctor semper. In tempor elit leo, eu vestibulum quam molestie sit amet. Morbi eget neque purus. Integer ut aliquet mauris, convallis mattis nisi. Fusce quis orci lacinia, laoreet leo nec, tincidunt felis. Integer ullamcorper convallis ornare. Ut euismod iaculis ultrices.</p>
              <p>Praesent mi velit, sodales vel dapibus ut, facilisis non quam. Proin ullamcorper justo pulvinar velit vulputate, at commodo libero aliquam. Proin luctus elit id ornare luctus. Nulla pharetra leo vitae massa rutrum, sed sodales mauris laoreet. Etiam ultricies, mauris vel vehicula placerat, enim sem feugiat est, et vehicula nulla purus in neque. Curabitur vitae lectus porta, euismod nunc at, cursus urna. Curabitur sodales faucibus justo vel pellentesque. Integer at risus pretium, vulputate massa sed, bibendum dui. Suspendisse tincidunt felis et euismod facilisis. Pellentesque porttitor felis at mauris posuere, et faucibus turpis accumsan. Proin aliquet sodales dui, sed vestibulum velit aliquam id. Vivamus id nibh sed mauris laoreet egestas eu ac purus. Aenean vel nunc vel odio consequat aliquet. In ut lacinia ante, dignissim vehicula magna.</p>
              <p>Maecenas tristique, lectus eget varius faucibus, urna nibh facilisis velit, eget dignissim libero erat id nibh. Nullam at tortor rhoncus, semper nibh elementum, mollis odio. In non lacus tortor. Fusce eget auctor lacus. Phasellus at massa sed dolor faucibus dignissim. Aliquam eros nisi, pulvinar ut urna quis, tempus dictum tortor. Integer quis quam id est pharetra egestas. Pellentesque tempus eu ligula id elementum. Donec congue nisi ac velit interdum porta. In nec tellus quis ligula eleifend dictum nec vitae arcu.</p>
            </StyledContent>
          </Container>
        </Layout>
    )
  }
}

export default Article
