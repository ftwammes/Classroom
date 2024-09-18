import teacher_interface from './teacher';

export default interface course_interface {
    id: number,
    name: string,
    descriptionHeading: string,
    teacher: teacher_interface
}