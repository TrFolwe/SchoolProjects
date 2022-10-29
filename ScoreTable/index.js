const windowScroll = true;

if(windowScroll) {
    $(window).mousewheel((event) => {
        const deltaSpeed = {x: 100, y: 100};
        window.scrollBy(event.deltaX < 0 ? -(deltaSpeed.x) : deltaSpeed.x, event.deltaY < 0 ? -(deltaSpeed.y) : deltaSpeed.y);
    });
}

$(() => {
    const scoreWrapperCount = $(".scoreContainer .scoreWrapper").length;
    const colorFull = true;
    $(".container").css("height", scoreWrapperCount*100+"%");
    if(colorFull) for(let i = 1; i <= scoreWrapperCount; i++) $(".scoreContainer .scoreWrapper:nth-child("+i+")").css("background-color", "#"+Math.floor(Math.random()*16777215).toString(16))
});