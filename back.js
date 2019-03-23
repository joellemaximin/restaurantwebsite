//const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbFile = "blog.db";
const db = new sqlite3.Database(dbFile);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS titleFood (titleFood_id INTEGER PRIMARY KEY AUTOINCREMENT, titleFood_name TEXT, titleFood_img TEXT, titleFood_description TEXT, titleFood_price INTEGER, session_id INTEGER, FOREIGN KEY(session_id) REFERENCES session(id)) ' );

    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Truffle arancini', 'Fried Arborio rice balls with truffle cheese', '', 5.50, 2);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Salted smoked almonds', 'Hickory smoked and lightly spiced', '', 3.50, 2);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Spiced green olives', 'Gordal olives with chilli,coriander and lemon', '', 6.50, 2);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Endive and Stilton salad', ' Shaved apple, cranberries and caramelised hazelnuts', '', 9.50, 2);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Salmon and smoked haddock fish cake', 'Crushed pea and herb sauce with a soft poached hens egg, baby watercress and tenderstem broccoli', '', 15.50, 3);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Classic crème brûlée', 'Classic set vanilla bean custard with a caramelised sugar crust', '', 7.50, 5);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Buffalo mozzarella', 'Crispy artichokes, pear and truffle honey', '', 5.50, 2);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Chicken bourguignon', 'Flat-iron chicken with crispy skin, creamed potato, chestnut mushrooms and bacon lardons', '', 16.50, 3);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Rich chocolate mousse', 'Dark chocolate mousse with raspberries and a salted crunchy peanut caramel topping', '', 7.50, 5);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Mini chocolate truffles', '', '', 3.50, 5);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Selection of three cheeses', '', '', 12.50, 5);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Oak smoked salmon', 'Smoked salmon, black pepper and lemon with dark rye bread', '', 15.50, 2);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'The Ivy shepherd’s pie', 'Slow-braised lamb shoulder with beef and Wookey Hole Cheddar potato mash with peas, sugar snaps and baby shoots', '', 16.50, 3);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Frozen mixed berries', 'Frozen mixed berries with yoghurt sorbet and warm white chocolate sauce', '', 12.50, 5);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Duck liver parfait', 'Caramelised hazelnuts, truffle and a tamarind glaze with pear and ginger compote, toasted brioche', '', 16.50, 2);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Blackened cod fillet', 'Baked in a banana leaf with a soya and sesame marinade, citrus-pickled fennel, grilled broccoli, chilli and yuzu mayonnaise', '', 18.50, 3);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Cappuccino cake', 'Warm chocolate cake, milk mousse and coffee sauce', '', 10.50, 5);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Crispy duck salad', 'Warm crispy duck with five spice dressing, toasted cashews, watermelon, beansprouts, sesame seeds, coriander and ginger', '', 16.50, 2);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Slow-cooked lamb shoulder', 'Herbed crumb, Dijon mustard, creamed potato, carrots, swede and a rosemary sauce', '', 19.50, 3);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Apple tart fine', 'Baked apple tart with Calvados caramel and Madagascan vanilla ice cream ', '', 13.50, 5);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Prawn cocktail', 'Classic prawn cocktail with baby gem, avocado, cherry tomatoes and Marie Rose sauce', '', 16.50, 2);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'English matured 7oz/198g fillet steak', 'Chargrilled English matured 7oz fillet steak served with dauphinoise potatoes, green beans and watercress, peppercorn or Béarnaise sauce', '', 22.50, 3);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Rum baba', 'Plantation rum soaked sponge with Chantilly cream and raspberries', '', 15.50, 5);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Half poached lobster salad', 'Half poached lobster with cucumber and watermelon salad, Amalfi lemon and basil mayonnaise', '', 15.50, 2);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Fillet of beef Wellington', 'Truffle beef Wellington with mushroom duxelles, creamed potato, honey-glazed baby carrots and red wine sauce', '', 24.50, 4);
    db.run('INSERT INTO titleFood (titleFood_name, titleFood_description, titleFood_img, titleFood_price, session_id) VALUES (?,?,?,?,?)', 'Chocolate bombe', 'Melting chocolate bombe with milk foam and a vanilla ice cream and honeycomb centre with hot salted caramel sauce', '', 17.50, 5);


    db.run('CREATE TABLE IF NOT EXISTS session (session_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE)')

    db.run('INSERT INTO session (name) VALUES (?)', 'Breakfast');
    db.run('INSERT INTO session (name) VALUES (?)', 'Starter');
    db.run('INSERT INTO session (name) VALUES (?)', 'Lunch');
    db.run('INSERT INTO session (name) VALUES (?)', 'Dinner');
    db.run('INSERT INTO session (name) VALUES (?)', 'Dessert');


    db.run('CREATE TABLE IF NOT EXISTS restaurantList (restaurantList_id INTEGER PRIMARY KEY AUTOINCREMENT, restaurantList_title TEXT UNIQUE, restaurantList_url TEXT, restaurantList_adress TEXT)');

    db.run('INSERT INTO restaurantList (restaurantList_title, restaurantList_url, restaurantList_adress) VALUES (?,?,?)', "GardenHouse Soho", "", "3 street downFree 3N39WR");
    db.run('INSERT INTO restaurantList (restaurantList_title, restaurantList_url, restaurantList_adress) VALUES (?,?,?)', "GardenHouse Westminster", "", "12 street downFree 3N39WR");
    db.run('INSERT INTO restaurantList (restaurantList_title, restaurantList_url, restaurantList_adress) VALUES (?,?,?)', "GardenHouse Baker Street", "", "4 street downFree 3N39WR");
    db.run('INSERT INTO restaurantList (restaurantList_title, restaurantList_url, restaurantList_adress) VALUES (?,?,?)', "GardenHouse Bournemouth", "", "55 street downFree 3N39WR");
    db.run('INSERT INTO restaurantList (restaurantList_title, restaurantList_url, restaurantList_adress) VALUES (?,?,?)', "GardenHouse St John's Wood", "", "12 street downFree 3N39WR");
    db.run('INSERT INTO restaurantList (restaurantList_title, restaurantList_url, restaurantList_adress) VALUES (?,?,?)', "GardenHouse Tower Bridge", "", "42 street downFree 3N39WR");


    db.run('CREATE TABLE IF NOT EXISTS bookingTable (bookingTable_id INTEGER PRIMARY KEY AUTOINCREMENT, bookingTable_firstname TEXT, bookingTable_lastname TEXT, bookingTable_mail TEXT, bookingTable_numberguest INTEGER, bookingTable_telephone INTEGER, bookingTable_hour INTEGER, session_id INTEGER, restaurantList_id INTEGER, FOREIGN KEY(session_id) REFERENCES session(id), FOREIGN KEY(restaurantList_id) REFERENCES restaurantList(id))')

    db.run('INSERT INTO bookingTable (bookingTable_firstname, bookingTable_lastname, bookingTable_mail, bookingTable_numberguest, bookingTable_telephone, bookingTable_hour, session_id, restaurantList_id) VALUES (?,?,?,?,?,?,?,?)', "James", "Begrhall", "beg@somethi.net", 4, +3349292455, "", 3, 4);
    db.run('INSERT INTO bookingTable (bookingTable_firstname, bookingTable_lastname, bookingTable_mail, bookingTable_numberguest, bookingTable_telephone, bookingTable_hour, session_id, restaurantList_id) VALUES (?,?,?,?,?,?,?,?)', "Elovie", "Paraams", "beg@somethi.net", 2, +3349292455, "", 1, 2);
    db.run('INSERT INTO bookingTable (bookingTable_firstname, bookingTable_lastname, bookingTable_mail, bookingTable_numberguest, bookingTable_telephone, bookingTable_hour, session_id, restaurantList_id) VALUES (?,?,?,?,?,?,?,?)', "Ross", "Geller", "beg@somethi.net", 2, +3349292455, "", 3, 3);
    db.run('INSERT INTO bookingTable (bookingTable_firstname, bookingTable_lastname, bookingTable_mail, bookingTable_numberguest, bookingTable_telephone, bookingTable_hour, session_id, restaurantList_id) VALUES (?,?,?,?,?,?,?,?)', "Sam", "Tori", "beg@somethi.net", 4, +3349292455, "", 3, 1);
    db.run('INSERT INTO bookingTable (bookingTable_firstname, bookingTable_lastname, bookingTable_mail, bookingTable_numberguest, bookingTable_telephone, bookingTable_hour, session_id, restaurantList_id) VALUES (?,?,?,?,?,?,?,?)', "Alex", "Sweat", "beg@somethi.net", 5, +3349292455, "", 1, 6);
    db.run('INSERT INTO bookingTable (bookingTable_firstname, bookingTable_lastname, bookingTable_mail, bookingTable_numberguest, bookingTable_telephone, bookingTable_hour, session_id, restaurantList_id) VALUES (?,?,?,?,?,?,?,?)', "Jeneaffer", "Jeaan", "beg@somethi.net", 6, +3349292455, "", 3, 5);

    db.run('CREATE TABLE IF NOT EXISTS contacts (contact_id INTEGER PRIMARY KEY AUTOINCREMENT, contact_firstname TEXT, contact_lastname TEXT, contact_mail TEXT)')

    db.run('INSERT INTO contacts (contact_firstname, contact_lastname, contact_mail) VALUES (?,?,?)', "James", "Begrhall", "begsomethi.net");
    db.run('INSERT INTO contacts (contact_firstname, contact_lastname, contact_mail) VALUES (?,?,?)', "Elisabeth", "BB", "elisasomethi.net");
    db.run('INSERT INTO contacts (contact_firstname, contact_lastname, contact_mail) VALUES (?,?,?)', "Johns", "Bicker", "bickersomethi.net");

});

///////////////////////
app.get('/', function(req, res){
   db.all('SELECT * FROM titleFood', /*'SELECT * FROM restaurantList',*/
   function (error, data){
    if (!error) res.send(data)
    else console.log(error);
   });
});

///////////////////////////
app.get('/contacts', function(req, res){
    db.all('SELECT * FROM contacts', function (error, data){
        res.send(data);
    });
});


app.post('/contacts', function(request, response){
    console.log(request.body.contact_firstname);
    console.log(request.body.contact_lastname);
    console.log(request.body.contact_mail);
    
    db.run('INSERT INTO contacts (contact_firstname, contact_lastname, contact_mail) VALUES (?,?,?)', request.body.contact_firstname, request.body.contact_lastname, request.body.contact_mail);

    response.redirect("http://www.google.com");
});





// app.get('/restaurantList', function(req, res){
//     db.all('SELECT * FROM restaurantList',
//     function (error, data){
//      if (!error) res.send(data)
//      else console.log(error);
//     });
// });

// /////////////
// // app.get('/session', function(req, res){
// //     db.all('SELECT * FROM session',
// //     function (error, data){
// //         if (!error) res.send(data)
// //         else console.log(error);
// //     });
// // });

// ////////////////////

// app.get('/index.html', function(req, res){
//     db.all('SELECT * FROM titleFood',
//     function (error, data){
//         if (!error) res.send(data)
//         else console.log(error);
//     })
// })


// app.get('/bookingtable', function(req, res){
//     db.all('SELECT * FROM bookingTable',
//     function (error, data){
//      if (!error) res.send(data)
//      else console.log(error);
//     });
// });

// app.post('/formulaire', function(req, res){
//     console.log(req.body.bookingTable_firstname)
//     console.log(req.body.bookingTable_lastname)
//     console.log(req.body.bookingTable_hour)

//     db.run('INSERT INTO bookingTable (bookingTable_firstname, bookingTable_lastname, bookingTable_mail, bookingTable_numberguest, bookingTable_telephone, bookingTable_hour, session_id, restaurantList_id) VALUES (?,?,?,?,?,?,?,?)', req.body.bookingTable_firstname, req.body.bookingTable_lastname, req.body.bookingTable_mail, req.body.bookingTable_telephone, req.body.bookingTable_numberguest, req.body.bookingTable_hour, parseInt(session_id), parseInt(restaurantList_id),
//     function (error, data){
//      if (!error) res.send(data)
//      else console.log(error);
//     });
// });
 

app.listen(3000, function(error){
    if (!error) console.log("ça roule ma poule");
});