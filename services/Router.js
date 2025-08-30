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
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Menu';
                break;
            case '/radio':
                pageElement = document.createElement('h1');
                pageElement.textContent = 'Menu';
                break;
            default:
                if (route.startsWith('/product-')) {
                    pageElement = document.createElement('h1');
                    pageElement.textContent = 'Details';
                    pageElement.dataset.productId = route.substring(
                        route.lastIndexOf('-') + 1
                    );
                }
                break;
        }
        if (pageElement) {
            document.querySelector('main').innerHTML = '';
            document.querySelector('main').appendChild(pageElement);
        }
    },
};

export default Router;
