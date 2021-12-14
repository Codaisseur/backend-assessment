const homepage = `<html>
<body>
  <p><b>Base url:</b> https://coda-backend-challenge.herokuapp.com/</p>
  <h2>⚽ Football Teams API - Backend Challenge</h2>
  <h3>Here is a list of the endpoints available in this API:</h3>
  <p>User/auth endpoints</p>
  <ul>
  <li><b>POST</b> signup: /auth/signup, <b>expected request body</b>: { name: "string" email: "string" password: "string" }</li>
  <li><b>POST</b> login: /auth/login, <b>expected request body</b>: { email: "string" password: "string" }</li>
  </ul>
  <p>Teams endpoints</p>
  <ul>
    <li><b>GET</b> all teams: <a href="https://coda-backend-challenge.herokuapp.com/teams" target="_blank">/teams</a></li>
    <li><b>GET</b> team by id: with players <a href="https://coda-backend-challenge.herokuapp.com/teams/1" target="_blank">/teams/:teamId</a></li>
    <li><b>PUT</b> update titles: /teams/:teamId, <b>expected request body</b>: { titles: "number" }</li>
  </ul>
  <p>Players endpoints</p>
  <ul>
    <li><b>GET</b> all players: <a href="https://coda-backend-challenge.herokuapp.com/players" target="_blank">/players</a></li>
    <li><b>GET</b> player by id: <a href="https://coda-backend-challenge.herokuapp.com/players/1" target="_blank">/players/:id</a></li>
    <li><b>GET</b> player above x age: <a href="https://coda-backend-challenge.herokuapp.com/players/filter?age=35" target="_blank">/players/filter?age=35</a></li>
    <li><b>POST</b> player: /players, <b>expected request body</b>: { name: "string" age: "number" nationality: "string" profilePicture: "string" retired: "boolean" teamId: "number" }</li>
    <li><b>DELETE</b> player by id: /players/:id, <b>proctected route</b></li>
  </ul>
</body>
</html>`;

module.exports = homepage;
