# fake-ff

Fake Free Fire lobby card generator — support bot WA, Telegram, website, dan lainnya.

## Preview

<img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/Assets/main/Image/IMG_20260605_061843_412.jpg" width="250"/>

## Installation

```bash
npm install fake-ff
```

## Usage

```javascript
const generateFF = require('fake-ff')

// Custom username & lobby
const result = await generateFF({
  username: 'Michelle',
  lobby: 5
})

// Custom username, lobby random
const result = await generateFF({
  username: 'Michelle'
})

console.log(result)
// {
//   status: 'success',
//   code: 200,
//   username: 'Michelle',
//   lobby: 5,
//   result: './fake-ff/Michelle.png'
// }
```

## Parameters

| Parameter    | Type   | Required | Default | Description |
|--------------|--------|----------|---------|-------------|
| `username`   | string | No       | Player  | Nama player (max 20 karakter) |
| `lobby`      | number | No       | random  | Nomor lobby (1-30), kosong = random |
| `outputDir`  | string | No       | ./      | Folder output file PNG |

## Available Lobbies

| Lobby | Preview |
|-------|---------|
| 1 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/1.jpg" width="150"/> |
| 2 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/2.jpg" width="150"/> |
| 3 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/3.jpg" width="150"/> |
| 4 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/4.jpg" width="150"/> |
| 5 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/5.jpg" width="150"/> |
| 6 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/6.jpg" width="150"/> |
| 7 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/7.jpg" width="150"/> |
| 8 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/8.jpg" width="150"/> |
| 9 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/9.jpg" width="150"/> |
| 10 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/10.jpg" width="150"/> |
| 11 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/11.jpg" width="150"/> |
| 12 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/12.jpg" width="150"/> |
| 13 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/13.jpg" width="150"/> |
| 14 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/14.jpg" width="150"/> |
| 15 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/15.jpg" width="150"/> |
| 16 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/16.jpg" width="150"/> |
| 17 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/17.jpg" width="150"/> |
| 18 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/18.jpg" width="150"/> |
| 19 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/19.jpg" width="150"/> |
| 20 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/20.jpg" width="150"/> |
| 21 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/21.jpg" width="150"/> |
| 22 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/22.jpg" width="150"/> |
| 23 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/23.jpg" width="150"/> |
| 24 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/24.jpg" width="150"/> |
| 25 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/25.jpg" width="150"/> |
| 26 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/26.jpg" width="150"/> |
| 27 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/27.jpg" width="150"/> |
| 28 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/28.jpg" width="150"/> |
| 29 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/29.jpg" width="150"/> |
| 30 | <img src="https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/main/assets/lobby/30.jpg" width="150"/> |

## License

MIT © [Ditzzx](https://github.com/Ditzzx-vibecoder)
