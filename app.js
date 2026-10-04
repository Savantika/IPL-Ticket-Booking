function showToast(message) {
    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";

        toast.style.position = "fixed";
        toast.style.bottom = "30px";
        toast.style.right = "30px";
        toast.style.backgroundColor = "#0b1f3a";
        toast.style.color = "white";
        toast.style.padding = "14px 22px";
        toast.style.borderRadius = "8px";
        toast.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
        toast.style.zIndex = "2000";
        toast.style.fontWeight = "bold";

        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.display = "block";

    setTimeout(function () {
        toast.style.display = "none";
    }, 2500);
}

function scrollToBooking() {
    const bookingSection = document.getElementById("booking");

    if (bookingSection) {
        const position = bookingSection.offsetTop - 80;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

        showToast("Taking you to the booking section!");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const bookButton = document.querySelector("#home button:last-child");

    if (bookButton) {
        bookButton.addEventListener("click", scrollToBooking);
    }

    const matchBookLinks = document.querySelectorAll('a[href="#booking"]');

    matchBookLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            scrollToBooking();
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const aboutText = document.getElementById("demo");

    if (aboutText) {
        aboutText.textContent =
            "IPL 2026 brings together the best cricket teams and players from around the world " +
            "for an action-packed season full of thrilling matches, star performances, and " +
            "unforgettable moments. Book your tickets now and be part of the excitement live " +
            "at the stadium!";
    }
});