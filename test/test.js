const expect = require('chai').expect
const planetWeight = require('..').default

describe('#planetWeight', function (){
  it ('Si pesas 70kg en la tierra debes pesar 26,23kg en marte', function (){
    const translation = planetWeight(70, "mars")
    expect(translation).to.equals('26.23')
  })
  it ('Si pesas 70kg en la tierra, debes pesar 78,84kg en neptuno', function (){
    const translation = planetWeight(70, "neptune")
    expect(translation).to.equals('78.84')
  })
    
})