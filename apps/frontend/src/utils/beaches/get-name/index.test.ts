import { fuzzyMatchBeachNameToID } from "./index"




describe('fuzzyMatchBeachNameToID', () => {
  it('returns for a bunch on hanlans', () => {
    const got = fuzzyMatchBeachNameToID('hanlans')
    expect(got).toEqual(3)
  })

  it('returns for center', () => {
    const got = fuzzyMatchBeachNameToID('centre')
    expect(got).toEqual(5)
  })
  it('returns for center island', () => {
    const got = fuzzyMatchBeachNameToID('centre')
    expect(got).toEqual(5)
  })
  
  it('returns for wards', () => {
    const got = fuzzyMatchBeachNameToID('wards')
    expect(got).toEqual(6)
  })
  it('returns for ward\'s', () => {
    const got = fuzzyMatchBeachNameToID('ward\'s')
    expect(got).toEqual(6)
  })
  it('returns for ward\'s island', () => {
    const got = fuzzyMatchBeachNameToID('ward\'s island')
    expect(got).toEqual(6)
  })
  it('returns for Ward\'s Island', () => {
    const got = fuzzyMatchBeachNameToID('Ward\'s island')
    expect(got).toEqual(6)
  })
  
})