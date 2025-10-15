## 디자인 시스템
Figma Tokens → Style Dictionary 변환 → SCSS 변수로 자동 반영

### 토큰만 업데이트
```bash
npm run tokens:build
```
#### or
### 전체 빌드
```bash
npm run build
```
### 개발 서버 실행
```bash
npm install
npm run dev
```

- Style Dictionary가  css변수 + js객체 변환해주는 빌드 도구
- styles/tokens.scss : SCSS 에서 사용하는 전역 변수 파일 (`var(--japan)` 형태)
- styles/tokens.js : js/ts 에서 import 사용하는 토큰 데이터 (`tokens.japan` 형태)


