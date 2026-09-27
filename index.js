let addButton = document.getElementById(id="add-button")
let table = document.getElementById(id="table")
let title = document.createElement("p").appendChild(document.createTextNode("Note:"))

addButton.onclick = function AddButton(){
    let note = document.getElementById(id="input").value
    console.log(note)

    if (note != ""){
        let tableRow = document.createElement("tr")
        let tableData = document.createElement("td")
        
        tableData.appendChild(title)
        tableData.appendChild(document.createTextNode(note))
        tableRow.appendChild(tableData)
        table.appendChild(tableRow)
        
    }


}
