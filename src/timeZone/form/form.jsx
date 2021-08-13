import { useState } from "react";

export default function Form({ addTimezone }) {
  const [data, setData] = useState({
    name: '',
    timeZone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.name.length <= 0) return false;
    if (data.timeZone <= 0 && data.timeZone > 24) return false;
    addTimezone(data);
    setData({
      name: '',
      timeZone: '',
    });
  };

  return(
    <form onSubmit={handleSubmit} className='timeZone-form'>
      <div className='timeZone-form-cnt'>
        <label htmlFor='name'>Наименование</label>
        <input 
        type='text' 
        id='name' 
        name='name'
        className='timeZone-form-input'
        onChange={handleChange}
        value={data.name}></input>
      </div>
      <div className='timeZone-form-cnt'>
        <label htmlFor='timeZone'>Временная зона</label>
        <input 
        type='number' 
        id='timeZone' 
        name='timeZone'
        className='timeZone-form-input'
        onChange={handleChange}
        value={data.timeZone}></input>
      </div>
      <div className='timeZone-form-cnt'>
        <button
        className='timeZone-form-btn'
        type='submit'
        >Добавить</button>
      </div>
    </form>
  );
}