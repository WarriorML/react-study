const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

class LikeButton {
    constructor() {
        this.state = {
            isLiked: false
        }
    }

    setState(state) {
        var oldEl = this.el;
        this.state = state;
        this.el = this.render();
        if(this.onStateChange){
            this.onStateChange(oldEl,this.el)
        }
    } 

    changeLikeText() {
        this.setState({
            isLiked:!this.state.isLiked
        })
    }

    render() {
        this.el = createDOMFromString(`
        <button class='like-button'>
          <span class='like-text'>${this.state.isLiked === false ? '取消' : '点赞'}</span>
        </button>
      `)
        this.el.addEventListener('click', this.changeLikeText.bind(this),false)
        return this.el
    }
}


const wrapper = document.querySelector('.wrapper')

const likeButton = new LikeButton()
wrapper.appendChild(likeButton.render()) // 第一次插入 DOM 元素
likeButton.onStateChange = (oldEl, newEl) => {
  wrapper.insertBefore(newEl, oldEl) // 插入新的元素
  wrapper.removeChild(oldEl) // 删除旧的元素
}