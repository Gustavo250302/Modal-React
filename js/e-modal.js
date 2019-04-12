var historyModal = [];

/*
document.querySelector("[data-modal]").onclick = function() {
    const id = this.getAttribute("data-modal");
    const el = document.getElementById(id);
    el.className += " show";
    document.getElementsByTagName('body').className += " overflow-hidden";
    historyModal.push(id);
};

document.querySelector('body').onkeydown = function(e) {
    const code = e.which;
    if(code === 27){
        const el = historyModal[historyModal.length-1];
        document.querySelector(`#${el} .close-modal`).onclick();
    }
};

document.querySelector(".close-modal").onclick = function() {
    document.getElementById(historyModal[historyModal.length-1]).classList.remove("show");
    historyModal.splice(-1,1);
    if(!document.querySelector('.modal-modal').classList.contains('show')){
        document.querySelector('body').classList.remove("overflow-hidden");
    }
};
*/

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