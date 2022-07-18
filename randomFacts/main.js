document.querySelector('button').addEventListener('click', randomFact)

function randomFact(){

fetch('https://uselessfacts.jsph.pl//random.json?language=en')
.then(res => res.json()) // parse response as JSON
.then(data => {
console.log(data.text)
  let randomColor = Math.floor(Math.random()*16777215).toString(16)
  document.querySelector('body').style.backgroundColor =  '#' + randomColor
  document.querySelector('button').style.backgroundColor =  '#' + randomColor
  document.querySelector('.fact').innerText = data.text
  
})
.catch(err => {
    console.log(`error ${err}`)
});

}


