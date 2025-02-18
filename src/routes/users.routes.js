import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => {
    res.send('Getting users');
});

router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send('Getting user id' + id);
});

router.post('/users', (req, res) => {
    res.send('Creating users');
});

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send('Deleting user' + id);
});

router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send('Updating user' + id);
});

export default router;