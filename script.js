// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');

function openLightbox(element) {
    const img = element.querySelector('img');
    const title = element.querySelector('h3').innerText;

    lightbox.style.display = "flex";
    lightbox.style.flexDirection = "column";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    captionText.innerHTML = title;

    // Disable body scroll
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.style.display = "none";
    // Enable body scroll
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard close support
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && lightbox.style.display !== "none") {
        closeLightbox();
    }
});
