interface CardProps {
    title: string;
    date?: string;
    subtitle?: string;
    description?: string;
    attachments?:[{
        title: string;
        href: string;
    }];
    badges?: [{
        label: string;
    }];
    image?: {
        altText: string;
        src: string;
    };
}

interface BadgeProps {
    label: string;
}

interface LandingPageSectionProps{
    header: string;
    contentComponents: CardProps[];
    externalLink?: {
        title: string;
        href: string;
    };
}

export type { BadgeProps, CardProps, LandingPageSectionProps };