const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What year was javascript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notation',
        'd': 'Cascading Short Style',
        'correct': 'b'
    },
]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const queBox = document.getElementById('queBox')
const optionInp = document.querySelectorAll('.options')
const loadQue = () => {
    if(index=== total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    queBox.innerText = `${index+1}) ${data.que}`
    optionInp[0].nextElementSibling.innerText = data.a
    optionInp[1].nextElementSibling.innerText = data.b
    optionInp[2].nextElementSibling.innerText = data.c
    optionInp[3].nextElementSibling.innerText = data.d
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct){
        right++
    } else{
        wrong++
    }
    index++
    loadQue()
    return;
}

const getAnswer = () => {
    let answer
    optionInp.forEach(
        (input) => {
            if(input.checked){
                answer = input.value
            }
        }
        )
        return answer
    }
    
    const reset = () => {
        optionInp.forEach(
            (input) => {
                input.checked = false
            }
            )
        }
        
        const endQuiz = () => {
            document.getElementById('box').innerHTML =`
            <div style = "text-align:center">
            <h3> Thank you for playing the Quiz</h3>
            <h2> ${right} / ${total} are correct </h2>
            </div>
            `
        }
        // initial call
        loadQue()