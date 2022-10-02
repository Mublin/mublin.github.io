const sections = document.querySelectorAll(".section")
const sectBtns = document.querySelectorAll(".controls")
const sectBtn = document.querySelectorAll(".control")
const allSections = document.querySelector(".main-content")
const mode = document.querySelector(".theme-btn")
const submit = document.getElementById('submit-contact')


function pageTransitions(){
    //button click active class
    for(i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", '');
            this.className += " active-btn"
            console.log(this.className)
        })
    }
    //sections active class
    allSections.addEventListener('click', (e)=>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            sectBtns.forEach(btn =>{
                btn.classList.remove('active');
            })
            e.target.classList.add("active")

            //hide other sections
            sections.forEach(section=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })
    mode.addEventListener('click', function() {
        allSections.classList.toggle('light')
    })

}


pageTransitions()
function form() {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const subject = document.getElementById('subject')
    const message = document.getElementById('message')
    name.addEventListener('change', function (e) {
        console.log(e.target.value);
    })
    email.addEventListener('change', function (e) {
        console.log(e.target.value);
    })
    subject.addEventListener('change', function (e) {
        console.log(e.target.value);
    })
    message.addEventListener('change', function (e) {
        console.log(e.target.value);
    })
}
form()