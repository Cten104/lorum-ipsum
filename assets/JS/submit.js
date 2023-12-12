function handleFormSubmit() {
    var userName = document.getElementById("name").value;

    document.getElementById("Form").action = "success.html?name=" + encodeURIComponent(userName);
}
    var urlParams = new URLSearchParams(window.location.search);
    var userName = urlParams.get('name');

    document.getElementById("name").innerText = "Thank you " + userName + ", for completing the artwork submission form!";