import { Problem } from '@/types/mockDataType'
import XIcon from '@/assets/icons/x.svg?react'
import {
  InfoList,
  StyledProblemItem,
  TitleButtonContainer,
  XButton
} from '@/components/SelfDirected/ProblemItem/ProblemItemStyle'

interface SelectedProblemItemProps {
  problem: Problem
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
const SelectedProblemItem = ({
  problem,
  onClick
}: SelectedProblemItemProps) => {
  const { name, difficult, questionUrl, type } = problem
  return (
    <StyledProblemItem>
      <TitleButtonContainer>
        <h5>{name}</h5>
        <XButton
          type="button"
          aria-label="선택 해제 버튼"
          onClick={onClick}>
          <XIcon />
        </XButton>
      </TitleButtonContainer>
      <InfoList>
        <li>{difficult}점</li>
        <li>{type}</li>
      </InfoList>
      <img
        src={questionUrl}
        alt={`${name} 문제 이미지`}
      />
    </StyledProblemItem>
  )
}

export default SelectedProblemItem
