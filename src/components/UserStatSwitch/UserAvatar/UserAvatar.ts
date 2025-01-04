
const UserAvatar = ({
    src, alt='', className=''
}: {
    src: string;
    alt: string;
    className: string;
}) => {
    const self = document.createElement('img');
    self.src = src;
    self.alt = alt;
    self.className = className;
    return self;
};

export default UserAvatar;