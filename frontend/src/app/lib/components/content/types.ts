import Badge from "../experienceSection/badge";

interface CardProps {
    title: string;
    date?: string;
    subtitle?: string;
    description?: string;
    badges?: [{
        label: string;
    }];
    image?: {
        altText: string;
        src: string;
    };
}

// Dates (optional)
// Images (optional)
// Title
// Subtitle (optional)
// Description (optional)
// Attachments (basically a link) (optional)
// Badges (optional)

export type { CardProps };