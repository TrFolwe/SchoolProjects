function registerRedirect() {
    $("html, body").animate({ scrollTop: window.innerWidth }, "slow", () => document.title = "Login");
}

function loginRedirect() {
    $("html, body").animate({scrollTop: -window.innerWidth}, "slow", () => document.title = "Register")
}

const PageWheel = false;

if(PageWheel) {
    $(window).mousewheel((event) => {
        window.scrollBy(event.deltaX < 0 ? -50 : 50, event.deltaY < 0 ? -50 : 50);
    });
}

$(() => {
    $("html, body").animate({scrollTop: -window.innerWidth});
    const wrapperCount = $(".container .wrapper").length;
    const flexDirection = $(".container").css("flex-direction");
    if(flexDirection === "row") $(".container").css({width: wrapperCount*100+"%", height: "100%"});
    else if(flexDirection === "column") $(".container").css({width: "100%", height: wrapperCount*100+"%"});
});