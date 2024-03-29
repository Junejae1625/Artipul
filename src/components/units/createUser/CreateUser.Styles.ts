import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px 10px;
  position: relative;
  > div {
    max-width: 440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`
export const Header = styled.h1`
  font-size: 1.563rem;
  padding-bottom: 20px;
`
export const InputButtonBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`
export const InputBox = styled.div`
  width: 100%;
`
export const Count = styled.span`
  font-size: 0.9rem;
  color: darkgrey;
`
export const SubmitButtonBox = styled.div`
  width: 50%;
  padding-top: 60px;
`
