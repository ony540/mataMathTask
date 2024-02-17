import { useRef, useState } from 'react'

type ReturnTypes = {
  containerRef: React.RefObject<HTMLUListElement>
  isHasScrollbar: boolean
  detectScrollbar: () => void
}

const useDetectScrollbar = (): ReturnTypes => {
  const containerRef = useRef<HTMLUListElement>(null)
  const [isHasScrollbar, setIsHasScrollbar] = useState<boolean>(false)

  const detectScrollbar = () => {
    const container = containerRef.current
    if (container) {
      setIsHasScrollbar(container.scrollHeight > container.clientHeight)
    }
  }

  return { containerRef, isHasScrollbar, detectScrollbar }
}

export default useDetectScrollbar
