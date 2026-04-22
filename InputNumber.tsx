import React, { useState } from 'react';

function Message({ number }: { number: number | null }) {
  if (number === null) {
    return <div style={{ color: '#666', marginTop: '10px' }}>Введите число</div>;
  }
  
  if (number > 0) {
    return <div style={{ color: '#28a745', marginTop: '10px', fontWeight: 'bold' }}>Число больше нуля</div>;
  }
  
  if (number < 0) {
    return <div style={{ color: '#dc3545', marginTop: '10px', fontWeight: 'bold' }}>Число меньше нуля</div>;
  }
  
  return <div style={{ color: '#ffc107', marginTop: '10px', fontWeight: 'bold' }}>Число равно нулю</div>;
}

function InputNumber() {
  const [number, setNumber] = useState<number | null>(null);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    
    if (value === '') {
      setNumber(null);
      return;
    }
    
    const parsedNumber = Number(value);
    if (!isNaN(parsedNumber)) {
      setNumber(parsedNumber);
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3 style={{ marginBottom: '15px' }}>Проверка числа</h3>
      <input
        type="number"
        onChange={handleInputChange}
        placeholder="Введите число..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxSizing: 'border-box'
        }}
      />
      <Message number={number} />
    </div>
  );
}

export default InputNumber;
