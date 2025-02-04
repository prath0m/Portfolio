const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Pune Institute of Computer Technology',
                degree: 'Bachelor, Information Technology',
                detail: "Bachelor's Degree in Information Technology from Pune Institute of Computer Technology, Pune.",
                year: '2023-2026'
            },
            {
                id: 1,
                title: 'Government Polytechnic, Amravati',
                degree: 'Diploma, Computer Engineering',
                detail: "Completed High school in Computer Engineering from Government Polytechnic, Amravati.",
                year: '2020-2023'
            }
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Data DOg',
                role: 'Data Engineer Intern', 
                url: 'https://jmm.ltd/',
                desc: 'As a data developer, I use various tools to collect, store, and analyze data. I also work on data visualization and data warehousing.',
                year: '12/2024 - Present',
                location: 'Mumbai, Maharashtra'
            },
            {
                id: 2,
                title: 'Innokarma Solutions',
                role: 'Spring Boot Internee',
                url: 'no website',
                desc: 'As an Internee, I worked on Spring Boot, I learned how to create REST APIs using Spring Boot, also I worked on Microservices',
                year: '08/2024 - Present',
                location: 'Pune, Maharashtra'
            },
            {
                id: 3,
                title: 'Trainee Developer',
                role: 'python Developer',
                desc: "I work there as a python developer, there I learned how to do CRUD'S operations in python, also I worked on Machine Learning",
                year: '07/2023 - 09/2023',
                location: 'Amravati, Maharashtra'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
