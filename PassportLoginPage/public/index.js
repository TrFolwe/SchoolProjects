function loginRedirect(mode) {
    $("html, body").animate({ scrollLeft: -window.innerWidth }, "slow");
}

function registerRedirect() {
    $("html, body").animate({ scrollLeft: window.innerWidth }, "slow")
}

$(window).mousewheel((event) => {
    window.scrollBy(event.deltaX < 0 ? -50 : 50, event.deltaY < 0 ? -50 : 50);
});

$(() => {
    $("html, body").animate({ scrollLeft: -window.innerHeight })
    const wrapperCount = $(".container .wrapper").length;
    const flexDirection = $(".container").css("flex-direction");
    if(flexDirection === "row") $(".container").css({width: wrapperCount*100+"%", height: "100%"});
    else if(flexDirection === "column") $(".container").css({width: "100%", height: wrapperCount*100+"%"});
});