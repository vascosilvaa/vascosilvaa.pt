import styled from 'styled-components'

const StyledHeader = styled.div`
  background: #7474BF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: white;
  text-align: center;
`
const StyledHeaderTitle = styled.div`
  font-weight: 500;
  font-size: 60px;
  line-height: 50px;
  letter-spacing: 5px;
  padding: 120px 0;
`
const StyledHeaderSubtitle = styled.div`
 font-weight: 300;
 margin-top:10px;
 font-size: 25px;
 letter-spacing: 2px;
`
export { StyledHeader, StyledHeaderTitle, StyledHeaderSubtitle }