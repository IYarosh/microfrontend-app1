console.log('Test log from microfrontend app1');

let domElement;

export function bootstrap(props) {
    console.log('App 1 bootstrap. Props:', props)
    return Promise
        .resolve()
        .then(() => {
            domElement = document.createElement('div');
            domElement.id = 'app1';
            document.body.appendChild(domElement);
        })
}

export function mount(props) {
    console.log('App 1 mount. Props:', props)
    return Promise
        .resolve()
        .then(() => {
            domElement.textContent = 'App 1 is mounted!'
        })
}

export function unmount(props) {
    console.log('App 1 unmount. Props:', props)
    return Promise
        .resolve()
        .then(() => {
            domElement.textContent = '';
        })
}