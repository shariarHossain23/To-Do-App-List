let count = 0;

document.getElementById("add-btn").addEventListener("click",function(){
  count++
    const inputField = document.getElementById("input-field").value;
    if(inputField == ""){
      alert("some text please")
    }
    else if(parseInt(inputField) > 0){
        alert("plz input text")
    }
    else{
      let newRow = document.createElement("tr");
      newRow.innerHTML = `
      <th scope="row">${count}</th>
      <td>${inputField}</td>
      <td>
      <button class = "done btn btn-primary">Done </button>
      <button class = "remove btn btn-danger mx-2">Remove </button>
      </td>
      `
      const userList = document.getElementById("userList")
      userList.appendChild(newRow)



      document.getElementById("input-field").value = ""
    }
// delete element
    const deleteBtn = document.getElementsByClassName("remove");
    for (const button of deleteBtn) {
      button.addEventListener("click",function(e){
        e.target.parentNode.parentNode.style.display = "none"
      })
    }

    // ads something in done tag
    const doneBtn = document.getElementsByClassName("done");
    for (const button of doneBtn) {
      button.addEventListener("click",function(e){
       e.target.parentNode.parentNode.style.textDecoration = "line-through"
      })
    }

    // delete all
 document.getElementById("clear").addEventListener("click",function(){
  document.getElementById("userList").style.display = "none"
 })


})




