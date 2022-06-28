export interface PopupProps {
    /** Content to be displayed inside the popup */
    children: JSX.Element;

    /** Define a motion for the popup to appear */
    motion?: 'enter-left' | 'enter-right' | 'enter-top' | 'enter-bottom'
}
