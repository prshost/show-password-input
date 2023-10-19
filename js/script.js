let show = document.querySelector('#show');
let input = document.querySelector('input[type=password]');


show.onclick = () => {
    show.classList.toggle('active')
    if(input.type == 'password') {
        input.type = 'text'
    } else {
        input.type = 'password'
    }
}