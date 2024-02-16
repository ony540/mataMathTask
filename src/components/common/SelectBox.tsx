import { useState } from 'react'
import styled from 'styled-components'
import { SelectBoxType } from '@/constants/selectBoxText'
import ArrowIcon from '@/assets/icons/arrow.svg?react'

const SelectBox = ({ data }: { data: SelectBoxType }) => {
  const [selectedOption, setSelectedOption] = useState<string>('전체')
  const [isShowOptions, setShowOptions] = useState<boolean>(false)

  const handleOnChangeSelectValue = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { innerText } = e.target as HTMLElement
    setSelectedOption(innerText)
  }

  return (
    <SelectBoxContainer>
      <h5>{data.title}</h5>
      <StyledSelectBox
        onClick={() => setShowOptions(prev => !prev)}
        $isShowOptions={isShowOptions}>
        <label>{selectedOption}</label>
        <ArrowIcon />
        <SelectOptions
          aria-haspopup="true"
          aria-expanded={isShowOptions}
          $isShowOptions={isShowOptions}>
          {data.options.map((option, index) => (
            <Option
              key={index}
              role="option">
              <button
                aria-label={`${option} 선택 버튼`}
                type="button"
                onClick={handleOnChangeSelectValue}>
                {option}
              </button>
            </Option>
          ))}
        </SelectOptions>
      </StyledSelectBox>
    </SelectBoxContainer>
  )
}

export default SelectBox

const SelectBoxContainer = styled.div`
  display: inline-block;
  width: calc(50% - 2rem);

  &:first-of-type {
    margin-right: 4rem;
  }

  h5 {
    margin-bottom: 0.8rem;
  }
`

const StyledSelectBox = styled.div<{ $isShowOptions: boolean }>`
  position: relative;
  padding: 0 2.2rem;
  border-radius: 8px;
  font-size: ${p => p.theme.fontSize.base};
  border: 1px solid ${p => p.theme.color.gray400};
  cursor: pointer;
  line-height: 6.2rem;

  label {
    position: relative;
    top: 0.2rem;
  }
  svg {
    position: absolute;
    top: 50%;
    right: 1.2rem;
    transform: ${p =>
      p.$isShowOptions
        ? 'translate3d(0, -50%, 0) rotate(180deg)'
        : 'translate3d(0, -50%, 0)'};
  }
`

const SelectOptions = styled.ul<{ $isShowOptions: boolean }>`
  position: absolute;
  top: 7rem;
  left: 0;
  width: 100%;
  display: ${p => (p.$isShowOptions ? '' : 'none')};
  border: 1px solid ${p => p.theme.color.gray400};
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
`
const Option = styled.li`
  button {
    text-align: left;
    width: 100%;
    padding: 4px 2.2rem;
    transition: background-color 0.2s ease-in;

    &:hover {
      background-color: ${p => p.theme.color.yellow100};
    }
  }
`
