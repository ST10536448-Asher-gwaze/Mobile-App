export const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Customers', path: '/customers' },
    { label: 'Pricing', path: '/pricing' },
];

export const featureCards = [
    {
        icon: '⚡',
        title: 'Workflow automation',
        text: 'Connect your tools and automate repetitive work so your team can focus on meaningful progress.',
    },
    {
        icon: '📊',
        title: 'Real-time analytics',
        text: 'Uncover performance trends, conversion signals, and pipeline health in one clear view.',
    },
    {
        icon: '🤝',
        title: 'Smarter collaboration',
        text: 'Align planning, execution, and feedback with context-rich tasks and shared ownership.',
    },
];

export const logos = ['Horizon', 'VentureOne', 'Northloop', 'SignalLabs', 'Coalesce'];

export const plans = [
    {
        name: 'Starter',
        price: '$29',
        suffix: '/seat',
        description: 'For focused teams building momentum.',
        items: ['Unlimited projects', 'Task automation', 'Basic analytics'],
        buttonText: 'Start free',
        featured: false,
    },
    {
        name: 'Growth',
        price: '$79',
        suffix: '/seat',
        description: 'For scaling organizations needing more control.',
        items: ['Advanced reporting', 'Custom automations', 'Team collaboration'],
        buttonText: 'Try Growth',
        featured: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        suffix: '',
        description: 'For large teams with security and onboarding needs.',
        items: ['Dedicated onboarding', 'Granular permissions', 'Enterprise SLA'],
        buttonText: 'Talk to sales',
        featured: false,
    },
];

export const testimonials = [
    {
        quote:
            'Northstar gave our leadership team a single operating rhythm. We launched three campaigns in half the time and saw a measurable lift in conversion.',
        initials: 'AL',
        name: 'Alicia Lee',
        role: 'VP of Growth, Northloop',
        alt: false,
    },
    {
        quote:
            'The reporting is incredibly clear. Our department managers can spot bottlenecks, reassign work instantly, and stay aligned without endless status meetings.',
        initials: 'MR',
        name: 'Marcus Reed',
        role: 'Ops Director, Coalesce',
        alt: true,
    },
];

export const solutionPoints = [
    'AI-generated summaries and weekly reports',
    'Custom dashboards for every function',
    'Rules-based alerts and task orchestration',
];
