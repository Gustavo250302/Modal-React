class ModalHeader extends React.Component{
    constructor(props) {
        super(props);

        this.style = this.props.style === undefined ? {} : this.props.style;

        this.color = this.props.color === undefined ? [] : this.props.color;

        if (this.color === undefined) this.color = [undefined, undefined];
        this.color[0] = this.color[0] === undefined ? 'rgba(103, 117, 240, 1)' : this.color[0];
        this.color[1] = this.color[1] === undefined ? '#fff' : this.color[1];
    }

    render(){
        var background,
            text,
            transparencyBackground,
            backgroundColor,
            styleColor;

        background = this.color[0];
        text = this.color[1];

        transparencyBackground = background.substring(background.length-2,background.length-1) -.1;
        backgroundColor = `${background.substring(0,background.length-2)}${transparencyBackground})`;
        styleColor = {
            backgroundColor: background,
            color: text,
            borderBottom: `1px solid ${backgroundColor}`
        };

        styleColor = {...this.style};

        const closeModal = <span className="close-modal">&#10006;</span>;

        return (
            <div className='header-modal' style={styleColor}>
                {closeModal}
                {this.props.children}
            </div>
        );
    }
}

class ModalBody extends React.Component{
    constructor(props) {
        super(props);

        this.style = this.props.style === undefined ? {} : this.props.style;

        this.color = this.props.color === undefined ? [] : this.props.color;

        if (this.color === undefined) this.color = [undefined, undefined];
        this.color[0] = this.color[0] === undefined ? 'rgba(255, 255, 255, 1)' : this.color[0];
        this.color[1] = this.color[1] === undefined ? '#000' : this.color[1];
    }

    render(){
        var background,
            text,
            transparencyBackground,
            backgroundColor,
            styleColor;

        background = this.color[0];
        text = this.color[1];

        styleColor = {
            backgroundColor: background,
            color: text
        };

        styleColor = {...this.style};

        return (
            <div className='body-modal' style={styleColor}>
                {this.props.children}
            </div>
        );
    }
}

class ModalFooter extends React.Component{
    constructor(props) {
        super(props);

        this.style = this.props.style === undefined ? {} : this.props.style;

        this.color = this.props.color === undefined ? [] : this.props.color;

        if (this.color === undefined) this.color = [undefined, undefined];
        this.color[0] = this.color[0] === undefined ? 'rgba(103, 117, 240, 1)' : this.color[0];
        this.color[1] = this.color[1] === undefined ? '#fff' : this.color[1];
    }

    render(){
        var background,
            text,
            transparencyBackground,
            backgroundColor,
            styleColor;

        background = this.color[0];
        text = this.color[1];

        transparencyBackground = background.substring(background.length-2,background.length-1) -.1;
        backgroundColor = `${background.substring(0,background.length-2)}${transparencyBackground})`;
        styleColor = {
            backgroundColor: background,
            color: text,
            borderBottom: `1px solid ${backgroundColor}`
        };

        styleColor = {...this.style};

        return (
            <div className='footer-modal' style={styleColor}>
                {this.props.children}
            </div>
        );
    }
}

class Modal extends React.Component{
    constructor(props) {
        super(props);

        this.id = this.props.id;

        this.style = this.props.style === undefined ? '' : this.props.style;

        this.borderRadius = this.props.borderRadius === undefined ? '8px' : this.props.borderRadius;

        this.size = this.props.size === undefined ? 3 : this.props.size;
    }

    render(){
        if (this.id === undefined)
            return <p>Please enter the modal id</p>;

        const styleBorderRadius = {borderRadius: this.borderRadius};

        const eSize = this.size;
        const s = ['s', 'm-s', 'm', 'm-l', 'l'];
        const size = s[eSize-1];

        const classModal = (size !== "s" &&
            size !== "m-s" &&
            size !== "m" &&
            size !== "m-l" &&
            size !== "l") ? 'modal-modal modal-m' : "modal-modal modal-"+size;

        return (
            <section id={this.id} className={classModal} style={this.style}>
                <div className="overflow-modal">
                    <div className="container-modal" style={styleBorderRadius}>
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }
}