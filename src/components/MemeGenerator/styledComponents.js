// Style your components here

import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
`

export const Heading = styled.h1`
  font-size: 24px;
`

export const FormAndMemeContainer = styled.div`
  display: flex;
`

export const MemeContainer = styled.div`
  display: flex;
  background-image: url(${props => props.backgroundImage});
`

export const TextContent = styled.p`
  font-size: ${props => props.activeFontSizeId}px;
`

export const MemeGeneratorForm = styled.form`
  display: flex;
`

export const CustomLabel = styled.label`
  font-size: 12px;
`

export const CustomInput = styled.input`
  background-color: #ffffff;
`

export const CustomSelect = styled.select`
  background-color: #ffffff;
`

export const CustomOption = styled.option`
  font-size: 16px;
`

export const GenerateButton = styled.button`
  color: #ffffff;
`
