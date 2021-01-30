import { useState } from 'react';
import s from './FormPhone.module.css';

const FormPhone = ({ addContactPhone }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || !number) {
      alert('Вы не ввели все контактные данные');
      return;
    }

    if (Number.isNaN(+number)) {
      alert('Телефонный номер должен содержать только цифры');
      return;
    }

    addContactPhone(name, number);
    setName('');
    setNumber('');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }

    // this.setState({ [name]: value });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Number
        <input
          name="number"
          type="tel"
          value={number}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default FormPhone;
