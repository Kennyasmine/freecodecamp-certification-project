const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = () => {
    const inputedString = input.value.trim();
    const originalInput = inputedString;

    //checking if nothing is inputed
    if(!inputedString){
        alert("Please input a value");
        return;
    }
    //clearing the previous result area
    result.replaceChildren();

    //cleaning the inputedString and changing it toLowerCase
    const cleanedString = inputedString.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();

    //reversing the string so it can be read backward
    const reversedString = cleanedString.split("").reverse().join("");

    //checking if the inputedString is palindrome
    // if(cleanedString === reversedString){
    //     result.innerHTML = `\uD83C\uDF89 <strong>${inputedString}</strong> is a palindrome`;
    //     result.style.display = "green";
    //     //using textContent to display the result but innerHTML was used because i want to make the inputedString bold
    //     //result.textContent = `\uD83c\uDF89 ${inputedString} is a palindrome`;
    // } else {
    //     result.innerHTML = `\uD83D\uDC4E <strong>${inputedString}</strong> is not a palindrome"`;
    //     result.style.display = "red";
    // }
    let resultMsg;
    if(cleanedString === reversedString){
        resultMsg = `\uD83c\uDF89 <strong>${originalInput}</strong> is a palindrome.`
    } else {
        resultMsg = `\uD83D\uDC4E <strong>${originalInput}</strong> is not a palindrome.`
    }

    const pTag = document.createElement("p");
    pTag.className = "user-input";
    pTag.innerHTML = resultMsg;
    result.appendChild(pTag);

    // Show the result.
    result.classList.remove("hidden");
}

//adding event listener (click) to the button element and calling the checkPalindrome function.
button.addEventListener("click", checkPalindrome);

//adding event listener (keypress) to the input so it can work when "Enter" is pressed
//I used arrow function, giving it a parameter "press"
input.addEventListener("keypress", press => {
    if(press.key === "Enter"){
        checkPalindrome();
        input.value = "";
    }
})

//unlike regular functions, arrow functions cannot be called before they are defined.