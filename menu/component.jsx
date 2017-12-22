import style from './component.css';
import React from 'react';
import ReactDOM from 'react-dom';

class MilleBackofficeMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuOpened: false
        }
    }

    toggleMenu() {
        this.setState({
            menuOpened: !this.state.menuOpened
        })
    }

    render() {
        return (
            <div className="wrapper">
                <button onClick={this.toggleMenu.bind(this)}
                        className={`button ${this.state.menuOpened ? 'button--opened' : ''}`}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="300.000000pt" height="277.000000pt" viewBox="0 0 300.000000 277.000000" preserveAspectRatio="xMidYMid meet" className="logo"> <g transform="translate(0.000000,277.000000) scale(0.050000,-0.050000)" fill="#fff" stroke="none"> <path d="M130 5523 l-80 -15 109 -16 c714 -109 1020 -732 864 -1762 -33 -213 -294 -2140 -345 -2536 -11 -86 -55 -368 -99 -626 -43 -258 -79 -474 -79 -479 0 -5 125 -9 279 -9 l279 0 10 85 c5 47 20 189 32 315 12 127 36 334 52 460 16 127 38 296 48 376 97 748 324 2435 329 2440 3 3 76 -159 161 -360 84 -201 239 -568 344 -816 104 -247 262 -621 350 -830 421 -1001 505 -1190 581 -1319 81 -138 337 -411 384 -411 14 0 103 200 198 445 95 245 303 778 463 1185 159 407 409 1048 555 1425 146 376 270 684 277 685 7 0 22 -92 34 -205 21 -206 179 -1558 234 -2005 86 -707 110 -926 132 -1185 l25 -285 356 0 357 0 0 50 c0 28 -14 135 -30 239 -27 168 -118 832 -229 1671 -21 160 -80 596 -130 970 -51 374 -105 779 -121 900 -16 121 -30 262 -30 312 0 51 -6 121 -12 155 l-13 63 -446 0 -445 0 -14 -85 c-23 -146 -58 -244 -360 -1015 -161 -412 -412 -1054 -556 -1425 -145 -371 -269 -675 -275 -675 -7 0 -51 92 -99 205 -48 113 -233 547 -411 965 -178 418 -429 1008 -558 1310 -311 729 -414 914 -686 1234 -353 415 -956 654 -1435 569z" /> </g> </svg>
                    <span className="name">Aplikacje</span>
                </button>
                <nav className="nav">
                    <ul className="nav__items nav__items--link">
                        <li>
                            <a href="/Dop.CashDiff.BackOffice/cashdiff/home/index/caselist" className="link">CashDiff</a>
                        </li>
                        <li>
                            <a href="/Dop.CashDiff.BackOffice/module1/index.html" className="link">Module 1</a>
                        </li>
                        <li>
                            <a href="/Dop.CashDiff.BackOffice/module2/home/index" className="link">Module 2</a>
                        </li>
                    </ul>

                    <h1>Dla centrali</h1>
                    <ul className="nav__items nav__items--link">
                        <li>
                            <a href="#" className="link">Kodeks etyki</a>
                        </li>
                        <li>
                            <a href="#" className="link">Prawo Pascala</a>
                        </li>
                        <li>
                            <a href="#" className="link">Mapa Bieszczad Zachodnich</a>
                        </li>
                    </ul>

                    <ul className="nav__items nav__items--tile">
                        <li>
                            <a href="#" className="item item--magenta">CashDiff</a>
                        </li>
                        <li>
                            <a href="#" className="item item--darkblue">Goodie</a>
                        </li>
                        <li>
                            <a href="#" className="item">Default app</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

ReactDOM.render(
    <MilleBackofficeMenu/>,
    document.getElementById('GodzillaMenu')
)