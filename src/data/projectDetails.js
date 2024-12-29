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
            singleProjectTitle: 'Gofive Product',
            singleProjectDate: '2 Sep, 2024 - 27 Dec, 2024',
            singleProjectTag: 'LucA / Card Inventory / RFID Face recogination',
        },
        projectImages: [
            {
                id: 1,
                title: 'LucA console',
                img: require('@/assets/images/projects/7-Gofive-Evidence1.png'),
            },
            {
                id: 2,
                title: 'LucA main',
                img: require('@/assets/images/projects/7-Gofive-Evidence2.png'),
            },
            {
                id: 3,
                title: 'LucA file progress',
                img: require('@/assets/images/projects/7-Gofive-Evidence3.png'),
            },
            {
                id: 4,
                title: 'Stock report excel',
                img: require('@/assets/images/projects/7-Gofive-Evidence4.png'),
            },
            {
                id: 5,
                title: 'Stock report pdf',
                img: require('@/assets/images/projects/7-Gofive-Evidence5.png'),
            },
            {
                id: 6,
                title: 'Face recogination testing',
                img: require('@/assets/images/projects/7-Gofive-Evidence6.png'),
            }
        ],
        projectInfo: {
            clientHeading: 'Project Info',
            companyInfos: [
                {
                    id: 1,
                    title: 'Company Name/University',
                    details: 'Gofive',
                },
                {
                    id: 2,
                    title: 'Responsibility',
                    details: 'Securities operation system, Backend development',
                }
            ],
            objectivesHeading: 'Objective',
            objectivesDetails:
                'To design print layouts and develop software for verifying the accuracy of printed securities and other document types, ensuring precise and timely delivery to clients while optimizing the production process. Additionally, to support card production by generating comprehensive reports summarizing results.',
            technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'C#/.Net (ASP.Net)',
                        'MS SQL Server',
                        "Python (opercv2)",
                        '.Net Framework',
                        'Inspire Design (PNet)',
                        'Rabbit MQ',
                    ],
                },
            ],
            projectDetailsHeading: 'Challenge',
            projectDetails: [
                {
                    id: 1,
                    details:
                        'LucA: To design print layouts and develop software for verifying the accuracy of printed securities and other document types, ensuring precise and timely delivery to clients while optimizing the production process. Additionally, to support card production by generating comprehensive reports summarizing results.',
                },
                {
                    id: 2,
                    details:
                        'LucA: To manage sales and client communication by coordinating the development of new printing products for securities. This involves transforming the data into a format suitable for production, followed by client approval and testing of print positions. The process includes thorough QA checks and system integration via Unit Tests. Ensuring accuracy at every stage is crucial for the successful creation of the product.',
                },
                {
                    id: 3,
                    details:
                        'LucA: To resolve bugs or errors in the system through data control by identifying the root cause and reporting it to the management. In some cases, this may require fixing issues within the system or addressing discrepancies in the clien\'s data.',
                },
                {
                    id: 4,
                    details:
                        'PNet: To utilize the specialized software, Inspire Designer, for designing and editing print layouts that serve as templates for printing. This program supports handling large volumes of client data for each product, ensuring efficient and scalable production.',
                },
                {
                    id: 5,
                    details:
                        'LucA: In the securities work for SCBS, the Balance Statement is generated by consolidating data from multiple files. This requires developing a new class to handle the integration of data from various sources and modifying the system to support the efficient production of print files. The system is designed to produce over 600,000 sets per year within a fast turnaround time, ensuring accurate and timely output.',
                },
                {
                    id: 6,
                    details:
                        'Card Inventory: To create an API for generating Excel reports and integrate it with the requirements provided by the Project Manager. The API should ensure consistency in the data and feed the results into a dashboard for easy tracking and visualization of key metrics and progress.',
                },
                {
                    id: 7,
                    details:
                        'RFID Face Recogination: To develop a Python-based face detection system utilizing RFID and a research-specific model to achieve an accuracy rate above 99%. The system should effectively detect faces and generate summary results, incorporating advanced techniques for improved face recognition and prediction.',
                }
            ]
        }
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
            ]
        }
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
            ]
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
            ]
        }
    },

    {
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
                    title: 'Github',
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
            ]
        }
    },
    {
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
            ]
        }
    }
];

function addIncrementingIds(projectArray) {
    return projectArray.map((project, index) => ({
        id: index + 1, // Add an `id` property starting from 1
        ...project,
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
        relatedProject: {
            relatedProjectsHeading: 'Related Projects',
            relatedProjects: shuffle(projects.filter(pj => pj.id !== index + 1)).slice(0,4)
        },
	}));
}
  
const updatedProjectDetails = addIncrementingIds(projectDetails);

export default updatedProjectDetails;
