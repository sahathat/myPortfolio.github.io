import projects from './projects';

const shuffle = (array) => {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array
}

const projectDetails = [
    {
        id: 1,
        singleProjectHeader: {
            singleProjectTitle: 'Leafy',
            singleProjectDate: '8 Aug, 2023 - 29 Apr, 2024',
            singleProjectTag: 'Web Application / Machine Learning / Backend Development / Database Administrator',
        },
        projectImages: [
            {
                id: 1,
                title: 'Shop Page',
                img: require('@/assets/images/projects/1-Leafy.png'),
            },
            {
                id: 2,
                title: 'Product Detail Page',
                img: require('@/assets/images/projects/1-Leafy-1.png'),
            },
            {
                id: 3,
                title: 'Review & Recommender Page',
                img: require('@/assets/images/projects/1-Leafy-2.png'),
            },
            {
                id: 4,
                title: 'Order Page',
                img: require('@/assets/images/projects/1-Leafy-3.png'),
            },
            {
                id: 5,
                title: 'Profile Page',
                img: require('@/assets/images/projects/1-Leafy-4.png'),
            },
            {
                id: 6,
                title: 'Gallery Content Page',
                img: require('@/assets/images/projects/1-Leafy-5.png'),
            },
            {
                id: 7,
                title: 'Gallery List Page',
                img: require('@/assets/images/projects/1-Leafy-6.png'),
            },
            {
                id: 8,
                title: 'Product Creation Page',
                img: require('@/assets/images/projects/1-Leafy-7.png'),
            },
            {
                id: 9,
                title: 'Supplier Order Page',
                img: require('@/assets/images/projects/1-Leafy-8.png'),
            }
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'KMUTT',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Fullstack Development, Recommender System, Infrastructure',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://capstone23.sit.kmutt.ac.th/pl4/',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Leafy is a Web Application for online trading of gardening and gardening products, which facilitates the general public who likes and is interested in planting trees and gardening design. look like Shopee platform',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Vue.js',
                        'CSS',
                        "Node.js (Express.js)",
                        'Prisma.js',
                        'MySQL',
                        'Minio',
                        'Docker',
                        'Git',
                        "Nginx"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Made features recommender system to recommend products who like or interest with user, product and rating review by using content-based filtering like weight ranking model on Node.js.',
                },
                {
                    id: 2,
                    details:
                        'Made product customization with item in each SKU. Make sure seller can refill stock and change price in each SKU and detail.',
                },
                {
                    id: 3,
                    details:
                        'Made product list who can filter, sort data and made into pagination list before response into dynamic web browser.',
                },
                {
                    id: 4,
                    details:
                        'Made cart and order list with multiple store who can add item on cart in each group store or place on order with item and address. check status in each order in store before paid, prepared package, transited, received item and reviewed with optional.',
                },
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 2,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 3,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 4,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: shuffle(projects.filter(pj => pj.id !== 1)).slice(0,4)
        },
    },

    {
        id: 2,
        singleProjectHeader: {
            singleProjectTitle: 'IT Help Desk',
            singleProjectDate: '31 May 2023 - 4 Aug, 2023',
            singleProjectTag: 'Web Application / Dashboard / Full-stack development / Database Administrator',
        },
        projectImages: [
            {
                id: 1,
                title: 'Issue & Trouble Shooting Page',
                img: require('@/assets/images/projects/2-ITHelpDesk.png')
            },
            {
                id: 2,
                title: 'Admin Issue Page',
                img: require('@/assets/images/projects/2-ITHelpDesk-1.png')
            },
            {
                id: 3,
                title: 'Home Page',
                img: require('@/assets/images/projects/2-ITHelpDesk-2.png')
            },
            {
                id: 4,
                title: 'Issue Summarization Page',
                img: require('@/assets/images/projects/2-ITHelpDesk-3.png')
            },
            {
                id: 5,
                title: 'Admin Dashboard Page',
                img: require('@/assets/images/projects/2-ITHelpDesk-4.png')
            }
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Moral center (Public Organization)',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Fullstack Development, Power BI, IT Support',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Moral IT Helpdesk is web application who use to notify or request issue about hardware trouble shooting and media. When admin has requested from notification system, they fix issue and response to user and organization. So every user who get fix the data on dashboard that summarize for understand about issue and resolution about organization',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Vue.js',
                        'Tailwind CSS',
                        "Node.js (Express.js)",
                        'mysql 2',
                        'MySQL',
                        'Google Firebase',
                        'Power BI',
                        "Power Automate",
                        'Docker',
                        'Git',
                        "Nginx"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Made notification system for user request in Admin service.',
                },
                {
                    id: 2,
                    details:
                        'Use Power BI for summarize user admin data by auto refresh and Show on admin page.',
                },
                {
                    id: 3,
                    details:
                        'Made recommendation articles service with upload file in each session, and show sequence data.',
                }
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 2,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 3,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 4,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: shuffle(projects.filter(pj => pj.id !== 2)).slice(0,4)
        },
    },

    {
        id: 3,
        singleProjectHeader: {
            singleProjectTitle: 'Google Certificate Salifort Motors Company - Why employee left?',
            singleProjectDate: 'August, 2023 - December, 2023',
            singleProjectTag: 'Explorational Data Analysis / Dashboard / Machine Learning / Hypothesis testing',
        },
        projectImages: [
            {
                id: 1,
                title: 'Excutive summary',
                img: require('@/assets/images/projects/3-SalifortMotors.png')
            },
            {
                id: 2,
                title: 'EDA',
                img: require('@/assets/images/projects/3-SalifortMotors-1.png')
            },
            {
                id: 3,
                title: 'Dashboard',
                img: require('@/assets/images/projects/3-SalifortMotors-2.png')
            },
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Google Certificate program by KMUTT and AIS data team',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Data insight, Excutive summary report, Dashboard, Hypothesis testing, Predict left employee',
                },
                {
                    id: 3,
                    title: 'Github',
                    details: 'https://github.com/sahathat/GoogleCertADA',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Moral IT Helpdesk is web application who use to notify or request issue about hardware trouble shooting and media. When admin has requested from notification system, they fix issue and response to user and organization. So every user who get fix the data on dashboard that summarize for understand about issue and resolution about organization',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Tableau',
                        'Jupyter lab',
                        "Tensorflow"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Found optimize result when predict class left employee with each model assumption and use feature engineering in detail.',
                },
                {
                    id: 2,
                    details:
                        'In model use follow by Logistic regression, Decision tree, Random forest tree and Artificial neural network',
                },
                {
                    id: 3,
                    details:
                        'Used Tableau for describing and summarizing why employee saliforted left?',
                },
                {
                    id: 4,
                    details:
                        'Implement the insight data for storytelling and improving decision in organization',
                }
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 2,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 3,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 4,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: shuffle(projects.filter(pj => pj.id !== 3)).slice(0,4)
        },
    },

    {
        id: 4,
        singleProjectHeader: {
            singleProjectTitle: 'OASIP (Online Appointment Scheduling System For Integrated Project Clinics)',
            singleProjectDate: 'April, 2022 - December, 2022',
            singleProjectTag: 'Frontend web development/ Backend web development',
        },
        projectImages: [
            {
                id: 1,
                title: 'Home Page',
                img: require('@/assets/images/projects/4-OASIP.png')
            },
            {
                id: 2,
                title: 'login Page',
                img: require('@/assets/images/projects/4-OASIP-1.png')
            },
            {
                id: 3,
                title: 'Reservation Page',
                img: require('@/assets/images/projects/4-OASIP-2.png')
            },
            {
                id: 4,
                title: 'Reservation Detail Page',
                img: require('@/assets/images/projects/4-OASIP-3.png')
            },
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'KMUTT',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Backend development, Dev Ops with intregation',
                },
                {
                    id: 3,
                    title: 'Github',
                    details: 'https://github.com/sahathat/OASIP-AT-3',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'OASIP (Online Appointment Scheduling System For Integrated Project Clinics) is web application for reservation lecturer who need to consult the issue and solving the problem',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Vue.js',
                        'BootStrap',
                        'Java (Spring Boot)',
                        "MySQL",
                        "Docker",
                        "Git",
                        "Nginx"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Validated time non-overlap',
                },
                {
                    id: 2,
                    details:
                        'Used spring security implement to authentication and authorization in each role such as student, lecturer and admin',
                }
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 2,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 3,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 4,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: shuffle(projects.filter(pj => pj.id !== 4)).slice(0,4)
        },
    },

    {
        id: 5,
        singleProjectHeader: {
            singleProjectTitle: 'CSGO winner classification',
            singleProjectDate: 'November, 2023 - December, 2023',
            singleProjectTag: 'Machine Learning, Simple Report',
        },
        projectImages: [
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Google Certificate program by KMUTT and AIS data team',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Machine Learning',
                },
                {
                    id: 3,
                    title: 'Website',
                    details: 'https://github.com/sahathat/dataSci/blob/main/Bigdata/projects/Group9_Report-Group9.pdf',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Predict wining team by using some features have the most important in each sample round for predict class team and evaluation scoring by compared accuracy and time with normal python and pyspark',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Jupyter lab',
                        "PySpark"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Used python and pyspark to consistency.',
                },
                {
                    id: 2,
                    details:
                        'Used Neural Network like Multi layer perceptron to predict wining class and evaluation metric',
                }
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 2,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 3,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 4,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: shuffle(projects.filter(pj => pj.id !== 5)).slice(0,4)
        },
    },
    {
        id: 6,
        singleProjectHeader: {
            singleProjectTitle: 'SIT hello world - Submarine',
            singleProjectDate: 'October, 2020 - November, 2020',
            singleProjectTag: 'Game development',
        },
        projectImages: [
            {
                id: 1,
                title: 'Menu',
                img: require('@/assets/images/projects/6-helloworld.png')
            },
            {
                id: 2,
                title: 'Gameplay 1',
                img: require('@/assets/images/projects/6-helloworld-1.png')
            },
            {
                id: 3,
                title: 'Gameplay 2',
                img: require('@/assets/images/projects/6-helloworld-2.png')
            },
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'KMUTT',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Game development',
                },
                {
                    id: 3,
                    title: 'Github',
                    details: 'https://github.com/Hello-Dolphin/hellodolphin-gameproject-8/tree/master?tab=readme-ov-file',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'Develop game development for playing as role submarine and will pass obstacles before find treasure at the end',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Phaser3.js',
                        'Yarn',
                        "Nginx",
                        "Docker"
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'Implemented game image and sprite from designer to make movement and animation',
                },
                {
                    id: 2,
                    details:
                        'Developed game to interesting and response to user with any page',
                }
            ],
            socialSharingsHeading: 'Share This',
            socialSharings: [
                {
                    id: 1,
                    name: 'Instagram',
                    icon: 'instagram',
                    url: 'https://instagram.com/',
                },
                {
                    id: 2,
                    name: 'Facebook',
                    icon: 'facebook',
                    url: 'https://facebook.com/',
                },
                {
                    id: 3,
                    name: 'LinkedIn',
                    icon: 'linkedin',
                    url: 'https://linkedin.com/',
                },
                {
                    id: 4,
                    name: 'Youtube',
                    icon: 'youtube',
                    url: 'https://www.youtube.com/',
                },
            ],
        },
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: shuffle(projects.filter(pj => pj.id !== 6)).slice(0,4)
        },
    }
];

export default projectDetails;
