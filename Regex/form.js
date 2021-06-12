const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const phno = document.getElementById("phno").value;
  const usn = document.getElementById("usn").value;
  document.getElementById("fnameop").innerHTML = fname;
  document.getElementById("lnameop").innerHTML = lname;
  document.getElementById("phnoop").innerHTML = phno;
  document.getElementById("usnop").innerHTML = usn;
});

function regEx() {
  console.log(phno.value);
  let re1 = /^[a-zA-Z]{3,}\d{2,}$/;
  let re2 = /^\d{10}$/;
  let re3 = /^1nt\d{2}\w{2}\d{3}$/i;
  console.log(fname.value);
  console.log(re1.test("12"));
  console.log(re1.test("abc123"));
  console.log(re2.test("9739906565"));
  if (re1.test(fname.value) == false) {
    alert(
      "Incorrect entry at Full Name, must have at least 3 alphabets followed at least 2 numbers"
    );
    console.log("incorrect");
    return false;
  }
  if (re1.test(lname.value) == false) {
    alert(
      "Incorrect entry at Last Name, must have at least 3 alphabets followed at least 2 numbers"
    );
    console.log("incorrect");
    return false;
  }
  if (re2.test(phno.value) == false) {
    alert("Incorrect entry at Phone Number, must have exactly 10 digits");
    console.log("incorrect");
    return false;
  }
  if (re3.test(usn.value) == false) {
    alert("Incorrect entry at USN, must be of the format 1NTYYBBNNN");
    console.log("incorrect");
    return false;
  }
}
