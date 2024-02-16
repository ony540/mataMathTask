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
}

const FavoritesProblemItem = ({
  problem,
  isSelected,
  onClick
}: FavoritesProblemItemProps) => {
  const { name, difficult, questionUrl, type } = problem
  return (
    <StyledFavoritesProblemItem
      onClick={onClick}
      $isSelected={isSelected}>
      <TitleButtonContainer>
        <h5>{name}</h5>
        <StarButton
          type="button"
          aria-label={`즐겨찾기 버튼`}>
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
