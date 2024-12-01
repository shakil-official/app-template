import React, { useState } from 'react';

const ExpandableText = ({ description, limit = 10 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            {isExpanded ? description : `${description.substring(0, limit)}... `}
            {description.length > limit && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-500 text-sm"
                >
                    {isExpanded ? "See less" : "See more"}
                </button>
            )}
        </div>
    );
};

export default ExpandableText;
