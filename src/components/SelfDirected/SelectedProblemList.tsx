import styled from 'styled-components'
import { Problem } from '@/types/mockDataType'
import SelectedProblemItem from '@/components/SelfDirected/ProblemItem/SelectedProblemItem'
import { useState } from 'react'
import Portal from '@/utils/portal'
import AlertModal from '../common/AlertModal'

interface SelectedProblemListProps {
  selectedProblems: Problem[]
  setSelectedProblems: React.Dispatch<React.SetStateAction<Problem[]>>
}

const SelectedProblemList = ({
  selectedProblems,
  setSelectedProblems
}: SelectedProblemListProps) => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false)

  const handleClickMakeButton = () => {
    setIsModalShow(true)
  }

  const handleClickXButton = (problem: Problem) => {
    setSelectedProblems(prev =>
      prev.filter(item => item.questionId !== problem.questionId)
    )
  }

  return (
    <StyledSelectedProblemList>
      <InfoContainer>
        <h3>선택한 문제 목록</h3>
        <div>
          <p>문제 수 {selectedProblems.length}개</p>
          <StyledButton
            type="button"
            aria-label={`학습지 만들기 버튼`}
            onClick={handleClickMakeButton}
            disabled={!selectedProblems.length}>
            학습지 만들기
          </StyledButton>
        </div>
      </InfoContainer>
      {selectedProblems.length ? (
        <ProblemList>
          {selectedProblems.map(problem => (
            <SelectedProblemItem
              key={problem.questionId}
              problem={problem}
              onClick={() => handleClickXButton(problem)}
            />
          ))}
        </ProblemList>
      ) : (
        <Notice>문제를 선택해주세요.</Notice>
      )}
      {isModalShow && (
        <Portal>
          <AlertModal
            text={`선택된 문제의 ID는 ${selectedProblems.map(item => item.questionId)} 입니다!`}
            closeModal={() => setIsModalShow(false)}
          />
        </Portal>
      )}
    </StyledSelectedProblemList>
  )
}

export default SelectedProblemList

const StyledSelectedProblemList = styled.section`
  border-radius: 8px;
  padding: 2.4rem;
  background-color: ${p => p.theme.color.gray100};
  font-size: ${p => p.theme.fontSize.base};
`

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: first baseline;
    gap: 1.6rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-shrink: 0;

    @media (max-width: 820px) {
      width: 100%;
      justify-content: space-between;
    }
  }

  h3 {
    color: ${p => p.theme.color.gray700};
    font-weight: 500;
    flex-shrink: 0;
  }

  p {
    font-size: ${p => p.theme.fontSize.xs};
    color: ${p => p.theme.color.black};
  }
`

const StyledButton = styled.button`
  background-color: ${p => p.theme.color.yellow100};
  font-weight: 500;
  line-height: 1;
  padding: 1.6rem;
  border-radius: 8px;

  &:disabled {
    cursor: default;
  }
`
const Notice = styled.p`
  height: calc(100vh - 85px - 28.4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.color.gray700};
`

const ProblemList = styled.ul`
  overflow-y: scroll;
  height: calc(100vh - 85px - 28.4rem);

  li {
    margin-bottom: 1.6rem;
  }
`
