# React hook "useScrollToAnchor"

A custom React hook for scrolling to the anchor element corresponding to the current URL hash.

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

