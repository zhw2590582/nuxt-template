// tests/unit/utils.test.ts
import { describe, expect, it } from 'vitest'
import { sharedUtility } from '../../shared/utils/index'

describe('utils', () => {
  it('sharedUtility returns correct string', () => {
    const result = sharedUtility('Vitest')
    expect(result).toBe('Hello from shared utility: Vitest')
  })
})
