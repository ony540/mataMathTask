import styled from 'styled-components'
import SELECTBOX_TEXT from '@/constants/selectBoxText'
import FavoritesProblemItem from '@/components/SelfDirected/ProblemItem/FavoritesProblemItem'
import { SORT_TEXT } from '@/constants/sortText'
import SortBox from '@/components/common/SortBox'
import SelectBox from '@/components/common/SelectBox'
import { MockDataType, Problem } from '@/types/mockDataType'

interface FavoritesProblemListProps {
  data: MockDataType
  selectedProblems: Problem[]
  setSelectedProblems: React.Dispatch<React.SetStateAction<Problem[]>>
}

const FavoritesProblemList = ({
  data,
  selectedProblems,
  setSelectedProblems
}: FavoritesProblemListProps) => {
  const { totalCount, list } = data

  const handleClickProblem = (problem: Problem) => {
    setSelectedProblems(prev =>
      prev.includes(problem)
        ? prev.filter(item => item.questionId !== problem.questionId)
        : [...prev, problem]
    )
  }

  return (
    <div>
      <div>
        <h3 className="a11y-hidden">즐겨찾기 문제 목록</h3>
        <h4 className="a11y-hidden">범위 선택 SelectBox</h4>
        <SelectBox data={SELECTBOX_TEXT.LEARNING_SCOPE} />
        <SelectBox data={SELECTBOX_TEXT.CHAPTER} />
      </div>
      <CountSortContainer>
        <p>총 {totalCount}개</p>
        <div>
          {SORT_TEXT.map((item, index) => (
            <SortBox
              sortValue={item}
              key={index}
            />
          ))}
        </div>
      </CountSortContainer>
      <h4 className="a11y-hidden">문제 목록</h4>
      <ProblemList>
        {list.map(problem => (
          <FavoritesProblemItem
            key={problem.questionId}
            problem={problem}
            onClick={() => handleClickProblem(problem)}
            isSelected={selectedProblems.includes(problem)}
          />
        ))}
      </ProblemList>
    </div>
  )
}

export default FavoritesProblemList

const CountSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.2rem 0 1.2rem;

  @media (max-width: 680px) {
    flex-direction: column;
    gap: 1rem;
    align-items: first baseline;
  }

  button {
    flex-shrink: 0;
  }
`

const ProblemList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  height: calc(100vh - 35.6rem - 70px);
  overflow-y: scroll;
  padding-right: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`
