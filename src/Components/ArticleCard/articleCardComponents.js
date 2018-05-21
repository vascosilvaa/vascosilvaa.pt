import styled from 'styled-components'

const StyledCard = styled.div`
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 0px 10px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);
    text-decoration: none;
  }
`

const StyledCardImage = styled.div`
  background: url(${props => props.img});
  height: 200px;
  background-size: cover;
`
const StyledCardDescription = styled.div`
    padding: 30px 20px;
    text-align:center;
`
const StyledCardTitle = styled.div`
    font-size: 15px;
    line-height: 22px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #222222;
`

const StyledCardSubtitle = styled.div`
    color: #8d8d8d;
    font-size: 14px;
    line-height: 25px;
    font-style: normal;
    font-weight: 400;
`

const StyledCardSocial = styled.div`
  display: flex;
  margin-top: 30px;
  align-items:center;
  justify-content:center;
  > .fab { 
    color: #8d8d8d;
    margin: 0 10px;
    &:hover {
     color: #5385C1;
    }
  }; 
`

export { StyledCard, StyledCardImage, StyledCardDescription, StyledCardTitle, StyledCardSubtitle, StyledCardSocial }