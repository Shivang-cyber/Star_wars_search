
let div = document.getElementById('out')
div.innerText = null

var timer 


async function search(n) {
  let resp = await fetch(`https://swapi.dev/api/people/?search=${n}`)
  let data = await resp.json()
  return data.results
}

search("anakin")

function app(m) {
  div.innerText = null
  m.forEach(({ name }) => {
    let p = document.createElement('p')
    p.innerText = name
    div.appendChild(p)
  })
}


async function tra(){
 var a = document.getElementById("inp").value
 if(a.length<3){
  div.innerText = null
  return false
 }
 let charac = await search(a)
 app(charac)
 console.log(charac);
}

function debounce(func, del) {

  if (timer) {
    clearTimeout(timer)
  }

  timer = setTimeout(() => {
    func()
  }, del)
}
