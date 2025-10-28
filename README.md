# Проєкт: Redux Toolkit та createAsyncThunk

Це навчальний проєкт, створений на React + Vite, що демонструє повний цикл асинхронної роботи з даними за допомогою **Redux Toolkit**.

Він виконує запит до API `jsonplaceholder` для отримання списку завдань (todos), коректно обробляє стани завантаження (`loading`), успіху (`succeeded`) та помилки (`failed`), і відображає відповідний результат у компоненті.

---

## Опис реалізації

Проєкт ілюструє ключові концепції Redux Toolkit для роботи з API:

1.  **`createAsyncThunk` (`fetchTodos`):**
    * Створює асинхронний "thunk" (екшен), який виконує `fetch` запит до `https://jsonplaceholder.typicode.com/todos`.
    * Використовує `try/catch` та `rejectWithValue` для коректної обробки помилок мережі.

2.  **`createSlice` (`exampleSlice`):**
    * Описує "зріз" стану `todos`, який містить `data`, `status` та `error`.
    * Використовує `extraReducers` для автоматичної обробки трьох станів Promise, що повертає `fetchTodos`:
        * **`pending`**: Встановлює `status = 'loading'`.
        * **`fulfilled`**: Встановлює `status = 'succeeded'` та записує отримані дані (`action.payload`) у `state.data`.
        * **`rejected`**: Встановлює `status = 'failed'` та записує текст помилки у `state.error`.

3.  **`ExampleComponent.jsx` (Компонент):**
    * Використовує хук `useDispatch`, щоб викликати екшен `fetchTodos()` один раз при завантаженні (через `useEffect`).
    * Використовує хук `useSelector` для підписки на стан `todos` зі `store`.
    * Рендерить різний UI залежно від поточного `status`: "Loading...", "Error: ..." або список завдань (`data.map(...)`).

## Стек технологій

* React
* Vite
* @reduxjs/toolkit
* react-redux

---

## Встановлення та запуск

1.  **Клонуйте репозиторій:**
    ```bash
    # Замініть [URL] на посилання вашого репозиторію
    git clone [URL-ВАШОГО-РЕПОЗИТОРІЮ]
    ```

2.  **Перейдіть до каталогу проєкту:**
    ```bash
    # Назва папки з вашого завдання (може бути іншою)
    cd my-redux-app
    ```

3.  **Встановіть базові залежності:**
    ```bash
    npm install
    ```

4.  **Встановіть Redux Toolkit та React Redux:**
    ```bash
    npm install @reduxjs/toolkit react-redux
    ```

5.  **Запустіть проєкт у режимі розробки:**
    ```bash
    npm run dev
    ```

    Проєкт буде доступний за адресою `http://localhost:5173/` (або іншим портом, вказаним у терміналі).

---

## Демо-версія

Ви можете переглянути живу (live) демо-версію проєкту, розгорнуту на Vercel

https://homework-47-three.vercel.app/

