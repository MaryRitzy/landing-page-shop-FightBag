import "./SupportForm.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


const SupportForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2sey9dq",
        "template_o6al5p7",
        form.current,
        "OziKWtDxrkNg5MY8z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="support-wrapper">
       <div className="support-container containerSupport">
        <div className="support-title__form">
          <div className="icon-operator"></div>
         <h1 className="support-title">Чим Вам допомогти?:</h1>
        </div>

        <form ref={form} onSubmit={sendEmail} className="form-support">
          <input
            className="form-support__items"
            type="text"
            placeholder="І'мя і Прізвище"
            name="user_name"
            required
          ></input>

          <input
            className="form-support__items"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          ></input>
          <input
            className="form-support__items"
            type="text"
            placeholder="Тема"
            name="user_subject"
            required
          ></input>
          <textarea
            className="form-support__items__textarea"
            name="message"
            placeholder="Чекаєм Ваше запитання.."
            cols="63"
            rows="5"
          ></textarea>
          <button type="submit" className="support-btn btn">
            Надіслати
          </button>
        </form>
      </div>
    </div>
    
  );
};
export default SupportForm;
