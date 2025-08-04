const Intern = require('../models/Intern');

const getInternInfo = async (req, res) => {
    try{
        const { referralCode } = req.params;

        const intern = await Intern.findOne({ referralCode });

        if(!intern) {
            return res.status(404).json({ message: 'Intern not found' });
        }

        res.json(intern);
    } catch (err) {
        console.error('Error fetching intern info:', err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getInternInfo };