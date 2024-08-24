

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  
    myImage.setAttribute("src", "images/2.jpg");

};
let myButton = document.querySelector("button");

  
let myHeading = document.querySelector("h1");

  myButton.onclick = () => {
    if (!localStorage.getItem("name")) {
        setUserName();
      } else {
        const storedName = localStorage.getItem("name");
      }
      myHeading.textContent = `I am sos cool, ${localStorage.getItem("name")}`;
  };
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
    }
  }
  