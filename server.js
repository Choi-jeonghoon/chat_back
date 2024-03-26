/*
    node.js에서 ES모듈을 사용하는 방법은 package.json에 "type": "module"를 추가해준다.
    또한 import할때 또한 확장자까지 작성해줘야된다.
*/
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import cors from 'cors';
import setupSocketServer from './controllers/socketController.js';

dotenv.config(); // dotenv 설정 로드

const app = express();
app.use(cors());

const server = http.createServer(app);

// 소켓 서버 설정
setupSocketServer(server);

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});

