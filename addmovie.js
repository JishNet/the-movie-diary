

let addbtn = document.querySelector("#addbtn").addEventListener("click", (e) => {
    e.preventDefault()
    let name = document.querySelector("#moviename").value
    let duration = document.querySelector("#duration").value
    let category = document.querySelector("#category").value
    let date = document.querySelector("#date").value
    let rating = document.querySelector("#rating").value
    let movieData = {
        name: name,
        duration: duration,
        category: category,
        date: date,
        rating: rating
    };


    let moviedata = JSON.parse(localStorage.getItem(category)) || []
    moviedata.push(movieData)

    localStorage.setItem(category, JSON.stringify(moviedata))





    let favheart = document.querySelector("#favheart")
    if (favheart.checked) {
        let favdata = JSON.parse(localStorage.getItem("favmovie")) || []
        favdata.push(moviedata)
        localStorage.setItem("favmovie", JSON.stringify(favdata))


    }

    alert("Added")


})




document.addEventListener("DOMContentLoaded", () => {

    let nickname = localStorage.getItem("nickname")
    let gender = localStorage.getItem("gender")
    let sp = document.querySelector("#sp")

    if (gender == "f") {
        let profileimg = document.querySelector("img")
        profileimg.setAttribute("src","image/femaleicon.jpeg")
    }

    else if (gender == "m") {
        let profileimg = document.querySelector("img")
        profileimg.setAttribute("src", "image/boyicon.jpg")

    }
    sp.textContent = nickname

})




// span.textContent =









// localStorage.clear()