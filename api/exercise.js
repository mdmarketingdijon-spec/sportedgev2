module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const name = req.query.name;
  if (!name) {
    res.status(400).json({ error: 'name required' });
    return;
  }

  try {
    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${encodeURIComponent(name)}?limit=1&offset=0`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'decea1e981mshaa417cf0edc7912p1f53c3jsn09df27ecfa84',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    });

    if (!response.ok) {
      throw new Error('RapidAPI HTTP ' + response.status);
    }

    const data = await response.json();
    const exercises = Array.isArray(data) ? data : (data.exercises || []);

    if (exercises.length > 0 && exercises[0].gifUrl) {
      res.status(200).json({ 
        gifUrl: exercises[0].gifUrl, 
        name: exercises[0].name,
        target: exercises[0].target 
      });
    } else {
      res.status(404).json({ error: 'No exercise found for: ' + name });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
