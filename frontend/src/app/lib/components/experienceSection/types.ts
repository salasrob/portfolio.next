interface PositionProps {
    title: string;
    companyName: string;
    dateRangeWorked: {
        startDate: string,
        endDate: string
    };
    shortDescription: string;
    technologiesUsed: [{
        title: string;
    }];
    projectSamples: [{
        title: string;
        href: string;
    }];
}

interface BadgeProps {
    label: string;
}

export type {PositionProps, BadgeProps};