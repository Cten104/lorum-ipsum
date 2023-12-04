let dark = false;

function darkMode() {
    if (dark) {
        document.querySelector("body").style.background = 'radial-gradient(circle at 10% 20%, rgb(254, 255, 165) 0%, rgb(255, 232, 182) 90%)';
        document.querySelector("body").style.color = 'black';
    } else {
        document.querySelector("body").style.background = 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)';
        document.querySelector("body").style.color = 'white';
    }

    dark = !dark;
}