# Test Casino

## Требования

- Node.js >= 18
- npm

## Установка

```bash
npm install
```

## Переменные окружения

Скопируй `.env.example` в `.env` и заполни значения:

```bash
cp .env.example .env
```

| Переменная | Описание |
|---|---|
| `GAME_URL` | URL запуска игры (с параметрами `gameId`, `partnerKey`, `mode` и т.д.) |

## Запуск (dev)

```bash
npm run dev
```

Откроется dev-сервер с hot reload.

## Сборка (production)

```bash
npm run build
```

Результат сборки — папка `dist/`.
