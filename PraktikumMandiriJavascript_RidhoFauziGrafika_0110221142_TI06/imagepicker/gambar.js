function hewan() {
    let image = document.getElementById("image")
    let hasil = document.getElementById("hasil")

    if(image.value == "kurakura"){
        alert("ini adalah Kura-Kura")
        return hasil.src ="kura-kura.jpg"
    }else if (image.value == "kucing"){
        alert("ini adalah kucing")
        return hasil.src = "kucing.jpeg"
    }else if (image.value == "sapi"){
        alert("ini adalah sapi")
        return hasil.src = "sapi.jpg"
    }else if (image.value == "kambing"){
        alert("ini adalah kambing")
        return hasil.src = "kambing.jpg"
    }else if (image.value == "laba-laba"){
        alert("ini adalah laba-laba")
        return hasil.src = "laba-laba.jpg"
    }else if (image.value == "gorilla"){
        alert("ini adalah Gorilla")
        return hasil.src = "gorilla.jpg"
    }else if (image.value == "burung"){
        alert("ini adalah burung")
        return hasil.src = "burung.jpg"
    }  
}