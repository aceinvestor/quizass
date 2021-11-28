const submit = document.querySelector("#submitans")
submit.addEventListener('click',()=>{
if(confirm("Are you sure this is your final answer?")){
    let q1 = document.forms['newform']['my_old'].value
    let q2 = document.forms['newform']['my_sex'].value
    let q3 = document.forms['newform']['my_color'].value
    let q4 = document.forms['newform']['my_player'].value
    let q5 = document.forms['newform']['favorite_food'].value
    
    if(q1 == 20){
        a=1
    }else{
        a=0
    }

    if(q2 == "male"){
        b=1
    }else{
        b=0
    }

    if(q3 == "black"){
        c=1
    }else{
        c=0
    }
    if(q4 == "ronaldo"){
        d=1
    }else{
        d=0
    } 
    if(q5 == "none"){
        e=1
    }else{
        e=0
    }   
    let sum =  a+b+c+d+e
    let likeId = document.getElementById("like")
    if(sum<=2){
    likeId.innerHTML += "You answered " + sum + " out of 5 correctly<br> You don't know ACE well enough &#128532"
    }else if(sum>2 && sum<=4){
    likeId.innerHTML += "Congratulations you answered " + sum + " out of 5 correctly<br> Fair attempt try to know him better &#128079"
}else {
    likeId.innerHTML += "Excellent you answered " + sum + " out of 5 correctly<br>You know ACE so well &#11088 &#11088 &#11088"}
}
})
