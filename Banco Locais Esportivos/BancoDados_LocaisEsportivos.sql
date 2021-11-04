create database locaisEsportivos;

use locaisEsportivos;

CREATE TABLE `locaisEsportivos`.`locais` (  `idobra` INT NOT NULL AUTO_INCREMENT,   `nomelocal` VARCHAR(45) NOT NULL, endereco VARCHAR(45), ano INT NOT NULL,  `urlimagem` VARCHAR(200) NOT NULL,   `created_at` TIMESTAMP default current_timestamp,   PRIMARY KEY (`idobra`));

insert into locais (nomelocal, endereco, ano, urlimagem) values("Praça Mario Gadioli", "Jardim Santa Genebra, Campinas - SP", "2017", "https://www.campinas.sp.gov.br/uploads/fotos/48fd3619ba7f74deff02445b1d125377.jpg");

insert into locais (nomelocal, endereco, ano, urlimagem) values("Praça de Esportes Jonatas Ferreira Rodrigues Monteiro", "localizada entre as ruas Antonio Carlos do Amaral e Jorge Antonio Gadia, no Jardim Satélite Íris I, região do Campo Grande, Campinas - SP", "2016", "https://www.campinas.sp.gov.br/uploads/fotos/bee0032fbe138e765243bce848056504.jpg");


select nome, artista, ano, urlimagem from obrasdearte where artista="Cândido Portinari";

