document.addEventListener('DOMContentLoaded',function(){
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.icon')
const innerBurger= `<i class="bi bi-list"></i>`


hamburger.addEventListener('click',()=>{
   sidebar.classList.toggle("show")
   if(sidebar.classList.contains("show")){
      document.querySelector(".bi-list").style.backgroundColor = "white"  
hamburger.innerHTML= innerBurger.replace("bi-list","bi-x")
   }else{
      hamburger.innerHTML = innerBurger
   }
    
   
})


const questions = document.querySelectorAll('.question-wrapper')
questions.forEach(question=>{
question.addEventListener('click', function(){
    const plus = this.querySelector('.plus');
 const answer = this.nextElementSibling;
 if(answer.style.display === 'none'){
    answer.style.display = 'block'
    plus.textContent = '-'
 }else{
    answer.style.display = 'none'
    plus.textContent = '+'
    
 }
})

})
})