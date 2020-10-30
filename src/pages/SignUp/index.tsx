import React from 'react';

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import LogoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Background, Container, Content } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: Record<string, unknown>): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={LogoImg} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="create">
          <FiArrowLeft />
          Voltar para o Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
