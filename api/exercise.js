module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  const name = req.query.name;
  if (!name) { res.status(400).json({ error: 'name required' }); return; }

  try {
    const KEY = 'decea1e981mshaa417cf0edc7912p1f53c3jsn09df27ecfa84';
    const HOST = 'exercisedb.p.rapidapi.com';
    const headers = { 'x-rapidapi-key': KEY, 'x-rapidapi-host': HOST };

    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${encodeURIComponent(name)}?limit=1&offset=0`;
    const r = await fetch(url, { headers });
    const data = await r.json();
    const exercises = Array.isArray(data) ? data : [];

    if (exercises.length > 0) {
      const ex = exercises[0];
      res.status(200).json({
        name:         ex.name,
        bodyPart:     ex.bodyPart,
        target:       ex.target,
        equipment:    ex.equipment,
        instructions: ex.instructions || [],
        description:  ex.description || '',
        gifUrl:       ex.gifUrl || null
      });
    } else {
      res.status(404).json({ error: 'No exercise found for: ' + name });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
