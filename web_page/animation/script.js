let idx = 1;

show(idx);

function next() {
    show(idx+=1);
}

function previous() {
    show(idx-=1);
}

function show(n) {
    const currentImg = document.getElementsByClassName("element");

    if (n > currentImg.length) {
      idx = 1
    }
    else if (n < 1) {
        idx = currentImg.length
    }

    for (let s of currentImg) {
        s.style.display = "none";
    }

    currentImg[idx-1].style.display = "block";
}
