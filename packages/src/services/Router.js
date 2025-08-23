const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const url = event.target.getAttribute('href');
                Router.go(url);
            });
        });
    },

    go: (route, appendToHistory = true) => {
        console.log(`going to ${route}`);
    },
};

export default Router;
