import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { colors } from '../../styles';
import Error from '../../components/Error';
import Button from '../../components/Button';
import authService from '../../services/authService';
import toast from 'react-hot-toast';

type FormData = {
  email: string;
  plainPassword: string;
  plainPasswordRepeat: string;
};

const RegisterWrapper = styled.div`
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

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>();
  const watchPlainPassword = watch('plainPassword');

  const [executing, setExecuting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async ({ email, plainPassword }) => {
    setExecuting(true);

    try {
      await authService.register({ email, plainPassword });
      reset();
      toast.success('You have been successfully registered.');
    } catch (e) {
      if (e.response) {
        setError(e.response.data.message);
      } else {
        setError('Something went wrong');
      }
      setExecuting(false);
    }
  });

  return (
    <RegisterWrapper>
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
          {...register('plainPassword', {
            required: true,
            minLength: 3,
            maxLength: 50,
          })}
        />
        {errors.plainPassword && errors.plainPassword.type === 'required' && (
          <Error message="This is required" />
        )}
        {errors.plainPassword && errors.plainPassword.type === 'minLength' && (
          <Error message="Min length is 3" />
        )}
        {errors.plainPassword && errors.plainPassword.type === 'maxLength' && (
          <Error message="Max length exceeded" />
        )}
        <StyledLabel>Repeat password</StyledLabel>
        <StyledInput
          type="password"
          {...register('plainPasswordRepeat', {
            validate: (value) => value === watchPlainPassword,
          })}
        />
        {errors.plainPasswordRepeat && (
          <Error message="Passwords do not match" />
        )}
        <Button type="submit" disabled={executing}>
          Register
        </Button>
      </StyledForm>
    </RegisterWrapper>
  );
};

export default Register;
