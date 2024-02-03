interface CardProps {
    title: string;
    href?: string;
    company?: string;
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

interface TableProps {
    columnLabels: string[];
    contentComponents: CardProps[];
}

export type { BadgeProps, CardProps, LandingPageSectionProps, TableProps };