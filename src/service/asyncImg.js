import axios from 'axios'

async function getImg(){
  const result = await axios.get('http://water.hnfsu.com/roadmap/{z}/{x}/{y}.png')
  console.log('result: ', result);
}
getImg()