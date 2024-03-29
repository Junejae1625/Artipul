import styled from '@emotion/styled'
import { BreakPoints } from '../../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 50px;
  position: relative;
  > div {
    max-width: 1140px;
    width: 100%;
  }
  @media ${BreakPoints.mobile} {
    padding: 20px 0.5rem;
  }
`
export const Header = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 1.5625rem;
`
export const TableHead = styled.div`
  width: 1140px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: #eeeeee;
  padding: 1rem 0.5rem;
  margin-top: 2.6rem;
`
export const TableHeadMenu = styled.span`
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
`
export const TableRow = styled.div`
  width: 1140px;
  border-bottom: 1px solid #eeeeee;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`
export const TableRowMenu = styled.span`
  text-align: center;
  height: 8rem;
  font-size: 1rem;
  font-weight: 400;
  color: #111111;
  border-right: 1px solid #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TableRowLastMenu = styled.span`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TableRowImg = styled.img`
  width: 70%;
  height: 70%;
`
export const DetailButton = styled.button`
  width: 70%;
  height: 40px;
  margin-left: 10px;
  font-size: 0.9rem;
  background-color: '#eeeeee';
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: #f64612;
    color: white;
  }
`
export const SmallHeadWrapper = styled.div`
  width: 100%;
  padding: 40px 0px;
`
export const TitleAmountSpan = styled.span`
  font-size: 1.575rem;
  color: #f64612;
  padding-right: 2px;
  font-weight: 700;
`
export const SmallHead = styled.div`
  max-width: 1140px;
  width: 100%;
  background-color: #eeeeee;
  font-size: 1.25rem;
  padding: 1.25rem 1.56rem;
  font-weight: 700;
`
export const PagDiv = styled.div`
  padding: 2rem;
`
