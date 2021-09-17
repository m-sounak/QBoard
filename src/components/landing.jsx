import React from "react";
import  './landing.css';
import DocumentTitle from 'react-document-title';

class Landing extends React.Component
{
    render() {
        return (
            <DocumentTitle title="Qboard">
                <div className="body">
                    <div class="header">
                        <a href="/">HOME</a>
                        <a href="/board">WHITEBOARD</a>
                    </div>

                    <div id="content" width="25%">
                        <p class="para"><b>Talkandbuy</b></p>
                        <p class="innerPara">
                            Hello, Welcome to Talkandbuy. 
                            You can communicate with others regarding the products you are looking for and based on your communications, we will recommend you products that you might be interested in.
                            <br /><br />So, what are you waiting for, hurry up and login into our website.
                        </p>
                    </div>
                    
                </div>
            </DocumentTitle>
        )
    }
}

export default Landing;