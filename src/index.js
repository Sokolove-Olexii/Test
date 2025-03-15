import axios from 'axios';

const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const input1 = form.elements.first.value;
  const input2 = form.elements.second.value;
  const input3 = form.elements.third.value;
  const user = {
    nickname: input1,
    email: input2,
    pass: input3,
  };

  //   console.log(input1);
  console.log(form.elements);
  createUser(user);
});

async function createUser(data) {
  try {
    const dataBase = await axios.post('http://localhost:3000/users', data);
    return dataBase.data;
  } catch (error) {
    console.log(error);
  }
}
