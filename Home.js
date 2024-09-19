// document.addEventListener("DOMContentLoaded", () => {



//     let Action = JSON.parse(localStorage.getItem("action")) || []
//     let action = document.querySelector("#action")
//     let s1 = document.createElement("span")
//     s1.textContent = Action.length
//     action.appendChild(s1)


//     let Adventure = JSON.parse(localStorage.getItem("adventure")) || []
//     let adventure = document.querySelector("#adventure")
//     let s2 = document.createElement("span")
//     s2.textContent = Adventure.length
//     adventure.appendChild(s2)


//     let Comedy = JSON.parse(localStorage.getItem("comedy")) || []
//     let comedy = document.querySelector("#comedy")
//     let s3 = document.createElement("span")
//     s3.textContent = Comedy.length
//     comedy.appendChild(s3)



//     let Drama = JSON.parse(localStorage.getItem("drama")) || []
//     let drama = document.querySelector("#drama")
//     let s4 = document.createElement("span")
//     s4.textContent = Drama.length
//     drama.appendChild(s4)


//     let Fantasy = JSON.parse(localStorage.getItem("fantasy")) || []
//     let fantasy = document.querySelector("#fantasy")
//     let s5 = document.createElement("span")
//     s5.textContent = Fantasy.length
//     fantasy.appendChild(s5)

//     let Horror = JSON.parse(localStorage.getItem("horror")) || []
//     let horror = document.querySelector("#horror")
//     let s6 = document.createElement("span")
//     s6.textContent = Horror.length
//     horror.appendChild(s6)

//     let Documentary = JSON.parse(localStorage.getItem("documentary")) || []
//     let documentary = document.querySelector("#documentary")
//     let s7 = document.createElement("span")
//     s7.textContent = Documentary.length
//     documentary.appendChild(s7)

//     let Thriller = JSON.parse(localStorage.getItem("thriller")) || []
//     let thriller = document.querySelector("#thriller")
//     let s8 = document.createElement("span")
//     s8.textContent = Thriller.length
//     thriller.appendChild(s8)

// })




document.addEventListener("DOMContentLoaded", () => {

    const Count = (m) => {
        let data = JSON.parse(localStorage.getItem(m)) || []
        let count = document.querySelector(`#${m}`)
        let span = document.createElement("span")
        span.textContent = data.length
        count.appendChild(span)
    }


    const moviescounts = ["action", "adventure", "comedy", "drama", "fantasy", "horror",
         "documentary", "thriller", "sports", "sci-fi", "romance", "mystery", "crime",
          "animation", "musical", "war"]

    moviescounts.map((m) => Count(m))

})



document.addEventListener("DOMContentLoaded", () => {

    let nickname = localStorage.getItem("nickname")
    let gender = localStorage.getItem("gender")
    let sp = document.querySelector("#sp")

    if (gender == "f") {
        let profileimg = document.querySelector("img")
        profileimg.setAttribute("src", "image/femaleicon.jpeg")
    }

    else if (gender == "m") {
        let profileimg = document.querySelector("img")
        profileimg.setAttribute("src", "image/boyicon.jpg")

    }
    sp.textContent = nickname

})

// Action
// Adventure
// comedy
// drama
// fantasy
// Horror
// Documentary
// Thriller
// Sports
// Science Fiction (Sci-Fi)
// Romance
// Mystery
// Crime
// Animation
// Musical
// War