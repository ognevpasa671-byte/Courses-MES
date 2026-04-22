import React, { useRef } from 'react';

function MyForm(){
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    
    if (inputRef.current) {
      console.log('Значение поля:', inputRef.current.value);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="myInput">Введите значение:</label>
        <input
          ref={inputRef}
          type="text"
          id="myInput"
          name="myInput"
          placeholder="Введите текст..."
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}

export default MyForm;
