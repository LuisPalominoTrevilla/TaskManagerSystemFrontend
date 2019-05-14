import React from 'react';
import './Header.scss';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [
              'https://avatarfiles.alphacoders.com/865/86573.jpg'
          ],
        }
      }
    render() {
        return (
            <div className="header-contain">
            <NotificationContainer/>
                <div className="title">T</div>
                <img alt='' src={this.state.images[0]} className="avatar"/>
            </div>
        )
    }

}

export default Header;