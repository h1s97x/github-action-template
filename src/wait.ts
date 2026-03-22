import { setFailed, info } from '@actions/core'

/**
 * Waits for a specified number of milliseconds
 */
export async function wait(milliseconds: number): Promise<void> {
  return new Promise((resolve) => {
    info(`Waiting ${milliseconds}ms...`)
    setTimeout(resolve, milliseconds)
  })
}

/**
 * Main execution function
 */
export async function run(): Promise<void> {
  try {
    const milliseconds = 1000
    info('Starting GitHub Action Template...')
    await wait(milliseconds)
    info('Action completed successfully!')
  } catch (error) {
    setFailed(`Action failed: ${error}`)
  }
}
