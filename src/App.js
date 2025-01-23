import React, { useState } from 'react';
import "./App.css";

export default function App() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit() {
    const isValid = 
      form.username && form.email && form.password && form.confirmPassword && (form.password === form.confirmPassword);

    alert(isValid ? "ログインは成功しました．" : form.password !== form.confirmPassword ? "パスワードが一致しません" : "空欄にすべて記入してください");
  }

  return (
    <div className='container'>
      <h1> ログイン</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="custom-input">
          <label>ユーザー名</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange} />
        </div>



        <div className="custom-input">
          <label>メール</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange} />
        </div>




        <div className="custom-input">
          <label>パスワード</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange} />
        </div>



        <div className="custom-input">
          <label>パスワード確認</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange} />
        </div>


        
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}
