
const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const rowElements = document.querySelectorAll(".row")
//const getCellElements = getcellElementArray[elementIndex]




// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")  
}

replaceAllButton.addEventListener('click', function (event) {
    let find = findInput.value
    let change =replaceInput.value
    for (let Index = 0; Index < rowElements.length; Index += 1){
        console.log("checked")
        let incell = getCellElements(rowElements[Index])
    for (let Index2 = 0; Index2 < incell.length; Index2 += 1){
        console.log("done")
        
     if (incell[Index2].innerText.includes(find)) {
        incell[Index2].innerHTML = incell[Index2].innerHTML.replace(find,change)
     }

    
    }  
}
 
})

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! ///It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than ///the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
