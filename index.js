
const isPortsValid = (ports) => {
  let result = true
  if (!ports || ports.charAt(0) === '0') {
    result = false
  }
  return result
}

const isSpeedValid = (maxAttainableSpeed) => {
  let result = true
  if (!maxAttainableSpeed || maxAttainableSpeed === 0 ) {
    result = false
  }
  return result
}

const isDisqualifiedFlagValid = (disqualifiedFlag) => {
  let result = true
  if (disqualifiedFlag  === 'Y' || !disqualifiedFlag) {
    result = false
  }
  return result
}

const checkQualificationStatus = (ports, maxAttainableSpeed, disqualifiedFlag) => {
  const NOT_QUALIFIED = 'not-qualified'
  const QUALIFIED = 'qualified'
  let result = QUALIFIED
  if (!isPortsValid(ports) || !isSpeedValid(maxAttainableSpeed)  || !isDisqualifiedFlagValid(disqualifiedFlag)) {
    result = NOT_QUALIFIED
  }
  return result
};

module.exports = {
  checkQualificationStatus
}

 