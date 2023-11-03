import React from 'react'
import "./TestScreen.css"
import { Link } from 'react-router-dom';

function TestScreen() {
    return (

        <div className="test">
            <div className='tleft'>
                <button>
                    <Link to="/CurrentScreen1" >Give Current Test</Link>

                </button>
            </div>
            <div className='tright'>
                <button>
                    <Link to="/CurrentScreen2">Give Upcoming Test</Link>


                </button>


            </div>
        </div>


    )
};

export default TestScreen;