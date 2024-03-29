import styled from 'styled-components'
import SELECTBOX_TEXT from '@/constants/selectBoxText'
import FavoritesProblemItem from '@/components/SelfDirected/ProblemItem/FavoritesProblemItem'
import { SORT_TEXT } from '@/constants/sortText'
import SortBox from '@/components/common/SortBox'
import SelectBox from '@/components/common/SelectBox'
import { MockDataType, Problem } from '@/types/mockDataType'
import useDetectScrollbar from '@/hooks/useDetectScrollbar'
import { useEffect } from 'react'

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
  const { containerRef, isHasScrollbar, detectScrollbar } = useDetectScrollbar()

  useEffect(() => {
    detectScrollbar()
  }, [])

  const handleSelectProblem = (problem: Problem) => {
    setSelectedProblems(prev =>
      prev.includes(problem)
        ? prev.filter(item => item.questionId !== problem.questionId)
        : [...prev, problem]
    )
  }

  const handleKeyDownSelected = (
    e: React.KeyboardEvent<HTMLLIElement>,
    problem: Problem
  ) => {
    if (e.key === 'Enter') {
      handleSelectProblem(problem)
    }
  }

  return (
    <div>
      <h3 className="a11y-hidden">즐겨찾기 문제 목록</h3>
      <h4 className="a11y-hidden">범위 선택 드롭다운</h4>
      <div>
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
      <ProblemList
        ref={containerRef}
        $isHasScrollbar={isHasScrollbar}>
        {list.map(problem => (
          <FavoritesProblemItem
            key={problem.questionId}
            problem={problem}
            onClick={() => handleSelectProblem(problem)}
            onKeyDown={(e: React.KeyboardEvent<HTMLLIElement>) =>
              handleKeyDownSelected(e, problem)
            }
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

const ProblemList = styled.ul<{ $isHasScrollbar: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  height: calc(100vh - 35.6rem - 70px);
  overflow-y: auto;
  padding-right: ${p => p.$isHasScrollbar && '1rem'};

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`
