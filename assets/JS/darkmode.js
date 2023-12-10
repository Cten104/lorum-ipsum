const chk = document.getElementById('chk');
const bannerImage = document.getElementById('banner');
const bannerDarkImage = document.getElementById('bannerDark');

chk.addEventListener('change', () => {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark');

    // Toggle visibility of banners based on dark mode
    if (document.body.classList.contains('dark')) {
        bannerImage.style.display = 'none';
        bannerDarkImage.style.display = 'inline';
    } else {
        bannerImage.style.display = 'inline';
        bannerDarkImage.style.display = 'none';
    }
});
