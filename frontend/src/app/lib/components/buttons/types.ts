interface LinkProps {
    title: string;
    href: string;
    download: boolean;
}

interface SocialProps extends LinkProps{
    viewBox: string;
    src: string;
}

export type {LinkProps, SocialProps};