document.addEventListener('DOMContentLoaded',function(){
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