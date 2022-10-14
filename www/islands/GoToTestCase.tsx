import { useState } from 'preact/hooks';

export default function GoToTestCase() {
    const [value, setValue] = useState('');
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/test-case/${value}`;
    };

    return (
        <div class="mt-4">
            <form>
                <input class="p-1" onInput={handleChange} placeholder="Go to case by key or ID" />
                <button class="p-1 bg-gray-100 border-1 border-gray-200" type="submit" onClick={handleSubmit}>Go!</button>
            </form>
        </div>
    );
}