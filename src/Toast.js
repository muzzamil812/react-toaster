import React from "react";
import './toast.css'

const Toast = ({ toasts, removeToast }) => {
  return (
    <div className="toast-container">
      {toasts.map(({ id, message, type }) => (
        <div key={id} className={`toast ${type}`}>
          {message}
          <button onClick={() => removeToast(id)}>
            <svg aria-hidden="true" viewBox="0 0 14 16"><path fillRule="evenodd" d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"></path></svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
