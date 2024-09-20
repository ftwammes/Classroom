import { Request, Response } from "express";
import fs from 'node:fs/promises';

export class User {
    public async checkCredential(req: Request, res: Response) {
        this.readMock().then((users) => {
            let user = users.find((user: any) => (user.email === req.body.credential) || (user.phone === req.body.credential));
            if (user) {
                return res.json({ success: 'User found!' });
            }
            return res.status(403).json({ error: 'User not found!' });
        });
    }

    public async login(req: Request, res: Response) {
        this.readMock().then((users) => {
            let user = users.find((user: any) => ((user.email === req.body.credential) || (user.phone === req.body.credential)) && user.password === req.body.password);
            if (user) {
                return res.json({ success: 'Login succeed!' });
            }
            return res.status(403).json({ error: 'Wrong Password!' });
        });
    }

    private async readMock() {
        let mock = await fs.readFile('./mock/users.json', { encoding: 'utf8' });
        return await JSON.parse(mock).users;
    }
}