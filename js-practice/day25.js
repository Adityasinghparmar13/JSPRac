
// Question: 60. Priority event dispatcher
```javascript
class PriorityEventDispatcher {
    constructor() {
        this.listeners = new Map();
    }

    on(event, handler, priority = 0) {
        const handlers = this.listeners.get(event) || [];
        handlers.push({ handler, priority });
        handlers.sort((a, b) => b.priority - a.priority);
        this.listeners.set(event, handlers);
    }

    emit(event, ...args) {
        const handlers = this.listeners.get(event) || [];
        handlers.forEach(({ handler }) => handler(...args));
    }
}

// Question: 59. Lazy image loader
```javascript
class LazyImageLoader {
    constructor(selector = '[data-src]') {
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    this.observer.unobserve(img);
                }
            });
        });
        document.querySelectorAll(selector).forEach(img => 
            this.observer.observe(img)
        );
    }
}
