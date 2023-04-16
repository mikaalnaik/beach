import { matchBeachName } from "./index"




describe('matchBeachname', () => {
  it('returns for a bunch on hanlans', () => {
    const got = matchBeachName('hanlans')
    expect(got).toEqual(3)
  })

  it('returns for center', () => {
    const got = matchBeachName('centre')
    expect(got).toEqual(5)
  })
  it('returns for center island', () => {
    const got = matchBeachName('centre')
    expect(got).toEqual(5)
  })
  
  
})