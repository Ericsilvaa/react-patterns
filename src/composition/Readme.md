Estudo dos Padrões de Composição em React

1. `Padrão de Composição de Componentes`
   Descrição: Combina componentes menores para criar componentes maiores e
   mais complexos. Permite a criação de componentes reutilizáveis e
   flexíveis.
   Uso: Ideal para criar interfaces modulares e evitar a repetição de
   código.
   Motivação: Promove a reutilização e a manutenção mais fácil do código.

2. `Component as a Props or as a Props Children`
   Descrição: Utiliza a propriedade children para passar componentes ou
   elementos para dentro de um componente pai.
   Uso: Permite que o componente pai defina a estrutura do componente filho
   de forma flexível.
   Motivação: Facilita a criação de layouts dinâmicos e flexíveis.

3. `Render Props`
   Descrição: Um padrão onde um componente aceita uma função como uma prop,
   que retorna um elemento React.
   Uso: Ideal para compartilhar lógica entre componentes sem usar herança.
   Motivação: Promove a reutilização de lógica e separa preocupações.

4. `Higher-Order Components (HOCs)`
   Descrição: Funções que recebem um componente e retornam um novo
   componente com funcionalidades adicionais.
   Uso: Utilizado para compartilhar funcionalidades entre diferentes
   componentes.
   Motivação: Permite a adição de funcionalidades e lógica reutilizável sem
   modificar o componente original.

5. `Hooks Personalizados`
   Descrição: Funções JavaScript que utilizam hooks internos para
   compartilhar lógica de estado e efeitos entre componentes.
   Uso: Ideal para abstrair e reutilizar lógica de estado e efeitos
   complexos.
   Motivação: Facilita a organização e reutilização de lógica.

6. `Context API`
   Descrição: Permite a passagem de dados através da árvore de componentes
   sem precisar passar props manualmente em cada nível.
   Uso: Ideal para gerenciar estados globais e compartilhar dados entre
   componentes profundamente aninhados.
   Motivação: Reduz a necessidade de prop drilling e melhora a clareza do
   código.

7. `Compound Components`
   Descrição: Cria um conjunto de componentes que trabalham juntos para
   criar uma interface complexa.
   Uso: Ideal para criar interfaces que compartilham um estado ou
   comportamento.
   Motivação: Facilita a criação de interfaces complexas de forma coesa e
   reutilizável.

`GENERAL - COMPOSITION EXAMPLES`
Botões Personalizáveis:

Descrição: Crie um componente Button que aceita diferentes props para estilos e funcionalidades. Use esse componente em diferentes contextos (e.g., botões primários, secundários, desativados) apenas modificando as props.
Layouts de Cartão:

Descrição: Desenvolva um componente Card que aceita header, body e footer como children. Isso permite a criação de cartões com diferentes conteúdos sem modificar o componente base.
Formulários Flexíveis:

Descrição: Crie um componente Form que aceita children e onSubmit como props. Os children podem ser qualquer conjunto de campos de entrada e botões, permitindo a personalização do formulário.
Modais com Conteúdo Personalizado:

Descrição: Desenvolva um componente Modal que aceita title, content, e actions como children. Você pode usar o componente Modal para diferentes tipos de modais, como confirmação e alertas, mudando apenas o conteúdo.
Navegação com Itens Dinâmicos:

Descrição: Crie um componente NavigationMenu que aceita items como children. Cada item do menu pode ser um componente diferente, permitindo a criação de menus com itens variáveis.
Listas de Itens:

Descrição: Desenvolva um componente List que aceita items como children. Cada item da lista pode ser um componente diferente (e.g., texto, imagem, link), permitindo a criação de listas variadas.
Tabs de Conteúdo:

Descrição: Crie um componente Tabs que aceita Tab como children. Cada Tab pode renderizar conteúdo diferente quando selecionado, facilitando a criação de interfaces de abas.
Seções de Layout:

Descrição: Desenvolva um componente Section que aceita title e content como children. Isso permite criar seções de layout com diferentes títulos e conteúdos sem alterar o componente base.
Portais de Notificação:

Descrição: Crie um componente Notification que aceita message e actions como children. Isso permite criar notificações com diferentes mensagens e ações sem modificar o componente base.
Estilização Condicional:

Descrição: Desenvolva um componente StyledComponent que aceita style e children como props. O componente pode ser estilizado de diferentes maneiras dependendo das props, permitindo uma variedade de aparências.

Botão de Acordeão:

Contexto: Um componente de acordeão com botões para expandir e contrair seções de conteúdo.
Exemplo: O componente Accordion pode ter AccordionItem como seus filhos, e cada AccordionItem pode conter um AccordionHeader e AccordionContent. O Accordion controla o estado de qual item está expandido.
Modal com Cabeçalho e Corpo:

Contexto: Um modal que possui um cabeçalho e um corpo de conteúdo.
Exemplo: O componente Modal pode ter ModalHeader e ModalBody como seus filhos. O Modal controla a visibilidade do modal e posiciona o cabeçalho e o corpo adequadamente.
Tabs (Abas) de Navegação:

Contexto: Um componente de navegação por abas onde você pode alternar entre diferentes painéis de conteúdo.
Exemplo: O componente Tabs pode ter TabList e TabPanel como seus filhos. O Tabs controla qual painel está visível com base na aba selecionada.
Menu Suspenso (Dropdown):

Contexto: Um menu suspenso que mostra opções quando o usuário clica em um botão.
Exemplo: O componente Dropdown pode ter DropdownButton e DropdownMenu como seus filhos. O Dropdown controla a visibilidade do menu e a exibição das opções.
Wizard (Assistente de Navegação):

Contexto: Um assistente de navegação que guia o usuário através de várias etapas.
Exemplo: O componente Wizard pode ter WizardStep como seus filhos. O Wizard controla o progresso e exibe o conteúdo da etapa atual.
Formulário com Campos e Botão de Envio:

Contexto: Um formulário que inclui campos de entrada e um botão de envio.
Exemplo: O componente Form pode ter FormField e SubmitButton como seus filhos. O Form controla a coleta de dados dos campos e o envio do formulário.
Carrossel de Imagens:

Contexto: Um carrossel que exibe imagens em um slideshow.
Exemplo: O componente Carousel pode ter CarouselSlide como seus filhos. O Carousel controla a navegação entre as imagens e o layout do slideshow.
Seletor de Data (DatePicker):

Contexto: Um seletor de data que permite ao usuário escolher uma data de um calendário.
Exemplo: O componente DatePicker pode ter Calendar e DateInput como seus filhos. O DatePicker controla a interação com o calendário e a exibição da data selecionada.
Notificação com Cabeçalho e Mensagem:

Contexto: Um componente de notificação que mostra uma mensagem com um cabeçalho opcional.
Exemplo: O componente Notification pode ter NotificationHeader e NotificationBody como seus filhos. O Notification controla a exibição e o layout da mensagem.
Lista de Itens com Cabeçalho:

Contexto: Uma lista de itens que inclui um cabeçalho para a lista.
Exemplo: O componente List pode ter ListHeader e ListItem como seus filhos. O List controla a renderização e o layout dos itens da lista.
