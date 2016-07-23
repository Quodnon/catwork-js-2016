class UserCard extends HTMLElement {
  attachedCallback () {
      const first = this.getAttribute('first-name');
      const last = this.getAttribute('last-name');
    
      this.textContent = 'My name is '
        + first + ' ' + last;
      this.style.color = 'red';
      this.style.display = 'block';
    }
}


document.registerElement('user-card', UserCard);
