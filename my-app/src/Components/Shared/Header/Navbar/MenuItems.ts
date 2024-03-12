export interface SubItem{
    name: string;
    url: string;
}

export interface MenuItem{
    title: string;
    subItems: SubItem[];
}

export const menuItems: MenuItem[] = [
    {
        title: "Who We Are",
        subItems: [
            { name: "Our Story", url: "/our-story" },
            { name: "Our Mission", url: "/our-mission" },
            { name: "Our Impact", url: "/our-impact" },
            { name: "Our Funders & Partners", url: "/our-funders-partners" },
        ],
    },
    {
        title: "What We Do",
        subItems: [
            { name: "Meet ups", url: "/meet-ups" },
            { name: "Mentorship", url: "/mentorship" },
            { name: "Community Engagement", url: "/community-engagement" },
        ],
    },
    {
        title: "Get Involved",
        subItems: [
            { name: "Be a Mentor", url: "/be-a-mentor" },
            { name: "Be a Mentee", url: "/be-a-mentee" },
            { name: "Be a Donor", url: "/be-a-donor" },
            { name: "Volunteer Opportunities", url: "/volunteer-opportunities" },
            { name: "Employment Opportunities", url: "/employment-opportunities" },
        ],
    },
    {
        title: "Out There",
        subItems: [
            { name: "Calender", url: "/calendar" },
            { name: "Social Media", url: "/social-media" },
            { name: "Blog", url: "/blog" },
        ],
    }
];

