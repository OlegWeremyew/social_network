import React from 'react';

function withSuspense<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    return (props: WCP) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <WrappedComponent {...props}/>
        </React.Suspense>
    }
}


export default withSuspense;
