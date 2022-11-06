let idx = 1;

show(idx);

function next() {
    show(idx+=1);
}

function previous() {
    show(idx-=1);
}

function show(n) {
    let cur = document.getElementsByClassName("el");

    if (n > cur.length) {
      idx = 1
    }
    else if (n < 1) {
        idx = cur.length
    }

    for (let s of cur) {
        s.style.display = "none";
    }

    cur[idx-1].style.display = "block";
}

