import React from "react";

class PreloadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            src: null,
            alt: null,
            placeholder: this.props.placeholder || null,
        };
    }

    componentDidMount() {
        if (this.props.lazy && 'IntersectionObserver' in window) {
            this.setObserver();
        } else {
            this.setPreloader();
        }
    }

    setObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.setPreloader();
                    this.observer.disconnect();
                }
            });
        });

        this.observer.observe(this.el);
    }

    setPreloader() {
        this.preloader = new Image();

        this.preloader.onload = () => {
            this.setState({
                loaded: true,
                src: this.props.src,
                alt: this.props.alt
            });
        };
        this.preloader.onerror = () => {
            this.setState({
                loaded: true,
                src: this.state.placeholder,
                alt: this.state.placeholder
            });
        };

        this.preloader.src = this.props.src;
        this.preloader.alt = this.props.alt;
    }

    componentWillUnmount() {
        if (this.observer) this.observer.disconnect();
        if (this.preloader) this.preloader.onload = null;
    }

    render() {
        return (
            <div ref={(el) => this.el = el} className= 
                     {this.props.wrapperClassName}>
                <img src={this.state.src || this.state.placeholder}
                     ref={(el) => this.el = el}
                     onError={(e) => {
                         e.target.src = this.state.placeholder;
                         e.target.alt = this.state.placeholder;
                     }}
                     className={this.props.className}
                     style={{pointerEvents: "none",
                         opacity: this.state.loaded ? 1 : 0,
                         transition: "opacity 300ms cubic- bezier(0.215, 0.61, 0.355, 1)",
                     }}
                     alt=""/>
            </div>
        );
    }
}

export default PreloadImage;