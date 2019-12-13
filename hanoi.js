let selectedDisk = 0;
let targetDisk = 0;

document.getElementById("d1").addEventListener("click", moveDisk);
document.getElementById("d2").addEventListener("click", moveDisk);
document.getElementById("d3").addEventListener("click", moveDisk);
document.getElementById("d4").addEventListener("click", moveDisk);

function moveDisk(disk) {

    selectedDisk = disk.currentTarget;
}
document.getElementById("t1").addEventListener("click", targetTower);
document.getElementById("t2").addEventListener("click", targetTower);
document.getElementById("t3").addEventListener("click", targetTower);

function targetTower(tower){

    targetDisk = tower.currentTarget.lastElementChild;
 
    if (targetDisk.className === "peg") {
        tower.target.appendChild(selectedDisk);
    }
    if (selectedDisk.clientWidth < targetDisk.clientWidth) {
        tower.target.appendChild(selectedDisk)
        win();  
       }
       else {          
        }
}

function win() {
    const endTower = document.getElementById("t3")
    console.log(endTower.childElementCount)
    if (endTower.childElementCount == 6) {
        alert("Congratulations! You won!")
    }
}