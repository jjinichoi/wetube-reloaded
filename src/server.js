import express from "express"; //"express"라는 package라는 이름으로 import

const PORT = 4000;

const app = express();
//express application(app이 아닌 다른 이름으로 해도되지만 관습이기때문에 되도록 app으로)

//application설정
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); //어떤 method가 어느 URL로 향하는지
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Nat Allowed</h1>");
  }
  next();
};
const handlehome = (req, res) => {
  return res.send("hi");
};
const handledProtected = (req, res) => {
  return res.send("welcome to private lounge.");
};

app.use(loggerMiddleware);
app.use(privateMiddleware);
app.get("/", handlehome); //누군가가 root page로 get request를 보낸다면, 함수 작동
app.get("/protected", handledProtected);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
// 서버가 사람들이 뭐가를 요청할 때까지 기다리게 해야된다.
//외부 접속을 listen
