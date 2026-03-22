import { getInput, setOutput } from '@actions/core'
import { run } from './wait'

async function main(): Promise<void> {
  try {
    // Get inputs
    const token = getInput('token', { required: true })
    const debug = getInput('debug') === 'true'

    if (debug) {
      console.log('Debug mode enabled')
    }

    // Run the main logic
    await run()

    // Set outputs
    setOutput('result', 'success')
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()
