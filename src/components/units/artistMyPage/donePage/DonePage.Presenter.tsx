import { Pagination } from 'antd'
import * as D from './DonePage.Styles'
import { IDonePageProps } from './DonePage.Types'

export default function DonePagePresenter(props: IDonePageProps) {
  const head = `https://storage.googleapis.com`

  return (
    <>
      <D.Wrapper>
        <D.Header>거래 완료된 작품들</D.Header>
        <D.SmallHeadWrapper>
          <D.SmallHead>
            {props.data?.fetchProfile.user.nickname} 님의 현재 보유 금액은&nbsp;
            <D.TitleAmountSpan>
              {props.data?.fetchProfile.user.point
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </D.TitleAmountSpan>
            원 입니다
          </D.SmallHead>
        </D.SmallHeadWrapper>
        <D.TableHead>
          <D.TableHeadMenu>작품이미지</D.TableHeadMenu>
          <D.TableHeadMenu>카테고리</D.TableHeadMenu>
          <D.TableHeadMenu>작품제목</D.TableHeadMenu>
          <D.TableHeadMenu>종료일</D.TableHeadMenu>
          <D.TableHeadMenu>판매여부</D.TableHeadMenu>
          <D.TableHeadMenu>가격</D.TableHeadMenu>
        </D.TableHead>
        {props.timeOutData?.fetchTimedOutArt.map((el) => (
          <D.TableRow key={el.id}>
            <D.TableRowMenu>
              <D.TableRowImg src={`${head}${el.thumbnail}`} />
            </D.TableRowMenu>
            <D.TableRowMenu>{el.tag1}</D.TableRowMenu>
            <D.TableRowMenu>{el.title}</D.TableRowMenu>
            <D.TableRowMenu>{el.deadline.slice(0, 10)}</D.TableRowMenu>
            <D.TableRowMenu>
              {el.is_soldout ? '판매완료' : '유찰'}
            </D.TableRowMenu>
            <D.TableRowLastMenu>
              {el.price
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </D.TableRowLastMenu>
          </D.TableRow>
        ))}
        <D.PagDiv>
          <Pagination
            current={props.page}
            total={props.fetchTimedOutArtsCount?.fetchTimedOutArtsCount}
            onChange={props.onChange}
          />
        </D.PagDiv>
      </D.Wrapper>
    </>
  )
}
