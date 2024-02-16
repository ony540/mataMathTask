import { useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import Tabs from '@/components/common/Tabs'
import { useState } from 'react'
import { MockDataType, Problem } from '@/types/mockDataType'
import SelectedProblemList from '@/components/SelfDirected/SelectedProblemList'
import FavoritesProblemList from '@/components/SelfDirected/FavoritesProblemList'

const SelfDirectedPage = () => {
  const favoritesProblems = useLoaderData() as MockDataType
  const [currentTab, setCurrentTab] = useState<string>('즐겨찾기')
  const [selectedProblems, setSelectedProblems] = useState<Problem[]>([])

  return (
    <Wrapper>
      <MainHeader>자기주도 학습</MainHeader>
      <Tabs
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      {currentTab === '즐겨찾기' && (
        <MainBox>
          <FavoritesProblemList
            data={favoritesProblems}
            selectedProblems={selectedProblems}
            setSelectedProblems={setSelectedProblems}
          />
          <SelectedProblemList
            selectedProblems={selectedProblems}
            setSelectedProblems={setSelectedProblems}
          />
        </MainBox>
      )}
    </Wrapper>
  )
}

export default SelfDirectedPage

const Wrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
`

const MainHeader = styled.h1`
  font-size: ${p => p.theme.fontSize.lg};
  font-weight: 700;
  margin-bottom: 20px;
`

const MainBox = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3.6rem;
  margin-top: 4.4rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 3.2rem;
  }
`
