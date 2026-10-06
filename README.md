# leetcode-ts

Решения задач по алгоритмам на TypeScript. К каждой задаче — условие и тесты на Vitest.

## Структура

```
src/
└── <курс>/
    └── <раздел>/
        └── <номер>.<задача>/
            ├── README.md        условие
            ├── <решение>.ts
            └── <решение>.test.ts
```

## Запуск

```bash
yarn install
yarn test          # все тесты
yarn test:watch    # перезапуск при сохранении
yarn typecheck     # проверка типов
```

## Курсы

Идём по порядку.

| # | Курс | Задач | Сложность | Статус |
| --- | --- | --- | --- | --- |
| 1 | [30 Days of JavaScript](https://leetcode.com/studyplan/30-days-of-javascript/) | 35 | лёгкие–средние | 🟨 [11/35](src/01-30-days-of-javascript/) |
| 2 | [LeetCode 75](https://leetcode.com/studyplan/leetcode-75/) | 75 | лёгкие–средние | ⬜ [папка](src/02-leetcode-75/) |
| 3 | [Blind 75](https://neetcode.io/practice) | 75 | лёгкие–сложные | ⬜ [папка](src/03-blind-75/) |
| 4 | [Grind 75](https://www.techinterviewhandbook.org/grind75/) | 75 | лёгкие–сложные | ⬜ [папка](src/04-grind-75/) |
| 5 | [NeetCode 150](https://neetcode.io/practice/practice/neetcode150) | 150 | лёгкие–сложные | ⬜ [папка](src/05-neetcode-150/) |
| 6 | [NeetCode 250](https://neetcode.io/practice/practice/neetcode250) | 250 | лёгкие–сложные | ⬜ [папка](src/06-neetcode-250/) |
| 7 | [Top Interview 150](https://leetcode.com/studyplan/top-interview-150/) | 150 | в основном средние | ⬜ [папка](src/07-top-interview-150/) |
| 8 | [Binary Search](https://leetcode.com/studyplan/binary-search/) | 42 | средние | ⬜ [папка](src/08-binary-search/) |
| 9 | [Dynamic Programming](https://leetcode.com/studyplan/dynamic-programming/) | ~50 *(уточнить)* | средние–сложные | ⬜ [папка](src/09-dynamic-programming/) |
| 10 | [Яндекс. Тренировки по алгоритмам](https://yandex.ru/yaintern/training/algorithm-training) | ~40 за сезон | средние–сложные | ⬜ [папка](src/10-yandex-algorithm-training/) |

Статусы: ⬜ не начат · 🟨 в процессе · ✅ пройден

## Правила

- Один курс за раз, до конца. Следующий — только после ✅.
- Каждое решение — с тестом на Vitest.
