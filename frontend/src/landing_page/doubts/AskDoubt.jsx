import React, { useState } from 'react';

function AskDoubt() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, tags: tags.split(',') });
        // Future: Post this to backend
        setTitle('');
        setDescription('');
        setTags('');
    };

    return (
        <div className="card p-4 shadow-sm mb-4">
            <h4>Ask a Doubt</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Tags (comma separated)</label>
                    <input
                        type="text"
                        className="form-control"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Post Doubt</button>
            </form>
        </div>
    );
}

export default AskDoubt;
