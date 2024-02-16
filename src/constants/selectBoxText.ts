export interface SelectBoxType {
  title: string
  options: string[]
}

const SELECTBOX_TEXT = Object.freeze({
  LEARNING_SCOPE: {
    title: '학습범위',
    options: ['전체', '학습범위1', '학습범위2']
  },
  CHAPTER: { title: '대단원', options: ['전체', '1단원', '2단원'] }
})

export default SELECTBOX_TEXT
