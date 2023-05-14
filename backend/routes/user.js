import Express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from 'cors';

const routes = Express.Router();

routes.use(cors());

let users = [];

routes.use(cors({
    origin: '*',
    methods: ['GET', "POST", 'DELETE', "PUT", "PATCH"],
}));

routes.get('/', (req, res) => {
    res.send(users)
});

routes.post('/', (req, res) => {
    const user = req.body;
    const newUser = { ...user, id: uuidv4() };
    users.push(newUser);
    res.send(`User with id ${newUser.id} has been added to the database.`);
});

routes.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id == id);
    if (!user) {
        res.status(404).send(`User with id ${id} was not found.`);
    } else {
        res.send(user);
    }
});

routes.delete('/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id == id);
    if (userIndex === -1) {
        res.status(404).send(`User with id ${id} was not found.`);
    } else {
        users.splice(userIndex, 1);
        res.send(`User with id ${id} has been removed from the database.`);
    }
});

routes.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { uname, email, age , gender  } = req.body;
    const userIndex = users.findIndex((user) => user.id == id);
    if (userIndex === -1) {
        res.status(404).send(`User with id ${id} was not found.`);
    } else {
        const user = users[userIndex];
        if (uname) user.uname = uname;
        if (email) user.email = email;
        if (gender) user.gender = gender;

        
        if (age) user.age = age;
        res.send(`User with id ${id} has been updated.`);
    }
});

export default routes;
