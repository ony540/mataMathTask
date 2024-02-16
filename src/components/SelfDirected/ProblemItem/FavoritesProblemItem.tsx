import { Problem } from '@/types/mockDataType'
import StarIcon from '@/assets/icons/star.svg?react'
import {
  InfoList,
  StarButton,
  StyledFavoritesProblemItem,
  TitleButtonContainer
} from '@/components/SelfDirected/ProblemItem/ProblemItemStyle'

interface FavoritesProblemItemProps {
  problem: Problem
  isSelected: boolean
  onClick: React.MouseEventHandler<HTMLLIElement>
  onKeyDown: (e: React.KeyboardEvent<HTMLLIElement>) => void
}

const FavoritesProblemItem = ({
  problem,
  isSelected,
  onClick,
  onKeyDown
}: FavoritesProblemItemProps) => {
  const { name, difficult, questionUrl, type } = problem
  return (
    <StyledFavoritesProblemItem
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
      $isSelected={isSelected}>
      <TitleButtonContainer>
        <h5>{name}</h5>
        <StarButton
          type="button"
          aria-label={`즐겨찾기 버튼`}
          tabIndex={-1}>
          <StarIcon />
        </StarButton>
      </TitleButtonContainer>
      <InfoList>
        <li>{difficult}점</li>
        <li>{type}</li>
      </InfoList>
      <img
        src={questionUrl}
        alt={`${name} 문제 이미지`}
      />
    </StyledFavoritesProblemItem>
  )
}

export default FavoritesProblemItem
