import styled from 'styled-components'

const StyledText = styled.div`
  color: #8d8d8d;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  line-height: 31px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  text-transform: none;
  padding: 35px;
  margin-bottom: 40px;
`

const StyledImage = styled.img`
  border-radius: 50%;
  height:120px;
  width: 120px;
  object-fit: cover;
`

const StyledStrong = styled.span`
  font-weight: 700;
  color: #5385C1;
`

const StyledTitle = styled.span`
  font-weight: 700;
  font-size: 28px;
  color: #5385C1;
`

const StyledExperienceTitle = styled.div`
font-size: 18px;
font-weight:500;
color: #5385C1;
`

const StyledExperienceSubtitle = styled.div`
font-size: 16px;
`

export { StyledText, StyledImage, StyledStrong, StyledTitle, StyledExperienceTitle, StyledExperienceSubtitle }