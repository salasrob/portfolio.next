interface LinkProps {
    title: string;
    href: string;
}

interface SocialProps extends LinkProps{
    viewBox: string;
    src: string;
}

export type {LinkProps, SocialProps};