interface CardProps {
    title: string;
    href?: string;
    download: boolean;
    company?: string;
    date?: string;
    subtitle?: string;
    description?: string;
    attachments?:[{
        title: string;
        href: string;
        download: boolean;
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
        download: boolean;
    };
}

enum DeviceSize {
    Small,
    Medium,
    Large,
  }

interface DeviceProps{
    size: DeviceSize
}

interface LabelProps{
    label: string;
    showOnDeviceSize?: DeviceProps;
}

interface TableProps {
    columnLabels: LabelProps[];
    contentComponents: CardProps[];
}

export { DeviceSize }
export type { BadgeProps, CardProps, LandingPageSectionProps, TableProps, LabelProps, DeviceProps };