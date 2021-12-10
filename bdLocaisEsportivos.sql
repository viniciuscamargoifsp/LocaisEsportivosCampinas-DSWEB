create database locaisEsportivos;

use locaisEsportivos;

CREATE TABLE `locaisEsportivos`.`locais` (  `idlocal` INT NOT NULL AUTO_INCREMENT,   `nomelocal` VARCHAR(100) NOT NULL, endereco VARCHAR(150) NOT NULL, descricao VARCHAR(150) NOT NULL, ano INT NOT NULL,  `urlimagem` VARCHAR(200) NOT NULL,   `created_at` TIMESTAMP default current_timestamp,   PRIMARY KEY (`idlocal`));
CREATE TABLE `locaisEsportivos`.`usuario` (  `idusuario` INT NOT NULL AUTO_INCREMENT,   `nomeusuario` VARCHAR(80) NOT NULL, email VARCHAR(150) NOT NULL, senha VARCHAR(15) NOT NULL, `created_at` TIMESTAMP default current_timestamp,   PRIMARY KEY (`idusuario`));
CREATE TABLE `locaisEsportivos`.`galeriafotos` (  `idgaleria` INT NOT NULL AUTO_INCREMENT,   `local` VARCHAR(100) NOT NULL, cidade VARCHAR(100) NOT NULL, `urlfoto1` VARCHAR(200) NOT NULL , `urlfoto2` VARCHAR(200) NOT NULL ,`created_at` TIMESTAMP default current_timestamp,   PRIMARY KEY (`idgaleria`));

insert into locais (nomelocal, endereco, descricao, ano, urlimagem) values("Praça Mario Gadioli", "Jardim Santa Genebra, Campinas - SP", "Praça para fazer exercícios", "2017", "https://www.campinas.sp.gov.br/uploads/fotos/48fd3619ba7f74deff02445b1d125377.jpg");
insert into locais (nomelocal, endereco, descricao, ano, urlimagem) values("Praça de Esportes Jonatas Ferreira Rodrigues Monteiro", "Localizada entre as ruas Antonio Carlos do Amaral e Jorge Antonio Gadia, no Jardim Satélite Íris I, região do Campo Grande, Campinas - SP", "Praça para realizar diversos esportes", "2016", "https://www.campinas.sp.gov.br/uploads/fotos/bee0032fbe138e765243bce848056504.jpg");

insert into galeriafotos (local, cidade, urlfoto1, urlfoto2) values("Ginásio Municipal de esportes Waldemar Blatkauskas", "Piracicaba - SP", "https://upload.wikimedia.org/wikipedia/commons/2/26/Gin%C3%A1sio_Municipal_Waldemar_Blatkauskas.jpg", "http://www.piracicaba.sp.gov.br/upload/kceditor/images/Net%20piso.jpg");
insert into galeriafotos (local, cidade, urlfoto1, urlfoto2) values("Centro de Artes e Esportes Unificados", "Indaiatuba - SP", "https://upload.wikimedia.org/wikipedia/commons/0/0b/Fachada_do_Centro_de_Artes_e_Esportes_Unificados_%28CEU%29%2C_Coronel_Fabriciano_MG.JPG", "http://maisexpressao.com.br/imagens/noticias/40207/640x480/inauguracao-artes-e-esportesjpg.JPG");

select * from usuario;
select * from locais;
select * from galeriafotos;


