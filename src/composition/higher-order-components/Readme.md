`Exemplos de Higher-Order Components (HOCs)`
WithLoading [x]
Descrição: Um HOC que adiciona um indicador de carregamento a um componente.
Prática: Crie um HOC que receba um componente e adicione lógica de carregamento.
Exemplo: Um componente de lista que mostra um spinner enquanto carrega os dados.

WithAuthorization [x]
Descrição: Um HOC que verifica a autorização do usuário antes de renderizar um componente.
Prática: Crie um HOC que receba um componente e verifique as permissões do usuário.
Exemplo: Um componente de painel administrativo acessível apenas a usuários autenticados.

WithTheme [x]
Descrição: Um HOC que fornece um tema para um componente.
Prática: Crie um HOC que envolva um componente e passe um tema como prop.
Exemplo: Um componente que exibe uma lista com estilos baseados no tema fornecido.

WithErrorHandling []
Descrição: Um HOC que adiciona tratamento de erros a um componente.
Prática: Crie um HOC que envolva um componente e trate erros de forma centralizada.
Exemplo: Um componente que exibe uma mensagem de erro quando ocorre uma falha na API.

WithLogging []
Descrição: Um HOC que adiciona logging para as operações de um componente.
Prática: Crie um HOC que registre as ações ou atualizações de um componente.
Exemplo: Um componente de formulário que registra as alterações dos campos no console.

HOCs are common in third-party React libraries

- Relay’s createFragmentContainer.
- such as Redux’s connect
