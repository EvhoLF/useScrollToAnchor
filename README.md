# React hook "useScrollToAnchor"

A custom React hook for scrolling to the anchor element corresponding to the current URL hash.

## Usage
```
import React, { useState } from 'react';
import { useScrollToAnchor } from './useScrollToAnchor';

const App = () => {
    const [loading, setLoading] = useState(true);
    useScrollToAnchor(loading);

    // Your component code here

    return (
        // Your JSX here
    );
};

export default App;
```


    // Using the light mode
    "indentRainbow.indicatorStyle": "light",
    // we use a simple 1 pixel wide line
    "indentRainbow.lightIndicatorStyleLineWidth": 1,
    // the same colors as above but more visible
    "indentRainbow.colors": [
        "rgba(255,255,64,0.3)",
        "rgba(127,255,127,0.3)",
        "rgba(255,127,255,0.3)",
        "rgba(79,236,236,0.3)"
    ],
