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
                    <br/><br/>

                    <div id="content" width="25%">
                        <p class="para"><b>QBoard</b></p>
                        <p class="innerPara">
                            Hello, Welcome to Qboard. 
                            A collaborative white board. Forget about internet wasting screen shares.
                            Write once and this will be visible to everyone in your group
                            <br /><br />So, what are you waiting for, hurry up and use this amazing tool.
                            <br/><br/>Created by Sounak Majumder, IIESTS.
                        </p>
                    </div>
                    
                </div>
            </DocumentTitle>
        )
    }
}

export default Landing;