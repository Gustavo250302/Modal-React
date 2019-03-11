class Modal {
    constructor(obj, id_modal, ) {
        this.obj = obj;
        this.id_modal = id_modal;
    }

    size(size = 3){
        const s = ['s', 'm-s', 'm', 'm-l', 'l'];
        this.size = s[size-1];
    }

    colorHeader(background = 'rgba(103, 117, 240, 1)', text = '#fff'){
        this.textColorHeader = text;
        this.borderColorHeader = background;

        const transparencyBackgroundHeader = background.substring(background.length-2,background.length-1) -.1;
        this.backgroudColorHeader = `${background.substring(0,background.length-2)}${transparencyBackgroundHeader})`;
    }

    colorBody(background = 'rgba(255, 255, 255, 1)', text = '#000'){
        this.textColorBody = text;
        this.backgroudColorBody = background;
    }

    colorFooter(background = 'rgba(103, 117, 240, 1)', text = '#fff'){
        this.textColorFooter = text;
        this.borderColorFooter = background;

        const transparencyBackgroundFooter = background.substring(background.length-2,background.length-1) -.1;
        this.backgroudColorFooter = `${background.substring(0,background.length-2)}${transparencyBackgroundFooter})`;
    }

    borderRadius(radius = '5px'){
        this.borderRadius = radius;
    }

    divisions(division = ['h', 'b', 'f']){
        this.division = division;
    }

    html(content = [<h2>header content</h2>, <p>body content</p>, <p>footer content</p>]){
        var div = [];
        for (var i=0;i<this.division.length;i++){
            const part = this.division[i].replace('h', 'header')
                .replace('b', 'body')
                .replace('f', 'footer')+"-modal";
            const closeModal = i === 0 ? <span className="close-modal"><i className="material-icons">close</i></span> : "" ;
            div.push(
                <div className={part}>
                    {closeModal}
                    {content[i]}
                </div>
            );
        }
        this.content = div;
    }

    create(){
        const size = this.size !== "s" &&
        this.size !== "m-s" &&
        this.size !== "m" &&
        this.size !== "m-l" &&
        this.size !== "l" ? 'modal-modal modal-m' : "modal-modal modal-"+this.size;

        var obj = this.obj;
        var id_modal = this.id_modal;

        ReactDOM.render(
            <div id={this.id_modal} className={size}>
                <div className="overflow-modal">
                    <div className="container-modal">
                        {this.content}
                    </div>
                </div>
            </div>,
            document.getElementById(obj)
        );


        $(`[data-modal="${this.id_modal}"]`).click( function () {
            var id = $(this).attr("data-modal");
            var el = document.getElementById(id);
            $(el).toggleClass("show");
            $('body').toggleClass("overflow-hidden");
        });

        $(`#${this.id_modal} .close-modal`).click( function () {
            $(this).parent().parent().parent().parent().toggleClass("show");
            $('body').toggleClass("overflow-hidden");
        });

        $(`#${this.id_modal} > .overflow-modal > .container-modal`).css({
            'border-radius': `${this.borderRadius}`
        });

        $(`#${this.id_modal} > .overflow-modal > .container-modal > .header-modal`).css({
            'background-color': `${this.backgroudColorHeader}`,
            'color': `${this.textColorHeader}`,
            'border-bottom': `1px solid ${this.borderColorHeader}`
        });

        $(`#${this.id_modal} > .overflow-modal > .container-modal > .body-modal`).css({
            'background-color': `${this.backgroudColorBody}`,
            'color': `${this.textColorBody}`
        });

        $(`#${this.id_modal} > .overflow-modal > .container-modal > .footer-modal`).css({
            'background-color': `${this.backgroudColorFooter}`,
            'color': `${this.textColorFooter}`,
            'border-top': `1px solid ${this.borderColorFooter}`
        });
    }
}