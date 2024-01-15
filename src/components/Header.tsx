import React from 'react';

class Header extends React.Component {

    HeaderLogo = (props) => {
        return (
            <div className='header-logo-div'>
                <p onClick={() => {
                    window.location.reload();
                    }}>{props.name}
                </p>
            </div>
        );
    }

    render() {
        return (
            <div className='headerPanel'>
                <this.HeaderLogo name='TAVISH SHARMA'></this.HeaderLogo>
            </div>
        );
    }
}

export default Header;