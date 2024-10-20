import { color } from './../../node_modules/@mui/system/palette/palette.d';
import teacher_interface from './teacher'

export default interface course_interface {
    id: number,
    name: string,
    image: string,
    color: string,
    descriptionHeading: string,
    teacher: teacher_interface, 
    activities: [{
        id: number,
        dueTime: string,
        dayOfWeek: string,
        title: string
    }]
}