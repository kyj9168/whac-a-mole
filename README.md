

## 두더지 잡기

```
version 0.0.1
```


## 작동 방법
```
npm run dev : 개발 버전 실행
npm run  build : 빌드
npm start  : pm2 무중단 운영
```
## mysql 쿼리
```sql
CREATE DATABASE insurance_db;

CREATE TABLE ranking (
    id INT PRIMARY KEY AUTO_INCREMENT comment 'id',
    nickname VARCHAR(100) DEFAULT '' NOT NULL comment '닉네임',
    score INT DEFAULT 0 NOT NULL comment '점수'
) ENGINE = InnoDB CHARSET = utf8 comment '랭킹';
```