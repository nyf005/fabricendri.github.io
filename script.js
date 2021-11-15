function changeText(page) {
    if (page == "github") {
          document.getElementById("msg").innerHTML = "Visit my github";
    }

    if (page == "linkedin") {
        document.getElementById("msg").innerHTML = "Visit my linkedin";
    }
}

function resetText() {
    document.getElementById("msg").innerHTML = "Keep in Touch";
}

