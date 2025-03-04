const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

const getAISuggestions = async (prompt) => {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        max_tokens: 150,
    });
    return response.data.choices[0].text;
};

module.exports = { getAISuggestions };