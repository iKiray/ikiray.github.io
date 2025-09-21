function p1showhide() {
    let b = document.getElementById("b1");
    let p = document.getElementById("p1");
    if (p.style.display === "none") {
        b.innerText="-"
        p.style.display = "block";
    } else {
        b.innerText="+"
        p.style.display = "none";
    }
}

function p2showhide() {
    let b = document.getElementById("b2");
    let p = document.getElementById("p2");
    if (p.style.display === "none") {
        b.innerText="-"
        p.style.display = "block";
    } else {
        b.innerText="+"
        p.style.display = "none";
    }
}