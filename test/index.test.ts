import { wait } from '../src/wait'

describe('GitHub Action Template', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should wait for specified milliseconds', async () => {
    const callback = jest.fn()
    
    setTimeout(callback, 1000)
    
    jest.runAllTimers()
    
    expect(callback).toHaveBeenCalled()
  })

  it('should resolve after waiting', async () => {
    const promise = wait(1000)
    jest.runAllTimers()
    await promise
  })
})
