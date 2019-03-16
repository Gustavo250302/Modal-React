class Modal extends React.Component{
    constructor(props) {
        super(props);

        this.id = this.props.id;
        this.color = this.props.color === undefined ? [] :
            this.props.color;

        if (this.color[0] === undefined) this.color[0] = [undefined, undefined];
        this.color[0][0] = this.color[0][0] === undefined ? 'rgba(103, 117, 240, 1)' : this.color[0][0];
        this.color[0][1] = this.color[0][1] === undefined ? '#fff' : this.color[0][1];

        if (this.color[1] === undefined) this.color[1] = [undefined, undefined];
        this.color[1][0] = this.color[1][0] === undefined ? 'rgba(255, 255, 255, 1)' : this.color[1][0];
        this.color[1][1] = this.color[1][1] === undefined ? '#000' : this.color[1][1];

        if (this.color[2] === undefined) this.color[2] = [undefined, undefined];
        this.color[2][0] = this.color[2][0] === undefined ? 'rgba(103, 117, 240, 1)' : this.color[2][0];
        this.color[2][1] = this.color[2][1] === undefined ? '#fff' : this.color[2][1];

        this.borderRadius = this.props.borderRadius === undefined ? '8px' : this.props.borderRadius;

        this.content = this.props.content === undefined ? [<h2>header content</h2>, <p>body content</p>, <p>footer content</p>] : this.props.content;
        this.size = this.props.size === undefined ? 3 : this.props.size;
    }

    render(){
        var background,
            text,
            transparencyBackground,
            backgroundColor,
            styleColor = [];
        const eDivision = ['h', 'b', 'f'];

        for (i=0;i<this.content.length;i++){
            background = this.color[i][0];
            text = this.color[i][1];
            if (eDivision[i] === 'h' || eDivision[i] === 'f'){
                transparencyBackground = background.substring(background.length-2,background.length-1) -.1;
                backgroundColor = `${background.substring(0,background.length-2)}${transparencyBackground})`;
                styleColor.push({
                    backgroundColor: backgroundColor,
                    color: text,
                    borderBottom: `1px solid ${background}`
                });
            } else if (eDivision[i] === 'b'){
                styleColor.push({
                    backgroundColor: background,
                    color: text
                });
            }
        }

        const styleBorderRadius = {borderRadius: this.borderRadius};

        const eContent = this.content;
        var div = [];
        for (var i=0;i<eContent.length;i++){
            const part = eDivision[i].replace('h', 'header').replace('b', 'body').replace('f', 'footer')+"-modal";
            const closeModal = i === 0 ? <span className="close-modal"><i className="material-icons">close</i></span> : "" ;

            div.push(<div key={i+1} className={part} style={styleColor[i]}>
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

        return (
            <section id={this.id} className={classModal}>
                <div className="overflow-modal">
                    <div className="container-modal" style={styleBorderRadius}>
                        {div}
                    </div>
                </div>
            </section>
        );
    }
}