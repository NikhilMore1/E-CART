import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './css/Login.css';
import Footer from './Footer';
import MainHeader from './MainHeader';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        mobile:'',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/Reg/log', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            if (response.ok) {
                alert('Login successful!');
                const role ="user"; 
                localStorage.setItem("role",role);
                if (role === 'user') {
                    navigate('/HomePage');  
                } else {
                    navigate('/Hello');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during login.');
        }
    };

    return (
        <div>
            <MainHeader/>
 
        <div className='login-page'>
            <div className='login-container'>
                <form onSubmit={handleSubmit} className='login-form'>
                    <h1 className='login-header'>Login As User</h1>
                    <div className="form-group">
                        <label className="form-label">
                            Enter your UserName
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Enter your phone number:
                            <input
                                type="text"
                                name="mobile"
                                className="form-control"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-label">
                            Enter your password:
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit" className='submit-btn'>Submit</button>
                </form>
                <div>
                  <p>Not Registerd?   <Link to='/Registration' >Sign Up</Link></p>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
