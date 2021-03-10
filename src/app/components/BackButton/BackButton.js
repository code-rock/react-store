import React, { PureComponent } from 'react';
import BackArrow from '../../icons/BackArrow';
import './BackButton.css';
import {withRouter} from 'react-router-dom';

class BackButton extends PureComponent {
    goBack = () => this.props.history.goBack();
    render() {
        return <div className="back-button__text"
                    onClick={this.goBack}>
                    <div className="back-button__icon"><BackArrow /></div>
                    <div>Товар не найден</div>
               </div>
    }
}

export default withRouter(BackButton);