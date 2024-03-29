import { Pagination } from 'antd'
import * as L from './likePage.Styles'
export default function LikePagePresenter(props) {
  const head = `https://storage.googleapis.com`

  return (
    <>
      <L.Wrapper>
        <L.Header>내가 찜한 작품들</L.Header>
        <L.MapWrapper>
          {props.data?.fetchLikeArt.map((el) => (
            <L.MapDiv key={el.id}>
              <L.MapElImageDiv>
                <L.MapElImage src={`${head}${el.thumbnail}`} />
              </L.MapElImageDiv>
              <L.MapDeadLine>{el.deadline.slice(0, 16)}</L.MapDeadLine>
              <L.MapElCategory>{el.tag1}</L.MapElCategory>
              <L.MapElTitle>{el.title}</L.MapElTitle>
              <L.MapElArtist>{el.user.name}</L.MapElArtist>
            </L.MapDiv>
          ))}
        </L.MapWrapper>
        <L.PagiDiv>
          <Pagination
            current={props.current}
            total={props.fetchLikeArtCount?.fetchLikeArtCount}
            onChange={props.onChange}
          />
        </L.PagiDiv>
      </L.Wrapper>
    </>
  )
}
