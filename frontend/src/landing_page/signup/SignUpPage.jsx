import React from 'react';

function SignUpPage() {
    return (
        <div className="auth-bg">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-6 auth-card">

                        <div className="text-center mb-4">
                            <h2 className="fw-bold">Sign Up to CampusBuddy</h2>
                            <p className="text-muted">Join and make college life easier!</p>
                        </div>

                        <form action="/signup" method="POST" className="needs-validation" noValidate>

                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input name="username" id="username" type="text" className="form-control" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input name="email" id="email" type="email" className="form-control" required />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input name="password" id="password" type="password" className="form-control" required />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-success">Sign Up</button>
                            </div>
                            
                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default SignUpPage;
