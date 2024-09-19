document.addEventListener("DOMContentLoaded", () => showData());

function showData() {
    let favMovies = JSON.parse(localStorage.getItem("favmovie")) || [];
    console.log(favMovies);

    let table_body = document.querySelector("#table_body");
    table_body.innerHTML = ""; 

    favMovies.forEach((m, index) => {
        let movie = m[0]; 
        let tr = document.createElement("tr");
        let th = document.createElement("th");

        th.textContent = index + 1;

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td1.textContent = movie.name;
        td2.textContent = movie.duration;
        td3.textContent = movie.date;
        td4.textContent = movie.rating;

        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table_body.appendChild(tr);
    });
}



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