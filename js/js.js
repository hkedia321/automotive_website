
function putCities(){
	// alert('Hello world');
	var state=document.getElementById('state').value;
	if(state=='TAMIL NADU')
	{
		coption1.value="VELLORE";
		coption2.value="KATPADI";
		coption3.value="CHENNAI";
		coption4.value="OTHERS"
	}
	else if(state=='WEST BENGAL')
	{
		coption1.value="KOLKATA";
		coption2.value="HOWRAH";
		coption3.value="KHARAGPUR";
		coption4.value="DURGAPUR";
		coption5.value="OTHERS"

	}
	else if(state=='GUJURAT')
	{
		coption1.value="AHMDABAD";
		coption2.value="GANDHINAGAR";
		coption3.value="KUTCH";
		coption4.value="OTHERS"

	}
	else if(state=='MAHARASHTRA')
	{
		coption1.value="MUMBAI";
		coption2.value="NAVI MUMBAI";
		coption3.value="OTHERS"

	}
	else if(state=="JAMMU AND KASHMIR")
	{
		coption1.value="SRINAGAR";
		coption2.value="GULMOHAR";
	}
	else
	{
		coption1.value="Please select state";
	}
}
function specific(str)
{
	var ans;
	if(str=='q7')
	{
		ans="Bold new looks, for all your bold new adventures. Commanding in presence, with chiseled lines from every angle, the all-new Audi Q7 makes its boldest statement yet.";
	}

	else if(str=='a6')
	{
		ans="The A6 that will fascinate you at first glance. It's emotionally stirring and the forward thrust is made visible. A design that exudes progressiveness all along the line.";
	}
	else if(str=='rs6')
	{
		ans="The outstanding power-to-weight ratio of the new Audi RS6 makes your driving even more dynamic. The new RS 6 is not only irresistibly dynamic, it is efficient as well.";
	}
	else if(str=='a4')
	{
		ans="the Audi A4 is unmistakably an Audi. However, it is more than just a car: a mobile personality – and this at a standard that you would rather expect in the luxury class.";
	}
	else if(str=='a8')
	{
		ans="The new Audi A8. Awe-inspiring and sporty, while  staying true to one clear principle :  concentration on the essential. Not a single line without a function.";
	}
	else if(str=='out')
	{
		ans="Hover over any car to see the specifications&nbsp;";
	}
	else//default
	{
		ans="This is an awesome car. One of it's kind. The king of all cars!";
	}
	var element=document.getElementById('specific_h4');
	element.innerHTML=ans;
	if(str=='out'){
		element.style.padding="10.4%";
	}
	else
	{
		element.style.padding="4%";
	}
}
function search_height(){
}
function check_font(){
	console.log("Hello");
	var fon=document.getElementById('body').style.fontFamily;
	console.log("Hello2");
	console.log(fon);
}