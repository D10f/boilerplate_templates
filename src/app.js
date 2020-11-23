import './styles.scss';

class ExtraEl  {
  constructor(msg, type = 'p') {
    this.msg = msg;
    this.el = document.createElement(type);
    this.el.textContent = this.msg;
    this.update(this.msg);
  }

  update(msg){
    document.body.insertAdjacentHTML('beforeend', msg);
  }
}

const p = new ExtraEl('Injected from JS');
setTimeout(() => p.update('Content updated!'), 2000)
