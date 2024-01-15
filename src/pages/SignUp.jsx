import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import VisibilityIcon from '../assets/svg/visibilityIcon.svg';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back!</p>
        </header>

        <form>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            className='nameInput'
            value={name}
            onChange={onChange}
          />

          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            className='emailInput'
            value={email}
            onChange={onChange}
          />

          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
            />

            <img
              src={VisibilityIcon}
              alt='Show Password'
              className='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>

          <div className='signUpBar'>
            <p className='signUpText'>Sign Up</p>
            <button className='signUpButton'>
              <ArrowRightIcon fill='#FFFFFF' width={34} hanging={34} />
            </button>
          </div>
        </form>

        {/* Goof Auth */}

        <Link to={'/sign-in'} className='registerLink'>
          Sign In
        </Link>
      </div>
    </>
  );
};

export default SignUp;
