import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

export default function ValidateLoginFormik() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const [form, setForm] = useState({
        email: '',
    });

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.email) { //nếu email rỗng
            errors.email = "メールを入力してください";
            console.log("cú pháp email rỗng ruột");
        } else if (!REGEX.email.test(form.email)) { //nếu email không đúng cú pháp
            errors.email = "メールの形式が正しくありません";
            console.log("cú pháp email lỗi Regex");     
        }

        if (!form.password) { //nếu passord rỗng
            errors.password = "パスワードを入力してください";
        }
        return errors;
    }

    function handleSubmit() {
        alert("ログイン成功!");
    }
    

    return (
        <div>
            <h1>ログイン</h1>
            <Formik initialValues={form} validate={handleValidate} onSubmit={handleSubmit}>
                {({ values, errors, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
            
             <div className={`custom-input ${ errors.email ? "custom-input-error" : ""}`}>    
                 <label>メール</label>
                 <input
                    type="email"
                    name="email"
                    value={values.email || ""} //để đảm bảo trường nhập liệu luônc có giá trị , kể cả chuỗi rỗng.
                    onChange={handleChange}
                 />
                 {/* <p className="error">{email.email}</p>  {//hiển thị thông báo lỗi nếu có */}
                 
             </div>

             <div
                    className={`custom-input ${errors.password ? "custom-input-error" : ""}`}
             >
              <label>パスワード</label>
                <input
                    type="password"
                    name="password"
                    value={values.password || ""}
                    onChange={handleChange}
                />
                <p className="error">{errors.password}</p>
            
             </div>
            <button type="submit">
                提出
                </button> 
                
            </form>
                )}

                


                </Formik>


        </div>
    )


}
