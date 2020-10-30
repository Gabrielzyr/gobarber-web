import React from 'react';

import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Background, Container, Content } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={LogoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu cadastro</h1>
        <Input name="email" icon={FiUser} type="text" placeholder="Nome" />
        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Cadastrar</Button>
      </form>
      <a href="create">
        <FiArrowLeft />
        Voltar para o Logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
