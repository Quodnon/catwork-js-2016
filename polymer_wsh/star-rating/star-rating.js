class StarRating extends HTMLElement {
  attachedCallback() {
    this._root = this.createShadowRoot();
    this._root.appendChild(document.querySelector('#star-rating-template').content);

    const stars = Array.from(this._root.querySelectorAll('.star'));
    stars.forEach((item, index) => {
      const method = index < this.getAttribute('value') 
        ? 'add' : 'remove';
      item.classList[method]('selected');
    });
    
    stars.forEach((item,index)=>{
      item.addEventListener('click',()=>{
        this.setAttribute('value',index+1)
      })
    })
  }
  
  attributeChangedCallback (name,oldVal,newVal) {
    if(name=='value'){
      const stars = Array.from(this._root.querySelectorAll('.star'));
    stars.forEach((item, index) => {
      const method = index < this.getAttribute('value') 
        ? 'add' : 'remove';
      item.classList[method]('selected');
    });
    }
    
  }
  
  
}



document.registerElement('star-rating',StarRating);