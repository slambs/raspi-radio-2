const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const url = link.pathname;
                console.log(link.pathname);
                Router.go(url);
            });
        });
        Router.go('/');
    },

    go: (route, appendToHistory = true) => {
        console.log(`going to ${route}`);

        if (appendToHistory) {
            history.pushState({ route }, '', route);
        }

        let pageElement = null;
        switch (route) {
            case '/':
                pageElement = document.createElement('clock-page');
                break;
            case '/radio':
                pageElement = document.createElement('radio-page');
                // pageElement.textContent = 'Radio';
                break;
            default:
                break;
        }
        if (pageElement) {
            document.querySelector('main').innerHTML = '';
            document.querySelector('main').appendChild(pageElement);
        }
    },
};

export default Router;
