$(function() {
    $(".box").on("click", function() {
        const modalContent = $(this).find(".modal-content").html();

        $(".modal-inner").html(`
        <span class="modal-close">&times;</span>
        ${modalContent}
        `);

        $(".modal-inner img").css({
            width: "100%",
            maxWidth: "800px",
            height: "auto",
            display: "block",
            margin: "28px 0",
            borderRadius: "10px",
        });

        $("#modal").fadeIn();
    });

    $(document).on("click", ".modal-close, #modal", function (e) {
    if (e.target === this || $(e.target).hasClass("modal-close")) {
      $("#modal").fadeOut();
    }
    });

});


$(function() {
    $(".tools").on("click", function() {
        $(".tools-list").slideToggle();
    });
    $(".hobby").on("click", function() {
        $(".hobby-list").slideToggle();
    });
});

$(function() {
    $(".menuButton").on("click", function() {
        $(".navigation").slideToggle();
        $(".closeButton").show();
        $(".menuButton").hide();
    })
    $(".closeButton").on("click", function() {
        $(".navigation").slideToggle();
        $(".menuButton").show();
        $(".closeButton").hide();
    });

    $(".bird-tap").on("click", function() {
        $(".fukidashi-gif").fadeToggle();
    });
});

$(function() {
    const fromSameSite = document.referrer.includes(location.origin);

    if (fromSameSite) {
        $("#loading-screen").hide();
        return;
    }

    let progress = 0;
    let maxProgress = 100;
    let speed = 20;

    let interval = setInterval(function () {
    progress += 1;
    $(".progress").css("width", (progress / maxProgress * 100) + "%");

    let barWidth = 300;
    let birdWidth = 80;
    let moveX = (barWidth - birdWidth) * (progress / maxProgress);
    $(".bird").css("left", moveX + "px");

    if (progress >= maxProgress) {
      clearInterval(interval);
      $("#loading-screen").fadeOut(500);
    }
  }, speed);

});