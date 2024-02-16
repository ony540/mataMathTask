export interface Problem {
  id: number
  questionId: number
  name: string
  type: string
  difficult: number
  questionUrl: string
  createdAt: string
}

export interface MockDataType {
  totalCount: number
  totalPages: number
  list: Problem[]
}
