class Modal extends React.Component{
    constructor(props) {
        super(props);

        this.id = this.props.id;

        this.backgroudColorHeader = this.props.backgroudColorHeader === undefined ? 'rgba(103, 117, 240, 1)' : this.props.backgroudColorHeader;
        this.textColorHeader = this.props.textColorHeader === undefined ? '#fff' : this.props.textColorHeader;

        this.backgroudColorBody = this.props.backgroudColorBody === undefined ? 'rgba(255, 255, 255, 1)' : this.props.backgroudColorBody;
        this.textColorBody = this.props.textColorBody === undefined ? '#000' : this.props.textColorBody;

        this.backgroudColorFooter = this.props.backgroudColorFooter === undefined ? 'rgba(103, 117, 240, 1)' : this.props.backgroudColorFooter;
        this.textColorFooter = this.props.textColorFooter === undefined ? '#fff' : this.props.textColorFooter;

        this.borderRadius = this.props.borderRadius === undefined ? '8px' : this.props.borderRadius;

        this.content = this.props.content === undefined ? [<h2>header content</h2>, <p>body content</p>, <p>footer content</p>] : this.props.content;
        this.size = this.props.size === undefined ? 3 : this.props.size;
    }

    closeModal = () => {
        $('#'+this.id).removeClass("show");
        $('body').removeClass("overflow-hidden");
    };

    render(){
        $(`[data-modal]`).click( function () {
            var id = $(this).attr("data-modal");
            var el = document.getElementById(id);
            $(el).addClass("show");
            $('body').addClass("overflow-hidden");
        });

        var background,
            text;

        background = this.backgroudColorHeader;
        text = this.textColorHeader;
        const transparencyBackgroundHeader = background.substring(background.length-2,background.length-1) -.1;
        const backgroundColorHeader = `${background.substring(0,background.length-2)}${transparencyBackgroundHeader})`;
        const styleColorHeader = {
            backgroundColor: backgroundColorHeader,
            color: text,
            borderBottom: `1px solid ${background}`
        };

        background = this.backgroudColorBody;
        text = this.textColorBody;
        const styleColorBody = {
            backgroundColor: background,
            color: text
        };

        background = this.backgroudColorFooter;
        text = this.textColorFooter;
        const transparencyBackgroundFooter = background.substring(background.length-2,background.length-1) -.1;
        const backgroundColorFooter = `${background.substring(0,background.length-2)}${transparencyBackgroundFooter})`;
        const styleColorFooter = {
            backgroundColor: backgroundColorFooter,
            color: text,
            borderTop: `1px solid ${background}`
        };

        const styleBorderRadius = {borderRadius: this.borderRadius};

        const eDivision = ['h', 'b', 'f'];
        const eContent = this.content;
        var div = [];
        for (var i=0;i<eContent.length;i++){
            const part = eDivision[i].replace('h', 'header').replace('b', 'body').replace('f', 'footer')+"-modal";
            const closeModal = i === 0 ? <span onClick={this.closeModal} className="close-modal"><i className="material-icons">close</i></span> : "" ;

            var style;
            if (i===0) style = styleColorHeader;
            else if (i===1) style = styleColorBody;
            else style = styleColorFooter;
            div.push(<div key={i+1} className={part} style={style}>
                       {closeModal}
                       {eContent[i]}
                     </div>);
        }

        const eSize = this.size;
        const s = ['s', 'm-s', 'm', 'm-l', 'l'];
        const size = s[eSize-1];

        const classModal = (size !== "s" &&
            size !== "m-s" &&
            size !== "m" &&
            size !== "m-l" &&
            size !== "l") ? 'modal-modal modal-m' : "modal-modal modal-"+size;

        return <div id={this.id} className={classModal}>
                   <div className="overflow-modal">
                       <div className="container-modal" style={styleBorderRadius}>
                           {div}
                       </div>
                   </div>
               </div>;
    }
}