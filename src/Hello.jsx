import './Hello.css';
import { useState } from 'react';

const user = {
  name: 'Anakanan Yardkasamsak',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HNop_MwLKYUCpJRYzbi7nPaZqY3j80y01w&s',
  imageSize: 100,
};

const products = [
  { title: 'Cabbage', id: 1, isFruit: false },
  { title: 'Garlic', id: 2, isFruit: false },
  { title: 'Apple', id: 3, isFruit: true },
];

function Hello() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [textInput, setTextInput] = useState('');

  return (
    <div>
      <Profile isLoggedIn={isLoggedIn} />
      <MyButton />
      <MyButton />
      <AboutPage />
      <TextInputCounter textInput={textInput} setTextInput={setTextInput} />
    </div>
  );
}

function Profile({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <AdminPanel /> : <LoginForm />}
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

function AboutPage() {
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  ));

  return (
    <>
      <h1>About</h1>
      <p>Hello there Cutie.<br />
      How can I help you?</p>
      <ul>{listItems}</ul>
    </>
  );
}

function TextInputCounter({ textInput, setTextInput }) {
  return (
    <div>
      <input
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="Type here..."
      />
      <p>Character count: {textInput.length}</p>
    </div>
  );
}

function AdminPanel() {
  return <div>Admin Panel</div>;
}

function LoginForm() {
  return <div>Login Form</div>;
}

export default Hello;
