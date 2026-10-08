//your JS code here. If required.
document.querySelector('form').addEventListener('submit',function(e){
	e.preventDefault();

	const ageInput=document.getElementById("age").value;
	const nameInput=document.getElementById("name").value;
	if(!ageInput||!nameInput){
		alert("Please enter valid details.")
		return 
	}
	const age=parseInt(ageInput,10);
	const name=nameInput.trim();

	const votingPromise=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve(`Welcome, ${name}. You can vote.`);
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		},4000);
	});
	votingPromise.then((message)=>{
		alert(message);
	})
	.catch((errorMessage)=>{
		alert(errorMessage);
	});
});





































