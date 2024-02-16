import styled from 'styled-components'

export const StyledProblemItem = styled.li`
  background-color: #fff;
  border: 0.2rem solid ${p => p.theme.color.gray300};
  border-radius: 8px;
  padding: 2.4rem;
`
export const StyledFavoritesProblemItem = styled(StyledProblemItem)<{
  $isSelected?: boolean
}>`
  border: ${p =>
    p.$isSelected
      ? `0.2rem solid ${p.theme.color.orange}`
      : `0.2rem solid ${p.theme.color.gray300}`};
  cursor: pointer;
`
export const TitleButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.2rem;
  border-bottom: 0.2rem solid ${p => p.theme.color.gray200};
`

export const StarButton = styled.button`
  background-color: ${p => p.theme.color.yellow100};
  padding: 8px;
  border-radius: 4px;

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`
export const XButton = styled.button`
  svg {
    width: 3rem;
    height: 3rem;
  }
`
export const InfoList = styled.ul`
  margin: 2.6rem 0 1.6rem;

  li {
    line-height: 1;
    display: inline-block;
    padding: 0.6rem 0.8rem 0.4rem 0.8rem;
    border-radius: 0.4rem;
    background-color: ${p => p.theme.color.gray200};
    color: ${p => p.theme.color.gray700};

    &:first-child {
      background-color: ${p => p.theme.color.skyblue};
      margin-right: 0.8rem;
    }
  }
`
