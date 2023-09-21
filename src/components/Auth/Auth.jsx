import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import Logo from '../Logo/Logo';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Auth = ({ type, onSubmit }) => {
  const { error, setError, disabled, setDisabled } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: 'all' });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setDisabled(!isValid || isSubmitting);
  }, [isValid, setDisabled, isSubmitting]);

  const formSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const userData = await onSubmit(data);
      reset();
      setError('');
      if (userData) {
        navigate('/movies');
      }
    } catch (err) {
      setError(err.message || 'Что-то пошло не так');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    reset();
    setError('');
  };

  let data = {};
  if (type === 'register') {
    data = {
      hello: 'Добро пожаловать!',
      buttonText: 'Зарегистрироваться',
      underBtnText: 'Уже зарегистрированы?',
      toLinkText: ' Войти',
      link: '/signin',
    };
  } else if (type === 'login') {
    data = {
      hello: 'Рады видеть!',
      buttonText: 'Войти',
      underBtnText: 'Ещё не зарегистрированы?',
      toLinkText: ' Регистрация',
      link: '/signup',
    };
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__headerContainer">
          <div className="auth__logo">
            <Logo />
          </div>
          <h1 className="auth__headerTitle">{data.hello}</h1>
        </div>
        <form className="auth__form" onSubmit={handleSubmit(formSubmit)} name="authForm">
          {type === 'register' && (
            <div className="auth__inputContainer">
              <label htmlFor="name" className="auth__label">
                Имя
              </label>
              <input
                {...register('name', {
                  required: 'Поле не должно быть пустым',
                  pattern: {
                    value: /^[a-zA-Zа-яА-ЯёЁ+\s-]*$/,
                    message: 'Введите допустимое имя',
                  },
                })}
                type="text"
                id="name"
                name="name"
                className="auth__input"
                placeholder="Ваше имя..."
                required
              />
              <span className="auth__error">{errors?.name && errors.name.message}</span>
            </div>
          )}
          <div className="auth__inputContainer">
            <label htmlFor="email" className="auth__label">
              E-mail
            </label>
            <input
              {...register('email', {
                required: 'Поле не должно быть пустым',
                pattern: {
                  value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                  message: 'Введите адрес электронной почты',
                },
              })}
              type="email"
              id="email"
              name="email"
              className="auth__input"
              placeholder="Ваша почта..."
              required
            />
            <span className="auth__error">{errors?.email && errors.email.message}</span>
          </div>
          <div className="auth__inputContainer">
            <label htmlFor="password" className="auth__label">
              Пароль
            </label>
            <input
              {...register('password', {
                required: 'Поле не должно быть пустым',
                minLength: {
                  value: 8,
                  message: 'Минимальная длина пароля 8 символов',
                },
              })}
              type="password"
              id="password"
              name="password"
              className="auth__input"
              placeholder="Ваш пароль..."
              required
            />
            <span className="auth__error">{errors?.password && errors.password.message}</span>
          </div>
          <span className="auth__error">{error}</span>
          <button className={`auth__submit ${type === 'login' ? 'auth__submit_log' : ''}`} disabled={disabled}>
            {isSubmitting ? 'Отправка...' : data.buttonText}
          </button>
          <div className="auth__underButtonContainer">
            <span className="auth__underButtonText">{data.underBtnText}</span>
            <Link className="auth__linkText" to={data.link} onClick={resetForm}>
              {data.toLinkText}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
