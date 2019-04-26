const { checkQualificationStatus } = require('../index')

describe('Check Qualification Status', () => {

  it('should return not-qualified all null',  () => {
    const result = checkQualificationStatus(null, null, 'Y')
    expect(result).toEqual('not-qualified')
  })

  it('should return not-qualified invalid port',  () => {
    const result = checkQualificationStatus('0', null, 'Y')
    expect(result).toEqual('not-qualified')
  })

  it('should return not-qualified invalid speed',  () => {
    const result = checkQualificationStatus(null, 0, 'Y')
    expect(result).toEqual('not-qualified')
  })

  it('should return not-qualified invalid disqualifedFlag',  () => {
    const result = checkQualificationStatus(null, null, 'N')
    expect(result).toEqual('not-qualified')
  })

  it('should return not-qualified valid port but invalid others',  () => {
    const result = checkQualificationStatus('12/23/34', null, 'Y')
    expect(result).toEqual('not-qualified')
  })

  it('should return not-qualified valid speed but invalid others',  () => {
    const result = checkQualificationStatus(null, 10, 'Y')
    expect(result).toEqual('not-qualified')
  })

  it('should return not-qualified valid disqualifedFlag but invalid others',  () => {
    const result = checkQualificationStatus(null, null, 'Y')
    expect(result).toEqual('not-qualified')
  })

  it('should return qualified valid all',  () => {
    const result = checkQualificationStatus('12/23/34', 10, 'N')
    expect(result).toEqual('qualified')
  })

  it('should return not-qualified if disqualifiedFlag is null',  () => {
    const result = checkQualificationStatus('12/23/34', 10, null)
    expect(result).toEqual('not-qualified')
  })
})