const app = Vue.createApp({
    methods: {
        alertMessage() {
            alert('Кнопка нажата!');
        }
    }
});

app.component('page-layout', {
    template: `
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <aside>
            
            <p>(дополнительная информация)</p>
        </aside>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
    `
});

app.mount('#app');
