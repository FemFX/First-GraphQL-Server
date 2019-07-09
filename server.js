const express = require('express');
const app     = express(); 
const PORT    = process.env.PORT || 4000;
const schema   = require('./schema');
const expressGraphQL = require('express-graphql');

app.use('/graphql', expressGraphQL({
    schema,
    graphiql : true
}))

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

