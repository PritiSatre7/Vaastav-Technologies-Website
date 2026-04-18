function selectRole(role, card) {

    // dropdown auto select
    document.getElementById("role").value = role;

    // toggle logic
    let skills = card.querySelector(".skills");

    if (skills.style.display === "block") {
        skills.style.display = "none";
    } else {
        document.querySelectorAll(".skills").forEach(s => {
            s.style.display = "none";
        });
        skills.style.display = "block";
    }
}

function applyJob(e) {
    e.preventDefault();

    let file = document.getElementById("resume").files[0];

    if (!file) {
        alert("Please upload resume");
        return;
    }

    if (file.type !== "application/pdf") {
        alert("Only PDF allowed");
        return;
    }

    alert("Application Submitted Successfully 🚀");
}