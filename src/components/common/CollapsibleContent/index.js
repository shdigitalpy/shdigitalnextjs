import React from 'react';

const CollapsibleContent = (
    {
        children,
        expanded = false,
        className = '' ,
        styles = {},
        height,
    }) => {
    const baseFont = 14;

    return (
        <div className={className}
             style={{...styles, height: expanded ? `${height}px` : 0 }}>
            { children }
        </div>
    );
};

export default CollapsibleContent;
