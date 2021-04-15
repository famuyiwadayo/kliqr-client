import { FC } from 'react';
import classnames from 'classnames';
import './Avatar.scss';

interface AvatarProps {
    size?: 'small' | 'large';
    src: string;
    alt?: string
}

const Avatar: FC<AvatarProps> = (props) => {
    let {size, src, alt} = props;
    if(!size)  size = 'small';
    const _classnames = classnames('kliqr-avatar', {
        'kliqr-avatar--small': size === 'small',
        'kliqr-avatar--large': size === 'large'
    });

    return <div className={_classnames}>
        <img src={src} alt={alt}/>
    </div>
}

export default Avatar;