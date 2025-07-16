import React from 'react'
import Doubts from './doubts';
import AskDoubt from './AskDoubt';

function DoubtPage() {
    return (
        <>
            <div className="container my-4">
                <h2 className="mb-4 text-primary">Doubt Forum</h2>
                <AskDoubt />
                <hr />
                <Doubts />
        </div>
        </>
    );
}

export default DoubtPage;