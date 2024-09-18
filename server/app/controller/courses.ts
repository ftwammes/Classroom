import { Request, Response } from "express";
import fs from 'node:fs/promises';

import mock_interface from "../interfaces/mock";
import course_interface from "../interfaces/course";
import teacher_interface from "../interfaces/teacher";

export class Courses {
    public async getAll(req: Request, res: Response) {
        let courses: course_interface[] = [];

        const mock : mock_interface[] = await this.readMock();

        mock.forEach((course: mock_interface) => {
            let teacher : teacher_interface = {
                id: course.teacher.id,
                name: course.teacher.name,
                image: course.teacher.image
            };

            courses.push({
                id: course.id,
                name: course.name,
                descriptionHeading: course.descriptionHeading,
                teacher,
            });
        });

        if (courses.length == 0) {
            return res.status(404).json({ error: 'Courses not found!' });
        }

        return res.json({
            courses
        });
    }

    public async get(req: Request, res: Response) {
        const mock : mock_interface[] = await this.readMock();

        var courses : course_interface | undefined = mock.find((course: mock_interface) => course.id == parseInt(req.params.id));
        
        if (!courses) {
            return res.status(404).json({ error: 'Course not found!' });
        }

        return res.json(courses);
    }

    private async readMock() {
        let mock = await fs.readFile('./mock/mock.json', { encoding: 'utf8' });
        return await JSON.parse(mock).courses;
    }
}