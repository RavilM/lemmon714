import React, {Component} from 'react';

class Home extends Component {

    state = {
        windowWidth: document.documentElement.clientWidth,
        windowHeight: document.documentElement.clientHeight
    };

    render() {
        return (
            <div className={'main__video'}>
                <video width={this.state.windowWidth} height={this.state.windowHeight} autoPlay="autoplay" loop="loop"
                       preload="auto" muted="muted">
                    <source src="./videoplayback.mp4"></source>
                    <source src="./videoplayback.webm" type="video/webm"></source>
                </video>
                <div className={'main__logo'}>
                    <img className={'logo'} src={'./logo.png'} alt={'Lemmon714'}/>
                </div>
            </div>
        );
    }
}

export default Home;