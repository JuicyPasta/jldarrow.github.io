window.onload = function() {
    console.log('hi')
    document.getElementById("projects-button").onclick = function (event) {
        console.log("HI")
        document.getElementById("content").style.display = "block"
        document.getElementById("contact").style.display = "none"
    }
    document.getElementById("contact-button").onclick = function(event) {
        document.getElementById("content").style.display = "none"
        document.getElementById("contact").style.display = "block"
    }
}