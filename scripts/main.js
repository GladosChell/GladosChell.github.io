

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc.getItem==="images\profile.jpg"){
    myImage.setAttribute("src", "images/2.jpg");}
    else{
      myImage.setAttribute("src", "images\profile.jpg");
    }

};
let myButton = document.querySelector("button");

  
let myHeading = document.querySelector("h1");

  myButton.onclick = () => {
    if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
      }
      myHeading.textContent = `I am so cool, ${localStorage.getItem("name")}`;
  };
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
    }
  }
  