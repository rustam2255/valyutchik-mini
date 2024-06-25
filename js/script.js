const usz = document.querySelector('#usz')
const usd = document.querySelector('#usd')
usz.addEventListener('click', () => {
  const request = new XMLHttpRequest()
  request.open('GET', 'json/current.json')
  request.setRequestHeader('Content-Type', 'application/json; charset = utf-8')
  request.send()

  request.addEventListener('load', () => {
    if(request.status == 200){
      const data = JSON.parse(request.response)
      usd.value = (+usz.value / data.current.usd).toFixed(2)
    }else{
      `Something went wrong`
    }
  })
})