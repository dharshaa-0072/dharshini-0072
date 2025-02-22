const { getAISuggestions } = require('./services/aiService');

const getSuggestions = (req, res) => {
    const { prompt } = req.body;
    getAISuggestions(prompt)
        .then((suggestions) => res.json(suggestions))
        .catch((error) => res.status(500).json({ error: 'Failed to get suggestions' }));
};

module.exports = { getSuggestions };