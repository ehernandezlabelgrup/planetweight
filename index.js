let weight = document.getElementById('weight')
let neptuneWeight = document.getElementById('weightNeptune')
let marsWeight = document.getElementById('weightMars')


weight.addEventListener('keyup', function(e){
    neptuneWeight.innerHTML = planetWeight(weight.value, 'neptune') + 'kg'
    marsWeight.innerHTML = planetWeight(weight.value, 'mars') + 'kg'
})

function planetWeight(weight, planet){
    let neptuneG = 11.15
    let earthG = 9.9
    let marsG = 3.71
    return calculate(weight, planet)
    
    
    function calculate(weight, planet){
        if (planet === 'neptune') return ((parseInt(weight) / earthG) * neptuneG).toFixed(2)
        if (planet === 'mars') return ((parseInt(weight) / earthG) * marsG).toFixed(2)
    }
}

