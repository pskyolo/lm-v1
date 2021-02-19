    function closeWrong() {
        $(".wrong-pop").removeClass("visible");
    }

   function closeWelcome() {
        $(".welcome-pop").removeClass("visible");
    }

document.getElementById("key-btn").addEventListener("click", function (e) {
        if(document.getElementById('password').value === 'LM-45erLKH!ergJK@112SQa'){
            location.href = "welcomeWindow.html";
        } else {
            $(".wrong-pop").addClass("visible");
            return false;
        }
});
