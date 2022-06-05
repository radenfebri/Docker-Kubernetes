const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>  res.json([
    {
      name: 'Raden Febri',
      age: '21',
      address: 'Jl. Raya Kedungkandang No.1, Kedungkandang, Kec. Kedungkandang, Kota Malang, Jawa Timur 65145',
      hobbies: 'lari-lari',
      email: 'febriye12@gmail.com',
    },

    {
      name: 'Raden Febri Store',
      age: '21',
      address: 'Jl. Raya Kedungkandang No.1, Kedungkandang, Kec. Kedungkandang, Kota Malang, Jawa Timur 65145',
      hobbies: 'lari-lari',
      email: 'radenfebri@gmail.com',
    },

    {
      name: 'Raden Febri Coba',
      age: '21',
      address: 'Jl. Raya Kedungkandang No.1, Kedungkandang, Kec. Kedungkandang, Kota Malang, Jawa Timur 65145',
      hobbies: 'lari-lari',
      email: 'radenfebricoba@gmail.com',
    },

    {
      name: 'Raden Febri Tambah',
      age: '21',
      address: 'Jl. Raya Kedungkandang No.1, Kedungkandang, Kec. Kedungkandang, Kota Malang, Jawa Timur 65145',
      hobbies: 'lari-lari',
      email: 'tambah@gmail.com',
    },
  ]))

app.listen(port, () =>  console.log(`Example app listening on port ${port}!`))