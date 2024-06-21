
// Question: 45. Validation framework
```javascript
class Validator {
    constructor() {
        this.rules = [];
    }

    add(fn, message) {
        this.rules.push({ fn, message });
        return this;
    }

    validate(value) {
        return this.rules
            .filter(rule => !rule.fn(value))
            .map(rule => rule.message);
    }

    static required() {
        return value => !!value;
    }
}

// Usage:
const emailValidator = new Validator()
    .add(Validator.required(), 'Email is required')
    .add(v => v.includes('@'), 'Invalid email');
