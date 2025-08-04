const Intern = require('../models/Intern');

const getLeaderboard = async (req, res) => {
    try {
        const topInterns = await Intern.find().sort({ donations: -1 }).limit(10);
        res.json(topInterns);
    } catch (err) {
        console.error('Error fetching leaderboard:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getLeaderboard };
