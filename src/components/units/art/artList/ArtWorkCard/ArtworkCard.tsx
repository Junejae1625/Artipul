import * as S from './ArtWorkCardStyled'

export default function ArtWorkCard(props) {
  return (
    <S.ArtWorkCardWrapper
      index={props.index}
      id={props.el.id}
      onClick={props.onClickArtWorkCard}
    >
      <S.ArtWorkImageBox>
        <S.ArtWorkImage className="image" image={props.el.thumbnail} />
      </S.ArtWorkImageBox>
      <S.ArtWorkCardTime>
        입찰중 | {props.el.deadline.slice(2, 16)} 마감
      </S.ArtWorkCardTime>
      <S.ArtWorkCardContent>
        <S.ArtWorkCardSubTitle>{props.el.tag1}</S.ArtWorkCardSubTitle>
        <S.ArtWorkCardTitle>{props.el.title}</S.ArtWorkCardTitle>
        <S.ArtWorkCardContentBottom>
          <S.ArtWorkCardContentBottomTitle>
            작가
          </S.ArtWorkCardContentBottomTitle>
          <S.ArtWorkCardContentBottomSubTitle>
            {props.el.nickname}
          </S.ArtWorkCardContentBottomSubTitle>
        </S.ArtWorkCardContentBottom>
      </S.ArtWorkCardContent>
      <S.ArtWorkCardPriceBox>
        <S.ArtWorkCardPriceSubBox>
          <S.ArtWorkCardNowPriceTitle>즉시구매가</S.ArtWorkCardNowPriceTitle>
          <S.ArtWorkCardNowPrice>
            {props.el.instant_bid
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </S.ArtWorkCardNowPrice>
        </S.ArtWorkCardPriceSubBox>
        <S.ArtWorkCardPriceSubBox>
          <S.ArtWorkCardStartPriceTitle>
            경매시작가
          </S.ArtWorkCardStartPriceTitle>
          <S.ArtWorkCardStartPrice>
            {props.el.start_price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </S.ArtWorkCardStartPrice>
        </S.ArtWorkCardPriceSubBox>
      </S.ArtWorkCardPriceBox>
    </S.ArtWorkCardWrapper>
  )
}
