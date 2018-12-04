import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utils/scroll';

import './style.scss';

class ScrollToNext extends Component {
    scrollToNext() {
        const { pageSelector } = this.props;
        const nextPage = document.querySelector(pageSelector);
        scrollToElement(nextPage);
    }

    render() {
        return (
            <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
                <div className="arrow bounce" style={{ color: '#FFFFFF' }}>
                    <div className="scroll-text">Go Down</div>
                    <button className="fas fa-chevron-down fa-2x" href="#" />
                </div>
            </div>
        );
    }
}

export default ScrollToNext;
