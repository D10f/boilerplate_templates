import './styles.scss';

const p = document.createElement('p');
p.textContent = 'Injected from JS';
document.body.insertAdjacentHTML('beforeend', p.textContent);
