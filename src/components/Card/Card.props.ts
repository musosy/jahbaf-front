import React from 'react';

export interface CardProps {
    /** Content to be displayed inside the card */
    children: JSX.Element;

    /** Is card closable, if so a close button is displayed */
    isClosable: boolean;

    /** Action to trigger when close button is clicked */
    onCloseAction?: () => any;

    /** Title to be displayed on the card */
    title?: string;

    /** Style to apply to the card */
    style?: React.CSSProperties;
}
