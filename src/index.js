import {hello} from './lib/Hello';
import person from './lib/Person';

const me = new person('anonymous', 35, 'John Doe');

document.title = 'gulp-babel-webpack';

const p = document.createElement('p');
p.innerText = hello('Hello to you too!');
document.querySelector('body').appendChild(p);

const small = document.createElement('small');
small.innerText = `-- ${me.theName()} (${me.theFullNmae()}) is ${me.theAge()} years old.`;
document.querySelector('body').appendChild(small);
