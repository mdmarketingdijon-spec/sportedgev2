module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }

  const name = req.query.name;
  const debug = req.query.debug;

  try {
    // Tester différents endpoints pour trouver lequel fonctionne
    const KEY = 'decea1e981mshaa417cf0edc7912p1f53c3jsn09df27ecfa84';
    const HOST = 'exercisedb.p.rapidapi.com';
    const headers = { 'x-rapidapi-key': KEY, 'x-rapidapi-host': HOST };

    if (debug === 'list') {
      // Lister tous les exercices disponibles (premiers)
      const r = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=5&offset=0', { headers });
      const d = await r.json();
      res.status(200).json({ status: r.status, data: d });
      return;
    }

    if (debug === 'bodyparts') {
      const r = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', { headers });
      const d = await r.json();
      res.status(200).json({ status: r.status, data: d });
      return;
    }

    if (debug === 'equipment') {
      const r = await fetch('https://exercisedb.p.rapidapi.com/exercises/equipmentList', { headers });
      const d = await r.json();
      res.status(200).json({ status: r.status, data: d });
      return;
    }

    // Recherche par nom
    const searchName = name || 'squat';
    const url = `https://exercisedb.p.rapidapi.com/exercises/name/${encodeURIComponent(searchName)}?limit=1&offset=0`;
    const r = await fetch(url, { headers });
    const d = await r.json();
    
    if (Array.isArray(d) && d.length > 0 && d[0].gifUrl) {
      res.status(200).json({ gifUrl: d[0].gifUrl, name: d[0].name });
    } else {
      res.status(200).json({ debug: true, status: r.status, raw: d, url: url });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
