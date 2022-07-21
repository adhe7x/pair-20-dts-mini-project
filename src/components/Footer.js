import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='main__footer'>
            <div className='container'>
                <br />
                <div className='row__foot'>
                    <div className='col__foot'>
                        <ul className='list'>
                            <li>MovieApp Inc.</li>
                            <li>0899-8989-8989</li>
                            <li>Culang-cileung 123 Street</li>
                            <li>Bandung, Indonesia</li>
                        </ul>
                    </div>
                    <div className='col__foot'>
                        <ul className='list'>
                            <li>MovieApp Inc.</li>
                            <li>0899-8989-8989</li>
                            <li>Culang-cileung 123 Street</li>
                            <li>Bandung, Indonesia</li>
                        </ul>
                    </div>
                    <div className='col__foot'>
                        <ul className='list'>
                            <li>MovieApp Inc.</li>
                            <li>0899-8989-8989</li>
                            <li>Culang-cileung 123 Street</li>
                            <li>Bandung, Indonesia</li>
                        </ul>
                    </div>
                </div>
                <br />
                    <hr/>
                    <div className='row__foot'>
                        <p> &copy;{new Date().getFullYear()} MovieApp </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;