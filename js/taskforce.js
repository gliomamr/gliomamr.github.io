document.querySelectorAll(".obfuscated-email").forEach(function (button) {

    const user = button.dataset.user;
    const domain = button.dataset.domain;

    button.href = "mailto:" + user + "@" + domain;

});