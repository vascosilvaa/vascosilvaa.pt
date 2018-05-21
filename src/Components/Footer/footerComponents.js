import styled from 'styled-components'

const StyledFooter = styled.div`
  width:100%;
  text-align: center;
  color: #FFF;
  padding: 15px;
  background: #7474BF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #348AC7, #7474BF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #348AC7, #7474BF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const StyledSocial = styled.div`
  font-size: 12px;
  > a { 
    margin: 0 5px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    &:hover {
     font-size:14px;
     color: white;
    text-decoration: none;
    }
  };
  `

export { StyledFooter, StyledSocial }