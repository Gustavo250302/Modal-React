var historyModal = [];
$(`[data-modal]`).click( function () {
    var id = $(this).attr("data-modal");
    var el = document.getElementById(id);
    $(el).addClass("show");
    $('body').addClass("overflow-hidden");
    historyModal.push(id);
});

$('body').on("keydown", function (e) {
    var code = e.which;
    if(code === 27){
        var el = '#'+historyModal[historyModal.length-1];
        $(el).find(".close-modal").click();
    }
});

$(".close-modal").click(function () {
    $(this).parent().parent().parent().parent().removeClass("show");
    historyModal.splice(-1,1);
    if(!$('.modal-modal').hasClass('show')){
        $('body').removeClass("overflow-hidden");
    }
});