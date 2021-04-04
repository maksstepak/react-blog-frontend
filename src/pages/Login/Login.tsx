import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import authService from '../../services/authService';
import { loginUser } from '../../store/authSlice';
import { colors } from '../../styles';
import Error from '../../components/Error';
import Button from '../../components/Button';

type FormData = {
  email: string;
  password: string;
};

const LoginWrapper = styled.div`
  max-width: 320px;
  margin: 12px auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledLabel = styled.label`
  color: ${colors.grey};
`;

const StyledInput = styled.input`
  padding: 4px;
`;

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [executing, setExecuting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async ({ email, password }) => {
    setExecuting(true);

    let accessToken: string | null = null;

    try {
      accessToken = await authService.login(email, password);
    } catch (e) {
      if (e.response) {
        setError(e.response.data.message);
      } else {
        setError('Something went wrong');
      }
      setExecuting(false);
    }

    if (accessToken) {
      await dispatch(loginUser(accessToken));
      history.push('/');
    }
  });

  return (
    <LoginWrapper>
      {error && <Error message={error} />}
      <StyledForm onSubmit={onSubmit}>
        <StyledLabel>Email</StyledLabel>
        <StyledInput
          type="email"
          {...register('email', {
            required: true,
          })}
        />
        {errors.email && errors.email.type === 'required' && (
          <Error message="This is required" />
        )}
        <StyledLabel>Password</StyledLabel>
        <StyledInput
          type="password"
          {...register('password', {
            required: true,
          })}
        />
        {errors.password && errors.password.type === 'required' && (
          <Error message="This is required" />
        )}
        <Button type="submit" disabled={executing}>
          Login
        </Button>
      </StyledForm>
    </LoginWrapper>
  );
};

export default Login;
