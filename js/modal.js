class Modal extends React.Component{
    closeModal = () => {
        $("#"+this.props.id).removeClass("show");
        $('body').removeClass("overflow-hidden");
    };

    render(){
        $(`[data-modal="${this.props.id}"]`).click( function () {
            var id = $(this).attr("data-modal");
            var el = document.getElementById(id);
            $(el).toggleClass("show");
            $('body').toggleClass("overflow-hidden");
        });
        var background,
            text;

        background = this.props.backgroudColorHeader === "" ? 'rgba(103, 117, 240, 1)' : this.props.backgroudColorHeader;
        text = this.props.textColorHeader === "" ? '#fff' : this.props.textColorHeader;
        const transparencyBackgroundHeader = background.substring(background.length-2,background.length-1) -.1;
        const backgroundColorHeader = `${background.substring(0,background.length-2)}${transparencyBackgroundHeader})`;
        const styleColorHeader = {
            backgroundColor: backgroundColorHeader,
            color: text,
            borderBottom: `1px solid ${background}`
        };

        background = this.props.backgroudColorBody === "" ? 'rgba(255, 255, 255, 1)' : this.props.backgroudColorBody;
        text = this.props.textColorBody === "" ? '#000' : this.props.textColorBody;
        const styleColorBody = {
            backgroundColor: background,
            color: text
        };

        background = this.props.backgroudColorFooter === "" ? 'rgba(103, 117, 240, 1)' : this.props.backgroudColorFooter;
        text = this.props.textColorFooter === "" ? '#fff' : this.props.textColorFooter;
        const transparencyBackgroundFooter = background.substring(background.length-2,background.length-1) -.1;
        const backgroundColorFooter = `${background.substring(0,background.length-2)}${transparencyBackgroundFooter})`;
        const styleColorFooter = {
            backgroundColor: backgroundColorFooter,
            color: text,
            borderTop: `1px solid ${background}`
        };

        const styleBorderRadius = {borderRadius: this.props.borderRadius === "" ? '5px' : this.props.borderRadius};

        const eDivision = ['h', 'b', 'f'];
        const eContent = this.props.content === "" ? [<h2>header content</h2>, <p>body content</p>, <p>footer content</p>] : this.props.content;
        var div = [];
        for (var i=0;i<eContent.length;i++){
            const part = eDivision[i].replace('h', 'header').replace('b', 'body').replace('f', 'footer')+"-modal";
            const closeModal = i === 0 ? <span onClick={this.closeModal} className="close-modal"><i className="material-icons">close</i></span> : "" ;

            var style;
            if (i===0)
                style = styleColorHeader;
            else if (i===1)
                style = styleColorBody;
            else
                style = styleColorFooter;
            div.push(<div key={i+1} className={part} style={style}>
                       {closeModal}
                       {eContent[i]}
                     </div>);
        }

        const eSize = this.props.size === "" ? 3 : this.props.size;
        const s = ['s', 'm-s', 'm', 'm-l', 'l'];
        const size = s[eSize-1];

        const classModal = (size !== "s" &&
            size !== "m-s" &&
            size !== "m" &&
            size !== "m-l" &&
            size !== "l") ? 'modal-modal modal-m' : "modal-modal modal-"+size;

        return <div id={this.props.id} className={classModal}>
                   <div className="overflow-modal">
                       <div className="container-modal" style={styleBorderRadius}>
                           {div}
                       </div>
                   </div>
               </div>;
    }
}