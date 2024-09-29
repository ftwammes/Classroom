export default interface mock_interface {
    id: number,
    name: string,
    image: string,
    color: string,
    teacher: {
        id: number,
        name: string,
        image: string
    },
    descriptionHeading: string,
    ownerId: number,
    creationTime: string,
    updateTime: string,
    courseState: string,
    alternateLink: string,
    teacherGroupEmail: string,
    courseGroupEmail: string,
    guardiansEnabled: boolean,
    calendarId: string,
    gradebookSettings: {
        calculationType: string,
        displaySetting: string
    },
    announcements: [
        {
            courseId: number,
            id: number,
            text: string,
            materials: [],
            state: string,
            alternateLink: string,
            creationTime: string,
            updateTime: string,
            creatorUserId: number
        }
    ],
    activities: [
        {
            courseId: number,
            id: number,
            title: string,
            description: string,
            state: string,
            alternateLink: string,
            creationTime: string,
            updateTime: string,
            dueDate: {
                year: number,
                month: number,
                day: number
            },
            dueTime: {
                hours: number,
                minutes: number
            },
            maxPoints: number,
            workType: string,
            submissionModificationMode: string,
            creatorUserId: number,
            topicId: number
        }
    ]
}