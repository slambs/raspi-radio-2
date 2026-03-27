const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                Router.go(link.pathname);
            });
        });

        window.addEventListener('popstate', () => {
            Router.go(window.location.pathname, false);
        });

        Router.go(window.location.pathname || '/', false);
    },

    go: (route, appendToHistory = true) => {
        if (appendToHistory) {
            history.pushState({ route }, '', route);
        }

        document.querySelectorAll('a.navlink').forEach((link) => {
            link.classList.toggle('active', link.pathname === route);
        });

        let pageElement = null;
        switch (route) {
            case '/':
                pageElement = document.createElement('clock-page');
                break;
            case '/radio':
                pageElement = document.createElement('radio-page');
                break;
            default:
                pageElement = document.createElement('clock-page');
                history.replaceState({ route: '/' }, '', '/');
                break;
        }

        const main = document.querySelector('main');
        main.innerHTML = '';
        main.appendChild(pageElement);
    },
};

export default Router;
