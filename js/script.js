$(window).on("load", function () {
    // まず .hero セクション全体を表示
    $(".hero").addClass("show");

    // 中の要素を順番に表示
    $(".fade-item").each(function (i) {
        const $this = $(this);
        setTimeout(function () {
            $this.addClass("show");
        }, i * 800);
    });
});
