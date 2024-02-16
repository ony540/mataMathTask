import styled from 'styled-components'
import { TABS_TEXT } from '@/constants/tabsText'

interface TabsProps {
  currentTab: string
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>
}
const Tabs = ({ currentTab, setCurrentTab }: TabsProps) => {
  
  const handleClickTab = (tab: string) => {
    setCurrentTab(tab)
  }

  return (
    <StyledTabs>
      <ul>
        <li>
          {TABS_TEXT.map((tab, index) => (
            <StyledTab
              key={index}
              type="button"
              aria-label={`${tab} 탭으로 이동 버튼`}
              onClick={() => handleClickTab(tab)}
              className={tab === currentTab ? 'selected' : undefined}>
              {tab}
            </StyledTab>
          ))}
        </li>
      </ul>
    </StyledTabs>
  )
}

export default Tabs

const StyledTabs = styled.nav`
  border-bottom: 1px solid ${p => p.theme.color.gray200};
  li {
    height: 6.4rem;
  }
`

const StyledTab = styled.button`
  font-size: ${p => p.theme.fontSize.md};
  color: ${p => p.theme.color.gray500};
  font-weight: 500;
  height: 100%;
  width: 148px;

  &.selected {
    color: ${p => p.theme.color.yellow200};
    border-bottom: 2px solid ${p => p.theme.color.yellow200};
  }
`
