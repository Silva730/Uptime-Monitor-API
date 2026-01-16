# Uptime-Monitor-API

API de monitoramento de disponibilidade de URLs.

Você envia a URL a ser monitorada via JSON e o sistema realiza verificações automáticas a cada 1 minuto para identificar se o serviço está online ou offline.

## Funcionalidades

- Monitoramento periódico de URLs (intervalo de 1 minuto)
- Cadastro de URLs para monitoramento via requisição POST
- Listagem das URLs monitoradas via requisição GET
- Registro do status atual de cada URL (UP / DOWN)
- Registro de incidentes quando ocorre falha em alguma URL

## Banco de Dados

A aplicação utiliza duas tabelas:

- **URLs monitoradas**: armazena as URLs cadastradas e seu status atual
- **Incidentes**: armazena os registros de falhas detectadas durante o monitoramento

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Axios
- Cron
- MariaDB

## Observações

- Versão **1.0**
- Projeto focado em aprendizado
- Estrutura preparada para evoluções futuras

## Status do projeto

- Tipo: Full BACKEND
- Uso: Estudo / Portfólio
- Estado: Funcional
