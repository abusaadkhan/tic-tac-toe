let boxes = document.querySelectorAll('.box')
let turn = 'cross'
let msg = document.querySelector('.msg')
let flag = false
boxes.forEach((box) => {
    box.addEventListener('click',(e) => {
        findTurn()
        boxClicked(e)
        findWinner()
    })
})

const findTurn = () => {
    (turn == 'cross')? turn='circle' : turn = 'cross'
}

const boxClicked = (e) => {
    if(flag == false){
        if(e.target.innerText != 'cross' && e.target.innerText != 'circle'){
            e.target.innerText = turn
        }
        else{
            alert('please choose another position')
        }    
    }
    else{
        alert('match completed please refresh')
    }
}

const findWinner = () => {
    let box1 = document.querySelector('.box1').innerText
    let box2 = document.querySelector('.box2').innerText
    let box3 = document.querySelector('.box3').innerText
    let box4 = document.querySelector('.box4').innerText
    let box5 = document.querySelector('.box5').innerText
    let box6 = document.querySelector('.box6').innerText
    let box7 = document.querySelector('.box7').innerText
    let box8 = document.querySelector('.box8').innerText
    let box9 = document.querySelector('.box9').innerText

    if( flag == false){
        if(box1 == box2 && box2 == box3 && box1 != ''){
            console.log(box1 ,'wins');
            msg.innerText = box1 + ' wins'
            flag = true
        }
        else if(box4 == box5 && box5 == box6 && box6 != ''){
            msg.innerText = box4 + ' wins'
            console.log(box4 ,'wins');
            flag = true
        }
        else if(box7 == box8 && box8 == box9 && box9 != ''){
            flag = true
            msg.innerText = box7 + ' wins'
            console.log(box7 ,'wins');
        }
        else if(box1 == box4 && box4 == box7 && box7 != ''){
            flag = true
            msg.innerText = box1 + ' wins'
            console.log(box1 ,'wins');
        }
        else if(box2 == box5 && box5 == box8 && box8 != ''){
            flag = true
            msg.innerText = box2 + ' wins'
            console.log(box2 ,'wins');
        }
        else if(box3 == box6 && box6 == box9 && box9 != ''){
            flag = true
            msg.innerText = box3 + ' wins'
            console.log(box3 ,'wins');
        }
        else if(box1 == box5 && box5 == box9 && box9 != ''){
            flag = true
            msg.innerText = box1 + ' wins'
            console.log(box1 ,'wins');
        }
        else if(box3 == box5 && box5 == box7 && box7 != ''){
            flag = true
            msg.innerText = box3 + ' wins'
            console.log(box3 ,'wins');
        }
        else if(box1 != '' && box2 != '' && box3 != '' && box4 != '' && box5 != '' && box6 != '' && box7 != '' && box8 != '' && box9 != ''){
            flag = true
            console.log('match draws');
        }
    }
    

}

