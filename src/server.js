import express from "express"; //"express"라는 package라는 이름으로 import
import morgan from "morgan";

const PORT = 4000;

const app = express(); //express application(app이 아닌 다른 이름으로 해도되지만 관습이기때문에 되도록 app으로)

//application설정
const logger = morgan("dev");

app.use(logger);
//누군가가 root page로 get request를 보낸다면, 함수 작동

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User");
userRouter.get("/edit", handleEditUser);

//2. 이 라우터 안에는 "/watch"라는 url이 하나 있으면 express가 handleWatchVideo함수를 실행
//3. Watch Video 반환(응답)
const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");
videoRouter.get("/watch", handleWatchVideo);

//1. 라우터가 express한테 누군가 "/videos"로 시작하는 url에 접근하면 express는 videoRouter변수에 있는 컨트롤러를 찾게함
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

//외부 접속 listen
const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
// 서버가 사람들이 뭐가를 요청할 때까지 기다리게 해야된다.
