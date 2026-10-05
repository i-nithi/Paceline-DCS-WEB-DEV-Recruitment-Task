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
