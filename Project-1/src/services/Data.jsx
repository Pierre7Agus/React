const recipe = {
    title: 'Ceviche de camarón ecuatoriano',
    description:'El ceviche de camarón es uno de los ceviches ecuatorianos más populares, es un plato tradicional muy popular en todo el Ecuador, pero sobre todo en las playas ecuatorianas.',
    feedback: {
        rating: 4.8,
        reviews: 100
    },
    ingredients: [
        { name: '2 libras de camarones ya cocinados pelados y sin venas', prepared: false },
        { name: '2 cebollas coloradas pequeñas cortadas en rodajas súper finas', prepared: false },
        { name: '4 tomates cortadas en rodajas finas o picadas en cubitos', prepared: false },
        { name: 'Sal', prepared: true },
        { name: '1 pimiento verde o rojo - picado en cubitos opcional', prepared: true },
        { name: '15-20 limones el jugo', prepared: true },
        { name: '1 manojo de cilantro o culantro picado finamente', prepared: true },
        { name: '1/2 taza de salsa de tomate o tomate licuado/rallado para una versión mas fresca', prepared: true },
    ],
    preparation: [
        {paso:'Frote las rodajas de cebolla con una cucharada de sal, luego enjuáguelas bien con agua fría.'},
        {paso:'Mezcle todos los ingredientes en una fuente de buen tamaño y deje reposar en la refrigeradora por lo menos durante una a dos horas. Pruebe y ajuste la sal si es necesario.'},
        {paso:'Sirva acompañado de ají o salsa picante, chifles, patacones o tostones, maíz tostado, o canguil (palomitas de maíz).'}
    ]
};

export default recipe