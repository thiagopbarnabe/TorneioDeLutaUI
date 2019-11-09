Projeto feito em react como interface para o https://github.com/thiagopbarnabe/TorneioDeLutaAPI

Para instalação e utilização basta baixar o projeto em sua maquina(git clone) navegar até a raiz do projeto e executar "npm install". Apos toda a instalação voce devera executar o comando "npm start" para iniciar um servidor de desenvolvimento

Foram convencionadas as portas para utilização de ambas as aplicações na mesma maquina atente se para esta configuração caso voce necessite rodar a api em outra porta
dentro de config->apiConfigs 
"apiUrl": "https://localhost:5001/"(endereço da api)

Para a UI foi utilizada a porta 8080 caso voce necessite alterar esta porta basta alterar o arquivo de configuração webpack->local.js
dentro da seção devServer basta alterar a porta para a porta desejada
devServer: {
        port: 8080, 
        contentBase: __dirname + '../build',
        historyApiFallback: true
    },
    

Considerações finais do projeto. O projeto acabou se alongando muito, ficando muito dificil para seguir com toda a arquitetura pesada que eu criei. O objetivo principal deste projeto foi demonstração de conhecimento de padrões, linguagens, estruturas, tecnologias, etc. Existem maneiras muito mais simples de se criar um aplicativo deste porte. Sem redux, typescript, etc etc. 
