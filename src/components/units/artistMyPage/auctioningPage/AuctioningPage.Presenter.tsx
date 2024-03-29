import { Pagination } from 'antd'
import * as A from './AuctioningPage.Styles'
export default function AuctioningPagePresenter(props) {
  const head = `https://storage.googleapis.com`
  return (
    <>
      <A.Wrapper>
        <A.Header>경매중인 작품들</A.Header>
        <A.TableHead>
          <A.TableHeadMenu>작품이미지</A.TableHeadMenu>
          <A.TableHeadMenu>카테고리</A.TableHeadMenu>
          <A.TableHeadMenu>작품제목</A.TableHeadMenu>
          <A.TableHeadMenu>마감일</A.TableHeadMenu>
          <A.TableHeadMenu>즉시 입찰가</A.TableHeadMenu>
          <A.TableHeadMenu>현재 입찰가</A.TableHeadMenu>
          <A.TableHeadMenu>상세보기</A.TableHeadMenu>
        </A.TableHead>
        {props.data?.fetchAuctionArts.map((el) => (
          <A.TableRow key={el.id}>
            <A.TableRowMenu>
              <A.TableRowImg src={`${head}${el.thumbnail}`} />
            </A.TableRowMenu>
            <A.TableRowMenu>{el.tag1}</A.TableRowMenu>
            <A.TableRowMenu>{el.title}</A.TableRowMenu>
            <A.TableRowMenu>{el.deadline.slice(0, 10)}</A.TableRowMenu>
            <A.TableRowMenu>{el.instant_bid}</A.TableRowMenu>
            <A.TableRowMenu>
              {el.price
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </A.TableRowMenu>
            <A.TableRowLastMenu>
              <A.DetailButton onClick={props.onClickDetail(el)}>
                상세보기
              </A.DetailButton>
            </A.TableRowLastMenu>
          </A.TableRow>
        ))}
        <A.PagDiv>
          <Pagination
            current={props.page}
            total={props.fetchAuctionArtsCount?.fetchAuctionArtsCount}
            onChange={props.onChange}
          />
        </A.PagDiv>
      </A.Wrapper>
    </>
  )
}
