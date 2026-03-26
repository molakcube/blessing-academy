import express, { Request, Response } from 'express';

const app = express();
const PORT = 4060; // 사용할 포트 번호

app.use(express.json());

// 누군가 메인 주소('/')로 접속했을 때 보여줄 응답
app.get('/', (req: Request, res: Response) => {
  res.send('블레싱 아카데미 백엔드 서버가 정상적으로 켜졌습니다! 🚀');
});

// 서버를 켜고 귀를 여는(Listening) 코드
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 돌아가고 있습니다.`);
});