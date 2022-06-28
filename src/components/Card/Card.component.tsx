import { CloseButton } from 'components/CloseButton';
import { CardProps } from './Card.props';

import './Card.style.scss';

export const Card = ({ children, onCloseAction, isClosable, title, style }: CardProps) => (
    <div style={style} className="card">
        { (title || isClosable) && (
            <div className="card__header">
                <div className="card__header__content" style={{ justifyContent: title ? 'space-between' : 'flex-end' }}>
                    { title && <h2>{ title }</h2>}
                    { isClosable && <CloseButton onCloseAction={onCloseAction!}/> }
                </div>
                <hr/>
            </div>
        )}
        { children }
    </div>
);
