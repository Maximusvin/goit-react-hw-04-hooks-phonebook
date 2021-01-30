import s from './ContactList.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={s.filter}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

const ContactList = ({ contacts, filter, onChangeFilter, onDeleteContact }) => {
  const contactList = contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
        <button
          className={s.btn}
          type="button"
          onClick={() => onDeleteContact(id)}
          title="delete"
        >
          х
        </button>
      </li>
    );
  });

  return (
    <div className={s.contacts}>
      {!!contacts.length ? (
        <Filter value={filter} onChangeFilter={onChangeFilter} />
      ) : (
        <div>
          <p>Запрашиваемых данных "{filter}" нет в списке контактов</p>
          <button type="button" onClick={() => onChangeFilter('')}>
            Вернуться к списку
          </button>
        </div>
      )}
      <ul>{contactList.reverse()}</ul>
    </div>
  );
};

export default ContactList;
