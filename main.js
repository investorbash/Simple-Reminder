let submit = document.getElementById("submit")

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    let title = document.getElementById("title").value
    let date = document.getElementById("date").value
    let isValidDate = !isNaN(Date.parse(date))
    let apts = document.getElementById("apts")
    // alert(isValidDate)
    if(title == ""){
        alert('Title Field Cannot be Empty')
        title.focus()
    }
    else if(!isValidDate){
        alert('Date Must be Filled')
    }
    else{
        let createTags = document.createElement("div")
        createTags.className = "apts-content"
        let createTitle = document.createElement("h6")
        let createDate = document.createElement("code")
        createTitle.append(title)
        createDate.append(date)
        createTags.append(createTitle, createDate)
        apts.append(createTags)
    }
    
    

    // alert(createTags)
})