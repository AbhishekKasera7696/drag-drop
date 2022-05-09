// console.log("helo")

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName('whiteBox');

imgBox.addEventListener('dragstart' , (e) => {
    console.log("dragStart has been triggered")
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className += ' hide';
    }, 0)
    
});
imgBox.addEventListener('dragend' , (e) => {
    console.log("dragEnd has been triggered");
    e.target.className = 'imgBox';
})

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover' , (e) => {
        e.preventDefault();
        console.log("dragOver has been triggered")
    })

    whiteBox.addEventListener('dragleave' , () => {
        console.log("dragLeave has been triggered")
    })

    whiteBox.addEventListener('dragenter' , () => {
        console.log("dragEnter has been triggered");

    })

    whiteBox.addEventListener('drop' , (e) => {
        console.log("Drop has been triggered")
        e.target.append(imgBox)
    })
}