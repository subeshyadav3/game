let btn=document.querySelector("button");
let body=document.querySelector("body");
let mode="light";
btn.onclick=()=>{
	if(mode==="light"){
		mode="dark";
		body.style.backgroundColor="white";
		body.style.color="blue";
		console.log("light");
		// btn.backgroundColor="red";
		

	}
	else{
		mode="light";
		body.style.backgroundColor="skyblue";
		body.style.color="white";
		console.log("black");
	}
}

// real coding of game 


//auto generate one 

function autoSelect(){
	options=['rock','paper','scissor'];
	const choose=Math.floor(Math.random()*3);
	return options[choose];
}


let comScore=0;
let HumanScore=0;


let choices=document.querySelectorAll("#choice");
choices.forEach((choice)=>{
	console.log(choice);
	choice.addEventListener("click",()=>{
		const choiceName=choice.getAttribute("name");

		playGame(choiceName);
	});
});


let msg=document.querySelector("#result");
let comp=document.querySelector("#comp");
let hum=document.querySelector("#hum");

function playGame(choiceName){
	const valueChoosen=autoSelect();
	console.log("comp",valueChoosen);
	console.log("user",choiceName);
		if(valueChoosen=== choiceName){
			msg.innerText=" Game Draw";
		}
		else{
			if((valueChoosen==="rock" && choiceName==="scissor") || (valueChoosen==="paper" && choiceName==="rock") || (valueChoosen==="scissor" && choiceName==="paper")){
				comScore=comScore+1;
				console.log("comp score",comScore);
				msg.innerText="Computer Won Here!";
				comp.innerText=comScore;
			}
			else{
				HumanScore=HumanScore+1;
				msg.innerText="You won!!!";
				hum.innerText=HumanScore;
			}


		}

}

