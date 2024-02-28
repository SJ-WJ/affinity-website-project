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
            { name: "Our History", url: "#" },
            { name: "Our Mission", url: "#" },
            { name: "Our Impact", url: "#" },
            { name: "Our Donors", url: "#" },
        ],
    },
    {
        title: "What We Do",
        subItems: [
            { name: "Meet ups", url: "#" },
            { name: "Mentors Night", url: "#" },
            { name: "Mentorship", url: "#" },
            { name: "Community Engagement", url: "#" },
        ],
    },
    {
        title: "Get Involved",
        subItems: [
            { name: "Be a Mentor", url: "#" },
            { name: "Be a Mentee", url: "#" },
            { name: "Be a Donor", url: "#" },
            { name: "Volunteer Opportunities", url: "#" },
            { name: "Employment Opportunities", url: "#" },
        ],
    },
    {
        title: "Out There",
        subItems: [
            { name: "Blog", url: "#" },
            { name: "Testimonials", url: "#" },
            { name: "Social Media", url: "#" },
        ],
    }
]
