import React from "react";
import './Reserve.css';

const Reserve = () => {

    return (
        <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto', overflow: 'auto' }}>
                <iframe
                    title="Reserve Google Form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSeGfEh0t2iVp54oaV7lac884ZABPvEwCkWY2eAIRTdQT4DuSg/viewform?embedded=true"
                    width="100%" height="800px" frameBorder="0" marginHeight="0" marginWidth="0">
                    Loading…
                </iframe>
            </div>
        </div>
      );
}

export default Reserve;
