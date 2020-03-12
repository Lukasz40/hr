
const configIndex = [
    {   
        id: 1,
        name: "devLangs",
        title: "Języki programowania/biblioteki/frameworki/technologie",
        inputList: [
            {
                name: "devLang",
                type: "select",
                label: "Nazwa",
                editable: false
            },
            {
                name: "devExperience",
                type: "select",
                label: "Doświadczenie w latach",
                editable: true,
                dictionary: "experienceDictionary"
            },
            {
                name: "devLastUse",
                type: "select",
                label: "Ostatnie użycie (rok)",
                editable: true,
                dictionary: "lastUseDictionary"
            }
        ],
        dictionary: ["HTML","HTML5","CSS","CSS3","Less","Sass","JavaScript","TypeScript","jQuery","XML","Velocity","Bootstrap","XSLT",
        "PHP","Python","ReactJS","Angular","SQL","C","C++","C #",".NET","Java","Hibernate","Spring","Spring Boot","Spring Data","Spring Security",
        "Web Services","RESTful Web Services","Apache Tomcat","Thymeleaf"],
    },
    {
        id: 2,
        name: "tools",
        title: "Narzędzia",
        inputList: [
            {
                name: "tool",
                type: "select",
                label: "Nazwa",
                editable: false
            },
            {
                name: "toolExperience",
                type: "select",
                label: "Doświadczenie w latach",
                editable: true,
                dictionary: "experienceDictionary"
            },
            {
                name: "toolLastUse",
                type: "select",
                label: "Ostatnie użycie (rok)",
                editable: true,
                dictionary: "lastUseDictionary"
            }
        ],
        dictionary: ["FTL","GIT","SVN","RWD","Freemarker","Maven","Jenkins","IntelliJ IDEA","Eclipse","Sonar","SoapUI","Gradle","Jira",
        "Confluence","Ansible","Inne (jakie?)"],
    },
    {
        id: 3,
        name: "database",
        title: "Bazy danych",
        inputList: [
            {
                name: "databaseName",
                type: "select",
                label: "Nazwa",
                editable: false
            },
            {
                name: "databaseExperience",
                type: "select",
                label: "Doświadczenie w latach",
                editable: true,
                dictionary: "experienceDictionary"
            },
            {
                name: "databaseLastUse",
                type: "select",
                label: "Ostatnie użycie (rok)",
                editable: true,
                dictionary: "lastUseDictionary"
            }
        ],
        dictionary: ["mySQL","Oracle","PostgreSQL"],
    },
    {
        id: 4,
        name: "others",
        title: "Inne (systemy operacyjne, platformy)",
        inputList: [
            {
                name: "otherName",
                type: "select",
                label: "Nazwa",
                editable: false
            },
            {
                name: "otherExperience",
                type: "select",
                label: "Doświadczenie w latach",
                editable: true,
                dictionary: "experienceDictionary"
            },
            {
                name: "otherLastUse",
                type: "select",
                label: "Ostatnie użycie (rok)",
                editable: true,
                dictionary: "lastUseDictionary"
            }
        ],
        dictionary: ["UX/UI","Wordpress","Liferay","Eclipse","macOS","Linux","Windows"],
    },
    {
        id: 5,
        name: "education",
        title: "Wykształcenie",
        inputList: [
            {
                name: "school",
                type: "text",
                label: "Nazwa uczelni",
                editable: true
            },
            {
                name: "years",
                type: "text",
                label: "Od - do ( lata)",
                editable: true
            }
        ],
    },
    {
        id: 6,
        name: "languages",
        title: "Języki",
        inputList: [
            {
                name: "languageName",
                type: "text",
                label: "Język",
                editable: true
            },
            {
                name: "languageLevel",
                type: "text",
                label: "Poziom",
                editable: true
            }
        ],
    },
    {
        id: 7,
        name: "projects",
        title: "Projekty",
        inputList: [
            {
                name: "projectName",
                type: "text",
                label: "Nazwa pracodawy/klienta",
                editable: true
            },
            {
                name: "projectDescription",
                type: "text",
                label: "Opis projektu i prac w projekcie",
                editable: true
            },
            {
                name: "projectTechnologies",
                type: "text",
                label: "Spis użytych technologii",
                editable: true
            }
        ],
    },
    {
        id: 8,
        name: "certificates",
        title: "Kursy i certyfikaty",
        inputList: [
            {
                name: "certificateName",
                type: "text",
                label: "Nazwa",
                editable: true
            },
            {
                name: "certificateYear",
                type: "text",
                label: "Rok",
                editable: true
            }
        ],
    }
]

export default configIndex;