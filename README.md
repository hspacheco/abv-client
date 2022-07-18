## Configurando

Para realizar o envio dos arquivos através do próprio client-side, é necessário um servidor de arquivos. 

Nessa aplicação foi usado o [Firebase Cloud Storage](https://firebase.google.com/docs/storage), que necessita de vínculo com uma conta Google para armazenar os arquivos.
Para isso é necessário realizar a alteração das *variáveis de ambiente* no arquivo `.env`. Use o arquivo `.env.example` como base. 

```
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGING_SENDER_ID=
VITE_APP_ID=
VITE_MEASUREMENT_ID=
```
Para mais detalhes de configuração ler [Cloud Storage Web](https://firebase.google.com/docs/storage/web/start)

> **_📝NOTA:_**  Cloud storage foi usado aqui, mas pode ser substituído por qualquer outro a sua escolha. O importante é ter um local que armazene e sirva os documentos.

## Iniciando localmente

Para executar localmente é necessária a instalação do `node>=16`. Caso não possua, [Instalação NodeJS](https://nodejs.org/en/)

O comando responsável para iniciar, após a instalação do node:

```
npm run dev
```

Após esses passos deve-se poder:

- Acessar aplicação localmente através de http://127.0.0.1:3000
- Realizar upload de arquivos 
- Ao clicar no botão de atualizar arquivos, recuperar arquivos presentes na Cloud Storage

