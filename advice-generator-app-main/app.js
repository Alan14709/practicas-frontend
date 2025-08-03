 const advice = document.getElementById("advice")
 const content = document.getElementById("content")
const refresh = document.getElementById("refresh")



refresh.addEventListener("click",()=>{
   fetch(`https://api.adviceslip.com/advice?t=${Date.now()}`, {
        cache: 'no-store'
    })
    .then(value => {
        if (!value.ok) {
            throw new Error(`HTTP error status: ${value.status}`);
        }
        return value.json();
    })
    .then(data =>{
        console.log(data)
        advice.textContent = data.slip.id
        content.textContent = data.slip.advice
    })
    .catch((err)=>{
        advice.textContent = "Error"
        content.textContent = `Error al contactar con la api: ${err.message}`
        console.error('Fetch error:', err);
    })
    })