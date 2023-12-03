function details() {
  let fname = document.getElementById("first-name").value;
  let lname = document.getElementById("last-name").value;
  let add = document.getElementById("address").value;
  let pin = document.getElementById("pincode").value;
  let gender = document.querySelector(`input[name="gender"]:checked`).value;
  let country = document.querySelector("#country").value;
  let state = document.querySelector("#state").value;
  
  let res = [];
  let food = document.getElementsByClassName("food");
  for(let i=0;i<food.length;i++){
    if(food[i].checked){
       res.push(food[i].value);
    }
  }
  

  document.write("Firstname = " + fname + "<br>");
  document.write("Lastname = " + lname + "<br>");
  document.write("Address = " + add + "<br>");
  document.write("Food = "+res+"<br>"); 
  document.write("Pincode = " + pin + "<br>");
  document.write("Gender = " + gender + "<br>");
  document.write("Country = " + country + "<br>");
  document.write("State = " + state + "<br>");
  
  
}
