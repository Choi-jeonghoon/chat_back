import { Server } from 'socket.io';

const setupSocketServer = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    io.on('connection', (socket) => {
        console.log('새로운 클라이언트가 연결되었습니다.');

        socket.on('message', (data) => {
            console.log('클라이언트로부터 메시지를 받았습니다:', data);
            io.emit('message', data);
        });

        socket.on('disconnect', () => {
            console.log('클라이언트 연결이 종료되었습니다.');
        });
    });
};

export default setupSocketServer;
