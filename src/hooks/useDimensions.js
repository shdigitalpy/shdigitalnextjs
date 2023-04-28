import { useEffect, useRef } from "react";

export const useDimensions = ref => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        const { height, width } = ref.current.getBoundingClientRect();
        dimensions.current.width = width;
        dimensions.current.height = height;
    }, []);

    return dimensions.current;
};
