
// This line imports custom matchers (extra functions for testing) provided by @testing-library/jest-dom.

import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})