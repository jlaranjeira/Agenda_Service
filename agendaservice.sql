-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 05-Nov-2023 às 20:19
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `agendaservice`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `nome` varchar(90) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefone` text NOT NULL,
  `endereco` varchar(90) NOT NULL,
  `title` text NOT NULL,
  `msg` text DEFAULT NULL,
  `start` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `end` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `events`
--

INSERT INTO `events` (`id`, `nome`, `email`, `telefone`, `endereco`, `title`, `msg`, `start`, `end`) VALUES
(8, 'José laranjeira', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:57:14', '2023-05-16 17:00:00'),
(9, 'Carlos castro', 'ccastro@hotmail.com', '919913-2144', 'Av. Júlio Prestes, 265', 'Higienização de estofados', 'teste de envio de e-mail', '2023-10-23 11:56:36', '2023-05-12 10:00:00'),
(10, 'João Diniz', 'jdiniz@gmail.com', '9199133-2144', 'Rua dos Caripunas, 2102', 'Lavagem de colchão', 'teste testetes', '2023-10-23 11:59:09', '2023-05-20 11:00:00'),
(11, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-09 11:00:00'),
(12, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-09 11:00:00'),
(13, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-09 11:00:00'),
(14, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-24 11:00:00'),
(15, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-12 09:00:00'),
(16, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-19 11:00:00'),
(17, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-09 13:00:00'),
(18, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-17 13:00:00'),
(19, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-17 13:00:00'),
(20, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-17 13:00:00'),
(21, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-17 13:00:00'),
(22, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-23 12:00:00'),
(23, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-09 12:00:00'),
(24, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-23 12:00:00'),
(25, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-18 13:00:00'),
(26, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-20 13:00:00'),
(27, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-24 11:00:00'),
(28, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-16 13:00:00'),
(29, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-09 05:00:00'),
(30, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-11 16:00:00'),
(31, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-11 16:00:00'),
(32, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-11 16:00:00'),
(33, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-11 16:00:00'),
(34, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-11 16:00:00'),
(35, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-11 16:00:00'),
(36, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-11 16:00:00'),
(37, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-11 16:00:00'),
(38, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-11 16:00:00'),
(39, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-11 16:00:00'),
(40, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-11 16:00:00'),
(41, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-31 11:00:00'),
(42, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-30 13:00:00'),
(43, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-14 00:30:00'),
(44, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-14 15:00:00'),
(45, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-14 15:00:00'),
(46, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-14 15:00:00'),
(47, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-14 15:00:00'),
(48, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-01 15:00:00'),
(49, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-02 15:00:00'),
(50, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-02 15:00:00'),
(51, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-05-14 15:00:00'),
(52, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-21 09:00:00'),
(53, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-22 09:00:00'),
(54, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-22 09:00:00'),
(55, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-22 09:00:00'),
(56, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-22 09:00:00'),
(57, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-22 09:00:00'),
(58, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-22 09:00:00'),
(59, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-22 09:00:00'),
(60, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-22 09:00:00'),
(61, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-22 09:00:00'),
(62, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-22 09:00:00'),
(63, 'João Carlos castro', 'jlaranjeira@hotmail.com', '919913-2144', 'Rua dos Bosques, 21', 'Higienização teste', 'teste de api - Alterarar', '2023-10-19 23:51:12', '2023-06-22 09:00:00'),
(75, 'Joana malcher', 'jmalcher@email.com', '(91) 99132-1445', 'Rua da Cruz Azul 16', 'hjklhlkhlkhk', 'lkjlkjkjlkjlkkl', '2023-10-25 03:00:00', '2023-10-25 03:00:00'),
(76, 'Elis regina da Silva', 'elisregina@email.com', '(91) 99132-5252', 'Rua das pedras 56', '', '', '2023-10-24 13:45:20', '2023-10-24 13:45:20'),
(78, 'Carlos aguiar', 'carlos@email.com', '(91) 99132-5256', 'Rua dos Rios 2325', 'fsdfsdfsdfsd', 'sdasdasdas', '2023-10-24 03:00:00', '2023-10-24 03:00:00'),
(79, 'José Laranjeira ', 'jlaranjeira@hotmail.com', '(91)9913-2144', 'Rua dos Bosques, 21', 'dsfsadfdsfasdfasdf', 'fdgfdsgdsg', '2023-10-25 03:00:00', '2023-10-25 03:00:00'),
(80, 'Luis Azevedo', 'lazevedo@hotmail.com', '(91)9913-2155', 'Rua dos Bosques, 2123', 'dsfsadfdsfasdfasdffsdfsd', 'fdgfdsgdsgdfsdfs', '2023-10-26 03:00:00', '2023-10-26 03:00:00'),
(81, 'Luis Azevedo', 'lazevedo@hotmail.com', '(91)9913-2155', 'Rua dos Bosques, 2123', 'dsfsadfdsfasdfasdffsdfsd', 'fdgfdsgdsgdfsdfs', '2023-10-26 03:00:00', '2023-10-26 03:00:00'),
(82, 'Luis Azevedo Filho', 'lazevedofilho@hotmail.com', '(91)9913-2156', 'Rua dos Bosques, 2123', 'dsfsadfdsfasdfasdffsdfsd', 'fdgfdsgdsgdfsdfs', '2023-10-28 03:00:00', '2023-10-28 03:00:00'),
(83, 'Francisco araujo', 'faraujo@hotmail.com', '(91)98913-2156', 'Rua Carlos gomess, 2126', 'dsfsadfdsfasdfasdffsdfsd', 'fdgfdsgdsgdfsdfs', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(84, 'Sofia Abraão', 'sofi@hotmail.com', '91983356642', 'Rua dos Pariquis, 562', 'Lavagem de tapete', 'teste de envio', '2023-10-31 13:00:00', '2023-10-30 19:23:20'),
(89, 'Emilia Santos Lima', 'emiliaSL@hotmail.com', '91988562324', 'Rua Bolonha 52 - Res. Belo Jardim I - Benevide - Centro', 'Higienização de colchão de casal', 'Solicito pontualidade do prestador de serviço.', '2023-11-01 17:00:00', '2023-11-01 12:58:55'),
(90, 'Renada Resende', 'renarares@hotmail.com', '(91)9913-2144', 'Rua dos Pariquis 2342 - Batista campos - Belém', 'Lavagem de tapete', '', '2023-11-02 11:00:00', '2023-11-01 13:04:21'),
(91, 'Guilherme Dias Raiol', 'guiraiol@gmail.com', '91985623344', 'Rua da curva 16', 'Higienização de colchão solteiro', 'sfasfasfasfsf', '2023-11-03 13:00:00', '2023-11-01 13:15:36'),
(92, 'Luis claudio Malcher', 'lcmalcher@email.com', '91985662323', 'Rua dos Apinajés 1422', 'Higienização de colchão solteiro', 'eqweqweqwe', '2023-11-03 23:00:00', '2023-11-01 13:20:45'),
(93, 'Joaquim Souza', 'joaqsouza@hotmail.com', '(91) 99132-1445', 'Rua dos Bosques, 21', 'Higienização de estofados', 'fdfsadfsadfsd', '2023-11-03 21:00:00', '2023-11-01 13:26:05'),
(94, 'Maria flor de Lima laranjeira', 'mflor@hotmail.com', '91988067101', 'Rua das flores 45 - Bairro Jardins - Rio Claro', 'Higienização de estofados', '', '2023-11-04 11:00:00', '2023-11-01 13:33:16'),
(95, 'Debora da Silva', 'dbsilva@gmail.com', '91986552323', 'Rua das flores 58 - Bairro Jardins - Rio Claro', 'Higienização de estofados', 'teste de envio ao banco de dados', '2023-11-06 13:00:00', '2023-11-02 14:31:15'),
(96, 'Maria flor de Lima laranjeira', 'maria@email.com', '(91)9913-2144', 'Rua das flores 45 - Bairro Jardins - Rio Claro', 'Higienização de estofados', 'sdasdasdsa', '2023-11-07 17:00:00', '2023-11-02 14:55:50'),
(97, 'Carla Maues', 'cmaues@email.com', '91 991321465', 'Rua dos Bosques, 21', 'Higienização de estofados', 'sfasfasdf', '2023-11-03 19:00:00', '2023-11-03 03:46:36'),
(98, 'Claudia Barros', 'cbarros@email.com', '91988067101', 'Rua dos Pariquis 1422', 'Higienização de colchão solteiro', 'sdasdsadas', '2023-11-06 13:00:00', '2023-11-03 03:58:10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `nome` varchar(280) NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `price` decimal(11,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `service`
--

INSERT INTO `service` (`id`, `nome`, `description`, `price`) VALUES
(1, 'Higienização de colchão solteiro', 'Lavagem a seco', 150.00),
(2, 'Higienização de colchão casal', 'Lavagem a seco com produto próprio', 200.00),
(3, 'Higienização de colchão casal', 'Lavagem a seco com produto próprio', 200.00),
(4, 'Lavagem de tapetes', 'Lavagem com agua e produtos próprios', 150.00),
(5, 'Higienização de interior de automóvel', 'Limpeza e descontaminação', 500.00),
(6, 'Descontaminação de ambiente', 'Descontaminação com ozônio', 280.00),
(7, 'Impermeabilização de estofados', 'Impermeabilização com produto próprio', 300.00),
(8, 'Lavagem de cortinas', 'Lavagem com com produto especial', 150.00);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nome` varchar(220) NOT NULL,
  `email` varchar(220) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT de tabela `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
