 const dates =[
    
    {
    'id': '1',
    'id_categoria': '7',
    'title': 'mussarela',
    'img': 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg',
    'price': '60.00',
    'details':' pizza com queijo top maravilha',
    'allowSelf': true
},
{
    'id': '2',
    'id_categoria': '7',
    'title': 'Quatro Queijos',
    'img': 'https://www.saveur.com/uploads/2019/07/08/JTPSD2ONPYISBHIP4CJ5HDW55A.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440',
    'price': '50.00',
    'details': 'pizza com queijo mussarela,  gorgonzola, parmesão, provolone',
    'allowSelf': true
},
{
    'id': '3',
    'id_categoria': '7',
    'title': 'Calabreza',
    'img': 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg',
    'price': '60.00',
    'details':' pizza com queijo top maravilha',
    'allowSelf': true
},
{
    'id': '4',
    'id_categoria': '7',
    'title': 'Frango Catupiry',
    'img': 'https://www.saveur.com/uploads/2019/07/08/JTPSD2ONPYISBHIP4CJ5HDW55A.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440',
    'price': '50.00',
    'details': 'pizza com queijo mussarela,  gorgonzola, parmesão, provolone',
    'allowSelf': true
},

{
    'id': '5',
    'id_categoria': '7',
    'title': 'Portuguesa',
    'img': 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg',
    'price': '60.00',
    'details':' pizza com queijo top maravilha',
    'allowSelf': true
},
{
    'id': '6',
    'id_categoria': '7',
    'title': 'Marguerita',
    'img': 'https://www.saveur.com/uploads/2019/07/08/JTPSD2ONPYISBHIP4CJ5HDW55A.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440',
    'price': '50.00',
    'details': 'pizza com queijo mussarela,  gorgonzola, parmesão, provolone',
    'allowSelf': true
},
{
    'id': '7',
    'id_categoria': '7',
    'title': 'Puccinela',
    'img': 'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg',
    'price': '60.00',
    'details':' pizza com queijo top maravilha',
    'allowSelf': true
},
{
    'id': '8',
    'id_categoria': '2',
    'title': 'Pizza Banana',
    'img': 'https://www.saveur.com/uploads/2019/07/08/JTPSD2ONPYISBHIP4CJ5HDW55A.jpg?auto=webp&auto=webp&optimize=high&quality=70&width=1440',
    'price': '50.00',
    'details': 'pizza com banana caramelizada',
    'allowSelf': true
},
{
    'id': '8',
    'id_categoria': '1',
    'title': 'Coca Cola 2 Litros',
    'img': 'data:image/jpeg;base64,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',
    'price': '10.00',
    'details': 'Coca-Cola garrafa 2 litros',
    'allowSelf': false
},
{
    'id': '9',
    'id_categoria': '4',
    'title': 'Cerveja',
    'img': 'https://swiftbr.vteximg.com.br/arquivos/ids/184370-636-636/620031_HEINEKEN-269ML.png?v=637957499365500000',
    'price': '10.00',
    'details': 'Cerveja heineken',
    'allowSelf': false
},




];

export default dates;