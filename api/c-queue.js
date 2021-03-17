function test(req, res) {
  if (req.method !== "POST") {
    res.json({error: "Unsupported method"});
    return false;
  }
  
  res.json(req.body);  
}

export default test;
