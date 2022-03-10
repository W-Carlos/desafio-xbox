const ParagraphAnswer = document.getElementById('answer-one')
const ParagraphAnswerTwo = document.getElementById('answer-two')
const ParagraphAnswerThree = document.getElementById('answer-three')

ParagraphAnswer.style.maxHeight = "0px"
ParagraphAnswerTwo.style.maxHeight = "0px"
ParagraphAnswerThree.style.maxHeight = "0px"

function showAnswer(){
    if(ParagraphAnswer.style.maxHeight == "0px") {
        ParagraphAnswer.style.maxHeight = "120px"
    } else {
        ParagraphAnswer.style.maxHeight = "0px"
    }
}

function showAnswerTwo(){
    if(ParagraphAnswerTwo.style.maxHeight == "0px") {
        ParagraphAnswerTwo.style.maxHeight = "120px"
    } else {
        ParagraphAnswerTwo.style.maxHeight = "0px"
    }
}

function showAnswerThree(){
    if(ParagraphAnswerThree.style.maxHeight == "0px") {
        ParagraphAnswerThree.style.maxHeight = "120px"
    } else {
        ParagraphAnswerThree.style.maxHeight = "0px"
    }
}

