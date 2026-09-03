document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".obfuscated-email").forEach(function (button) {

        const email1 =
            button.dataset.user1 + "@" + button.dataset.domain1;

        let href = "mailto:" + email1;

        if (button.dataset.user2 && button.dataset.domain2) {
            const email2 =
                button.dataset.user2 + "@" + button.dataset.domain2;

            href += "," + email2;
        }

        button.href = href;

    });

});