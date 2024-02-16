const loadMockData = async () => {
  const mockData = await fetch('/mockData.json')
    .then(response => response.json())
    .catch(error => {
      console.error('LOADER 에러:', error)
      throw error
    })

  return mockData.data
}

export default loadMockData
