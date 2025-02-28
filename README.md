# React-toaster

A lightweight and customizable React notification (toast) system for displaying success, error, warning, and info messages.



## 🚀 Features

✅ Easy to use API\
✅ Supports success, error, warning, and info messages\
✅ Auto-dismiss feature\
✅ Custom positioning and styling\
✅ Manual dismissal with close button\
✅ No external dependencies

---

## 📦 Installation

```sh
npm install react-toaster
```

or with Yarn:

```sh
yarn add react-toaster
```

---

## 🔥 Quick Start

Wrap your app with the `ToasterProvider` to enable global notifications.

### **1. Setup in **``** or **``

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { ToasterProvider } from "react-toaster";
import App from "./App";

ReactDOM.render(
  <ToasterProvider>
    <App />
  </ToasterProvider>,
  document.getElementById("root")
);
```

### **2. Using Notifications in a Component**

```tsx
import React from "react";
import { useToaster } from "react-toaster";

const MyComponent = () => {
  const { addToast } = useToaster();

  return (
    <div>
      <button onClick={() => addToast("Success!", "success")}>Show Success</button>
      <button onClick={() => addToast("Something went wrong!", "error")}>Show Error</button>
    </div>
  );
};

export default MyComponent;
```

---

## 🎨 Customization

You can customize the toast appearance using CSS or override styles via props.

### **Custom Styles**

```css
.toast {
  padding: 12px 16px;
  border-radius: 5px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 250px;
}
.toast.success { background: green; }
.toast.error { background: red; }
.toast.warning { background: orange; }
.toast.info { background: blue; }
.toast button {
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
```

### **Props**

| Prop       | Type     | Default     | Description                                     |
| ---------- | -------- | ----------- | ----------------------------------------------- |
| `message`  | `string` | -           | The notification message                        |
| `type`     | `string` | `info`      | Can be `success`, `error`, `warning`, or `info` |
| `duration` | `number` | `3000`      | Auto-dismiss duration in milliseconds           |

---

## 💡 Contributing

Want to improve `react-toaster`? Feel free to submit issues or pull requests!

1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push to branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## 📜 License

MIT License. Free to use and modify.

---

## 🌟 Show Your Support

If you find this library helpful, please ⭐ the repo!

[GitHub Repository](https://github.com/yourusername/react-toaster)
