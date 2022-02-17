# React Native - Calculadora

🐱‍🏍 Uma super calculadora!

Permite você fazer as 4 operações básicas (soma, subtração, multiplicação e
divisão), usando uma interface toda trabalhada no colorido.

Caso você não queira saber de instalar Node, Yarn, Expo e tudo mais que é
preciso, siga as instruções de como executar [via Docker](#docker).

# Usando Docker

## Construindo a imagem

```bash
docker build -t expo .
```
Esta imagem é baseada no Node 16, versão LTS mais recente do momento, com o SO
Alpine para ser o mais leve possível.

## Executando o container

```bash
docker run --rm -d --name calculadora -v $(pwd):/app -p 19000:19000 expo sh ./start.sh
```

## Acessando o app

Primeiro descubra o IP da sua máquina, após isso mande o seguinte conteúdo para
o clipboard do dispositivo:

```txt
exp://<seu-ip>:19000
```

> Lembre-se que deve substituir `<seu-ip>` pelo IP de sua máquina.

Agora basta acessar o app do Expo que irá ver a opção `Open from clipboard`,
ou algo do tipo.
