import { color } from './../../../client/classroom/node_modules/@mui/system/palette/palette.d';
import teacher_interface from './teacher';

export default interface course_interface {
    id: number,
    name: string,
    descriptionHeading: string,
    image: string, 
    color: string,
    teacher: teacher_interface
}