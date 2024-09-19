let btn = document.querySelector("#letbtn").addEventListener("click", (e) => {
    e.preventDefault()
     
    let nickname = document.querySelector("#nickname").value
    let gender = document.querySelector("#gender").value


    localStorage.setItem("nickname",nickname)


    localStorage.setItem("gender",gender)

    window.open('Home.html');

   

})






// localStorage.clear()