import React, { useState } from 'react';
import "./AppSamurai.css";


export default function App_temporary() {

  const MESSAGE_ERROR = {
    username: "ユーザー名のえらー",
    email: "メールのえらー",
    password: "パスワードのえらー",
    confirmPassword: "パスワードは同じではありません"
  };


  const REGEX = {
    username: /^[a-zA-Z0-9]{3,}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-Z0-9]{6,}$/,
  }


  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  function handleChange(event) {
    let error = "";
    if (event.target.name === "password") {
      if (form.confirmPassword && form.confirmPassword.value) {
        error =
          event.target.value === form.confirmPassword.value
            ? ""
            : MESSAGE_ERROR[event.target.name];
      } else {
        error = REGEX[event.target.name].test(event.target.value)
          ? ""
          : MESSAGE_ERROR[event.target.name];
      }
    } else if (event.target.name === "confirmPassword") {
      error =
        event.target.value === form.password.value
          ? ""
          : MESSAGE_ERROR[event.target.name];
    } else {
      error = REGEX[event.target.name].test(event.target.value)
        ? ""
        : MESSAGE_ERROR[event.target.name];
    }
    setForm({
      ...form,
      [event.target.name]: { value: event.target.value, error: error }
    });
  }


 function handleSubmit() {
  const isFilled =
    form.username &&
    form.username.value &&
    form.email &&
    form.email.value &&
    form.password &&
    form.password.value &&
    form.confirmPassword &&
    form.confirmPassword.value;

  const isError =
    isFilled &&
    (form.username.error ||
      form.email.error ||
      form.password.error ||
      form.confirmPassword.error);

  alert(
    isFilled && !isError
      ? "ログインは成功しました．"  // Đăng nhập thành công
      : isFilled && form.password !== form.confirmPassword
      ? "パスワードが一致しません"  // Mật khẩu không khớp
      : "空欄にすべて記入してください"  // Vui lòng điền đầy đủ các trường
  );
}

return (
    <div className='container'>
      <h1>ログイン</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className={`custom-input ${form.username && form.username.error && "custom-input-error"}`}>
          <label>ユーザー名</label>
          <input
            name="username"
            value={(form.username && form.username.value) || ""}
            onChange={handleChange}
          />
          {form.username && form.username.error && (
            <p className="error">{form.username.error}</p>
          )}
        </div>

        <div className={`custom-input ${form.email && form.email.error && "custom-input-error"}`}>
          <label>メール</label>
          <input
            name="email"
            value={(form.email && form.email.value) || ""}
            onChange={handleChange}
          />
          {form.email && form.email.error && (
            <p className="error">{form.email.error}</p>
          )}
        </div>

        <div className={`custom-input ${form.password && form.password.error && "custom-input-error"}`}>
          <label>パスワード</label>
          <input
            type="password"
            name="password"
            value={(form.password && form.password.value) || ""}
            onChange={handleChange}
          />
          {form.password && form.password.error && (
            <p className="error">{form.password.error}</p>
          )}
        </div>

        <div className={`custom-input ${form.confirmPassword && form.confirmPassword.error && "custom-input-error"}`}>
          <label>パスワード確認</label>
          <input
            type="password"
            name="confirmPassword"
            value={(form.confirmPassword && form.confirmPassword.value) || ""}
            onChange={handleChange}
          />
          {form.confirmPassword && form.confirmPassword.error && (
            <p className="error">{form.confirmPassword.error}</p>
          )}
        </div>

        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}
