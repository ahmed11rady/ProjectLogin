const chooses = document.querySelectorAll('.choose')
const start = document.querySelector('.start')
const sign = document.querySelector('.sign')
const nSign = document.querySelector('.nSign')
const formNSign = document.querySelector('.new-sign')
const typeStd = document.querySelector('.stud')
const typeDoc = document.querySelector('.doct')
const Return = document.querySelector('.return')

chooses.forEach( choose => {
    choose.addEventListener('click', () => {
        start.style.display = "none"
        sign.style.display = "block"

        // if(choose.children.innerText.contains("طالب")) {
        //     typeStd.style.color = "#fff"
        // } else if (choose.childNodes.innerText.contains(دكتور)) {
        //     typeDoc.style.color = "#fff"
        //     console.log(choose)
        // }
    })
});

nSign.addEventListener('click', () => {
    sign.style.display = "none"
    formNSign.style.display = "block"
})

Return.addEventListener('click', () => {
    formNSign.style.display = "none"
    sign.style.display = "block"
})

const Choosing = document.querySelector('.choosing').children
const Teach = document.querySelector('.type .teach')
const Stud = document.querySelector('.type .stud')

console.log(Stud,Teach)
for(let i = 0; i < Choosing.length; i++) {
    
    Choosing[0].addEventListener('click', ()=> {
        Stud.classList.add('active')
    })
    Choosing[1].addEventListener('click', ()=> {
        Teach.classList.add('active')
    })
}
