import { useState } from 'react'
import styled from 'styled-components'
import ArrowIcon from '@/assets/icons/arrow.svg?react'

const SortBox = ({ sortValue }: { sortValue: string }) => {
  const [isAscending, setIsAscending] = useState<boolean>(true)

  return (
    <SortBoxButton
      type="button"
      aria-label={`${sortValue} 정렬 버튼`}
      onClick={() => setIsAscending(prevIsAscending => !prevIsAscending)}
      $isAscending={isAscending}>
      {sortValue}
      <ArrowIcon />
    </SortBoxButton>
  )
}

export default SortBox

const SortBoxButton = styled.button<{ $isAscending: boolean }>`
  font-size: ${p => p.theme.fontSize.base};
  color: ${p => p.theme.color.gray700};

  &:first-child {
    margin-right: 2rem;
  }

  svg {
    margin-left: 0.8rem;
    transform: ${p => (p.$isAscending ? '' : 'rotate(180deg)')};

    path {
      stroke: ${p => p.theme.color.gray700};
    }
  }
`
