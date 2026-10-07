const newsletterForm = document.querySelector(".newsletter-form");

newsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = newsletterForm.querySelector("input").value;

    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    alert("Thanks for subscribing!");
    newsletterForm.reset();
});
const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");
searchIcon.addEventListener("click", function(event) {
    event.preventDefault();
    searchBar.classList.toggle("active");
});
const bookGaitBtn = document.getElementById("bookGaitBtn");

if (bookGaitBtn) {
    bookGaitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const message = document.createElement("div");
        message.textContent = "Your gait analysis has been booked!";

        message.style.position = "fixed";
        message.style.bottom = "30px";
        message.style.right = "30px";
        message.style.backgroundColor = "#111";
        message.style.color = "#c4f52f";
        message.style.padding = "15px 20px";
        message.style.zIndex = "1000";

        document.body.appendChild(message);

        setTimeout(function () {
            message.remove();
        }, 3000);
    });
}

const filterButtons = document.querySelectorAll(".arrival-filters button");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        products.forEach(product => {
            if (filter === "all" || product.dataset.category === filter) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });

    });
});

function showMessage(event, message) {
    event.preventDefault();

    const messageBox = document.createElement("div");

    messageBox.textContent = message;
    messageBox.classList.add("message-box");

    document.body.appendChild(messageBox);

    setTimeout(function() {
        messageBox.remove();
    }, 3000);
}

document.querySelectorAll(".coming-soon").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("This page is coming soon!");
    });
});